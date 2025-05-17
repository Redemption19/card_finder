import supabase from '../supabase/client';

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface UpdateProfileData {
  name: string;
  phone: string;
  currentPassword?: string;
  newPassword?: string;
}

export const AuthService = {
  async signUp({ email, password, name, phone }: SignUpData) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          phone,
        },
      },
    });

    if (error) throw error;

    // Create user record in users table
    if (data.user) {
      const { error: userError } = await supabase
        .from('users')
        .insert({
          id: data.user.id,
          email: data.user.email!,
          role: 'user',
        });

      if (userError) throw userError;
    }

    return data;
  },

  async signIn({ email, password }: SignInData) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    
    if (data.user) {
      // Get user role from users table
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single();
      
      if (userError) throw userError;
      
      return {
        ...data.user,
        role: userData.role,
      };
    }
    
    return null;
  },

  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password/update`,
    });
    
    if (error) throw error;
  },

  async updatePassword(newPassword: string) {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;
  },

  async updateProfile({ name, phone, currentPassword, newPassword }: UpdateProfileData) {
    // If changing password, verify current password first
    if (currentPassword && newPassword) {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) throw new Error('Not authenticated');

      // Verify current password by attempting to sign in
      const { error: verifyError } = await supabase.auth.signInWithPassword({
        email: user.user.email!,
        password: currentPassword,
      });

      if (verifyError) throw new Error('Current password is incorrect');

      // Update password
      await this.updatePassword(newPassword);
    }

    // Update user metadata
    const { error: updateError } = await supabase.auth.updateUser({
      data: {
        name,
        phone,
      },
    });

    if (updateError) throw updateError;
  },
};

export default AuthService;