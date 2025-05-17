import supabase from '../supabase/client';

export const AdminService = {
  async getAllFoundCards(skipAdminCheck = false) {
    try {
      const { data: user, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        console.error('Auth error in getAllFoundCards:', userError);
        throw new Error(`Authentication error: ${userError.message}`);
      }
      
      if (!user.user?.id) {
        throw new Error('User not authenticated');
      }
      
      // Check if user is admin (skip if called from admin page)
      if (!skipAdminCheck) {
        try {
          const { data: userData, error: roleError } = await supabase
            .from('users')
            .select('role')
            .eq('id', user.user.id)
            .single();
          
          if (roleError) {
            console.error('Role check error:', roleError);
            throw new Error(`Role check failed: ${roleError.message}`);
          }
          
          if (userData?.role !== 'admin') {
            throw new Error('Unauthorized: Admin access required');
          }
        } catch (roleCheckError) {
          console.error('Role check failed:', roleCheckError);
          throw roleCheckError;
        }
      }
      
      const { data, error } = await supabase
        .from('found_cards')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Supabase query error:', error);
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('Error in getAllFoundCards:', error);
      throw error;
    }
  },
  
  async updateFoundCardStatus(id: string, status: 'pending' | 'matched' | 'returned' | 'rejected', skipAdminCheck = false) {
    try {
      const { data: user, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        console.error('Auth error in updateFoundCardStatus:', userError);
        throw new Error(`Authentication error: ${userError.message}`);
      }
      
      if (!user.user?.id) {
        throw new Error('User not authenticated');
      }
      
      // Check if user is admin (skip if called from admin page)
      if (!skipAdminCheck) {
        try {
          const { data: userData, error: roleError } = await supabase
            .from('users')
            .select('role')
            .eq('id', user.user.id)
            .single();
          
          if (roleError) {
            console.error('Role check error:', roleError);
            throw new Error(`Role check failed: ${roleError.message}`);
          }
          
          if (userData?.role !== 'admin') {
            throw new Error('Unauthorized: Admin access required');
          }
        } catch (roleCheckError) {
          console.error('Role check failed:', roleCheckError);
          throw roleCheckError;
        }
      }
      
      const { data, error } = await supabase
        .from('found_cards')
        .update({ status })
        .eq('id', id)
        .select()
        .single();
      
      if (error) {
        console.error('Supabase update error:', error);
        throw error;
      }
      
      // Notify the finder
      try {
        await supabase
          .from('notifications')
          .insert({
            user_id: data.finder_id,
            title: 'Card Status Updated',
            message: `Your found card report for ${data.name_on_card} has been ${status}`,
            type: 'system_notice',
            related_card_id: id,
          });
      } catch (notificationError) {
        console.error('Failed to create notification:', notificationError);
        // Continue even if notification fails
      }
      
      return data;
    } catch (error) {
      console.error('Error in updateFoundCardStatus:', error);
      throw error;
    }
  },
  
  async getAllLostReports(skipAdminCheck = false) {
    try {
      const { data: user, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        console.error('Auth error in getAllLostReports:', userError);
        throw new Error(`Authentication error: ${userError.message}`);
      }
      
      if (!user.user?.id) {
        throw new Error('User not authenticated');
      }
      
      // Check if user is admin (skip if called from admin page)
      if (!skipAdminCheck) {
        try {
          const { data: userData, error: roleError } = await supabase
            .from('users')
            .select('role')
            .eq('id', user.user.id)
            .single();
          
          if (roleError) {
            console.error('Role check error:', roleError);
            throw new Error(`Role check failed: ${roleError.message}`);
          }
          
          if (userData?.role !== 'admin') {
            throw new Error('Unauthorized: Admin access required');
          }
        } catch (roleCheckError) {
          console.error('Role check failed:', roleCheckError);
          throw roleCheckError;
        }
      }
      
      const { data, error } = await supabase
        .from('lost_reports')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Supabase query error:', error);
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('Error in getAllLostReports:', error);
      throw error;
    }
  },
  
  async getAllUsers(skipAdminCheck = false) {
    try {
      const { data: user, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        console.error('Auth error in getAllUsers:', userError);
        throw new Error(`Authentication error: ${userError.message}`);
      }
      
      if (!user.user?.id) {
        throw new Error('User not authenticated');
      }
      
      // Check if user is admin (skip if called from admin page)
      if (!skipAdminCheck) {
        try {
          const { data: userData, error: roleError } = await supabase
            .from('users')
            .select('role')
            .eq('id', user.user.id)
            .single();
          
          if (roleError) {
            console.error('Role check error:', roleError);
            throw new Error(`Role check failed: ${roleError.message}`);
          }
          
          if (userData?.role !== 'admin') {
            throw new Error('Unauthorized: Admin access required');
          }
        } catch (roleCheckError) {
          console.error('Role check failed:', roleCheckError);
          throw roleCheckError;
        }
      }
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Supabase query error:', error);
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('Error in getAllUsers:', error);
      throw error;
    }
  },
  
  async updateUserRole(id: string, role: 'user' | 'admin', skipAdminCheck = false) {
    try {
      const { data: user, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        console.error('Auth error in updateUserRole:', userError);
        throw new Error(`Authentication error: ${userError.message}`);
      }
      
      if (!user.user?.id) {
        throw new Error('User not authenticated');
      }
      
      // Check if user is admin (skip if called from admin page)
      if (!skipAdminCheck) {
        try {
          const { data: userData, error: roleError } = await supabase
            .from('users')
            .select('role')
            .eq('id', user.user.id)
            .single();
          
          if (roleError) {
            console.error('Role check error:', roleError);
            throw new Error(`Role check failed: ${roleError.message}`);
          }
          
          if (userData?.role !== 'admin') {
            throw new Error('Unauthorized: Admin access required');
          }
        } catch (roleCheckError) {
          console.error('Role check failed:', roleCheckError);
          throw roleCheckError;
        }
      }
      
      const { data, error } = await supabase
        .from('users')
        .update({ role })
        .eq('id', id)
        .select()
        .single();
      
      if (error) {
        console.error('Supabase update error:', error);
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error('Error in updateUserRole:', error);
      throw error;
    }
  },
};

export default AdminService;