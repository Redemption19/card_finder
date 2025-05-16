"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, Calendar, MapPin, User, Mail, Phone, Info, AlertCircle, Shield, Lock, Upload, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CardType } from "@/lib/types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CardTypeBadge } from "@/components/card-type-badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '');
};

const formSchema = z.object({
  nameOnCard: z.string().min(3, "Name must be at least 3 characters"),
  cardType: z.nativeEnum(CardType),
  lastFourDigits: z.string()
    .max(4, "Cannot exceed 4 digits")
    .optional()
    .refine(val => !val || /^\d{4}$/.test(val), { 
      message: "Must be exactly 4 digits if provided",
    }),
  lostLocation: z.string().min(5, "Please provide a more detailed location"),
  lostDate: z.date().optional(),
  description: z.string().optional(),
  cardPhoto: z.any().optional(),
  ownerName: z.string().min(3, "Name must be at least 3 characters"),
  ownerEmail: z.string().email("Invalid email address"),
  ownerPhone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .refine(val => /^\+?[0-9]{10,15}$/.test(val), {
      message: "Please enter a valid phone number",
    }),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "You must agree to our Privacy Policy to proceed",
  }),
  captchaToken: z.string().min(1, "Please complete the CAPTCHA verification"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ReportLostCard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [cardPhotoPreview, setCardPhotoPreview] = useState<string | null>(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const userLoggedIn = false;
      setIsLoggedIn(userLoggedIn);
      setShowLoginPrompt(!userLoggedIn);
    };
    checkLoginStatus();
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameOnCard: "",
      cardType: undefined,
      lastFourDigits: "",
      lostLocation: "",
      lostDate: undefined,
      description: "",
      cardPhoto: undefined,
      ownerName: "",
      ownerEmail: "",
      ownerPhone: "",
      privacyConsent: false,
      captchaToken: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const sanitizedData = {
        ...data,
        nameOnCard: sanitizeInput(data.nameOnCard),
        lostLocation: sanitizeInput(data.lostLocation),
        description: data.description ? sanitizeInput(data.description) : "",
        ownerName: sanitizeInput(data.ownerName),
      };
      
      console.log(sanitizedData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCardPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setCardPhotoPreview(e.target?.result as string);
      form.setValue('cardPhoto', file);
    };
    reader.readAsDataURL(file);
  };
  
  const clearCardPhoto = () => {
    setCardPhotoPreview(null);
    form.setValue('cardPhoto', undefined);
  };

  const handleCaptchaChange = (token: string) => {
    setCaptchaValue(token);
    form.setValue("captchaToken", token);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
        <Card className="border-blue-100 dark:border-blue-900">
          <CardHeader className="bg-blue-50 dark:bg-blue-900/20 rounded-t-lg border-b border-blue-100 dark:border-blue-900">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <CardTitle className="text-blue-800 dark:text-blue-300">Lost Card Successfully Reported</CardTitle>
                <CardDescription>We'll notify you if your card is found</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4 dark:text-gray-300">
              Thank you for reporting your lost card. We have recorded your information and will notify you immediately if someone finds your card.
            </p>
            <p className="mb-6 dark:text-gray-300">
              In the meantime, we recommend you contact your card issuer to block the card and request a replacement if you haven't already done so.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/owner/search">Search for Found Cards</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
      {showLoginPrompt && (
        <Alert className="mb-6 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
          <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertTitle className="text-amber-800 dark:text-amber-400">Login Recommended</AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            For better security and to track your reported cards, we recommend <Link href="/auth/signin" className="font-medium underline">logging in</Link> or <Link href="/auth/signup" className="font-medium underline">creating an account</Link>. You can still continue as a guest.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Report a Lost Card</CardTitle>
          <CardDescription className="dark:text-gray-300">
            Submit details about your lost card so we can help you find it
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Security Warning</AlertTitle>
            <AlertDescription className="dark:text-gray-300">
              For your security, never enter your full card number, CVV, PIN, or password.
              We only need the last 4 digits to help identify your card.
            </AlertDescription>
          </Alert>

          <Alert className="mb-6 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
            <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-800 dark:text-blue-400">How We Protect Your Information</AlertTitle>
            <AlertDescription className="text-blue-700 dark:text-blue-300">
              <p className="dark:text-gray-300">Your personal information is encrypted and securely stored. We only share your contact details with the finder of your card after verification of ownership. Read our <Link href="/privacy" className="font-medium underline">Privacy Policy</Link> for more details.</p>
            </AlertDescription>
          </Alert>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4 pt-2">
                <h3 className="font-medium text-lg flex items-center gap-2 pb-1 border-b">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Card Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nameOnCard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name on Card</FormLabel>
                        <FormControl>
                          <Input placeholder="Name as it appears on the card" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cardType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select card type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={CardType.GhanaCard}>Ghana Card (National ID)</SelectItem>
                            <SelectItem value={CardType.VoterID}>Voter's ID</SelectItem>
                            <SelectItem value={CardType.DriversLicense}>Driver's License</SelectItem>
                            <SelectItem value={CardType.DebitCard}>Debit Card</SelectItem>
                            <SelectItem value={CardType.CreditCard}>Credit Card</SelectItem>
                            <SelectItem value={CardType.NHIS}>NHIS Card</SelectItem>
                            <SelectItem value={CardType.Other}>Other Card</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="lastFourDigits"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last 4 Digits (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Last 4 digits only" 
                          maxLength={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription className="dark:text-gray-300">
                        For bank cards, enter the last 4 digits to help with identification. <span className="text-destructive font-semibold">Never enter your full card number.</span>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="font-medium text-lg flex items-center gap-2 pb-1 border-b">
                  <MapPin className="h-5 w-5 text-primary" />
                  Loss Details
                </h3>

                <FormField
                  control={form.control}
                  name="lostLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Where did you lose it?</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Accra Mall, Osu Oxford Street, etc." {...field} />
                      </FormControl>
                      <FormDescription className="dark:text-gray-300">
                        Be as specific as possible about the location
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lostDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>When did you lose it? (Optional)</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <Calendar className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription className="dark:text-gray-300">
                        The approximate date when you lost your card
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Updated File Upload Section */}
                <div className="space-y-2">
                  <FormLabel>Card Photo (Optional)</FormLabel>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button" 
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => document.getElementById('card-photo-upload')?.click()}
                    >
                      <Upload className="h-4 w-4" />
                      <span>Upload Photo</span>
                    </Button>
                    <input
                      id="card-photo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleCardPhotoChange}
                    />
                    
                    {cardPhotoPreview && (
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={clearCardPhoto}
                        className="text-destructive hover:text-destructive/80 flex items-center gap-1"
                      >
                        <X className="h-4 w-4" />
                        <span>Remove</span>
                      </Button>
                    )}
                  </div>
                  
                  {cardPhotoPreview && (
                    <div className="mt-2 relative border rounded-md overflow-hidden w-full max-w-[300px] h-[200px]">
                      <img 
                        src={cardPhotoPreview} 
                        alt="Card preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <FormDescription className="dark:text-gray-300">
                    Upload a photo of your card to help with identification. Please blur or hide any sensitive information.
                  </FormDescription>
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide any additional details that might help identify your card..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="dark:text-gray-300">
                        Describe the circumstances in which you lost the card or any other relevant information. Do not include sensitive information.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="font-medium text-lg flex items-center gap-2 pb-1 border-b">
                  <User className="h-5 w-5 text-primary" />
                  Your Contact Information
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300 flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  Your contact details will be used to notify you if your card is found and will only be shared with verified finders.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="ownerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="ownerEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="you@example.com" 
                            type="email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ownerPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+233 XX XXX XXXX" 
                            type="tel"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="font-medium text-lg flex items-center gap-2 pb-1 border-b">
                  <Shield className="h-5 w-5 text-primary" />
                  Verification
                </h3>
                <div className="mt-4 p-4 border rounded-md bg-muted/20">
                  <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">Please complete the verification below to submit your report:</p>
                  
                  <div className="flex items-center justify-center p-4 border rounded bg-background">
                    <button 
                      type="button"
                      className="text-sm px-4 py-2 border rounded hover:bg-muted"
                      onClick={() => handleCaptchaChange("mock-captcha-token")}
                    >
                      Click to verify (Demo CAPTCHA)
                    </button>
                  </div>
                  
                  {captchaValue && (
                    <p className="text-xs text-green-600 dark:text-green-400 mt-2 text-center">✓ Verification completed</p>
                  )}
                  
                  {form.formState.errors.captchaToken && (
                    <p className="text-xs text-destructive mt-2 text-center">{form.formState.errors.captchaToken.message}</p>
                  )}
                </div>
              </div>

              <FormField
                control={form.control}
                name="privacyConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the <Link href="/privacy" className="text-primary underline">Privacy Policy</Link> and consent to the processing of my personal information
                      </FormLabel>
                      <FormDescription className="dark:text-gray-300">
                        We'll only use your information to help recover your card and will protect it according to our privacy policy.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex flex-col md:flex-row gap-2 justify-end pt-2">
                <Button variant="outline" type="button" onClick={() => form.reset()}>
                  Reset Form
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Report Lost Card"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}