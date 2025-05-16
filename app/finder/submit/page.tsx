"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image"; // Add this import
import { CreditCard, Upload, MapPin, User, Mail, Phone, Info, AlertCircle, CheckCircle } from "lucide-react";
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

const formSchema = z.object({
  nameOnCard: z.string().min(3, "Name must be at least 3 characters"),
  cardType: z.nativeEnum(CardType),
  lastFourDigits: z.string()
    .max(4, "Cannot exceed 4 digits")
    .optional()
    .refine(val => !val || /^\d{4}$/.test(val), { 
      message: "Must be exactly 4 digits if provided",
    }),
  foundLocation: z.string().min(5, "Please provide a more detailed location"),
  description: z.string().optional(),
  finderName: z.string().min(3, "Name must be at least 3 characters"),
  finderEmail: z.string().email("Invalid email address"),
  finderPhone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .refine(val => /^\+?[0-9]{10,15}$/.test(val), {
      message: "Please enter a valid phone number",
    }),
  cardPhoto: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SubmitFoundCard() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardPhotoPreview, setCardPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameOnCard: "",
      cardType: undefined,
      lastFourDigits: "",
      foundLocation: "",
      description: "",
      finderName: "",
      finderEmail: "",
      finderPhone: "",
      cardPhoto: undefined,
    },
    mode: "onSubmit", // Only validate when form is submitted
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // This is where you would normally submit the data to your backend
      console.log(data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      form.reset();
      setCardPhotoPreview(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simplify the file input click handler
  const handleFileInputClick = (e: React.MouseEvent) => {
    // Important: Don't prevent default behavior for the button click
    e.stopPropagation();
    
    // Directly click the file input without setTimeout
    if (fileInputRef.current) {
      fileInputRef.current.click();
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

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
        <Card className="border-green-500 dark:border-green-500">
          <CardHeader className="bg-green-50 dark:bg-green-900/20 rounded-t-lg border-b border-green-100 dark:border-green-800">
            <div className="flex items-center space-x-2">
              <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <CardTitle className="text-green-800 dark:text-green-300">Card Successfully Submitted</CardTitle>
                <CardDescription>Thank you for your honesty!</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 pb-4">
            <p className="mb-4">
              Your found card report has been submitted successfully. Our team will review your submission shortly.
            </p>
            <p className="mb-4">
              If the owner of this card searches for it, they will be able to see your submission and contact you through our secure system.
            </p>
            <p className="text-muted-foreground text-sm">
              Reference ID: CF-{Math.floor(100000 + Math.random() * 900000)}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2 bg-green-50/50 dark:bg-green-900/10 rounded-b-lg border-t border-green-100 dark:border-green-900">
            <Button onClick={() => setIsSuccess(false)}>Submit Another Card</Button>
            <Button variant="outline">Track Your Submissions</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
      <Card>
        <CardHeader className="text-center border-b">
          <CardTitle className="text-2xl">Submit a Found Card</CardTitle>
          <CardDescription>
            Help return a lost card to its rightful owner
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Alert className="mb-6 border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-900/20">
            <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-yellow-800 dark:text-yellow-400">Important</AlertTitle>
            <AlertDescription className="text-yellow-700 dark:text-yellow-500">
              For privacy and security reasons, please do not upload photos that clearly show the full card number, 
              expiration date, or CVV code. Partially blurred photos are acceptable.
            </AlertDescription>
          </Alert>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
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
                          <Input placeholder="John Doe" {...field} />
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
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select card type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.values(CardType).map((type) => (
                              <SelectItem key={type} value={type}>
                                <div className="flex items-center">
                                  <CardTypeBadge cardType={type as CardType} />
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="lastFourDigits"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last 4 Digits (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="1234" {...field} />
                        </FormControl>
                        <FormDescription>
                          For bank cards only
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="foundLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Where Found</FormLabel>
                        <FormControl>
                          <Input placeholder="Accra Mall, Accra" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide any additional details that might help identify the card owner..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Describe the circumstances in which you found the card or any other relevant information
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <div className="mb-4">
                    <h3 className="font-medium text-lg flex items-center gap-2 pb-1 border-b">
                      <Upload className="h-5 w-5 text-primary" />
                      Card Photo (Optional)
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Upload a photo of the card to help with identification. Make sure to blur or cover sensitive information.
                    </p>
                  </div>
                  <div 
                    className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    {cardPhotoPreview ? (
                      <div 
                        className="flex flex-col items-center gap-2"
                        onClick={handleFileInputClick}
                      >
                        <div className="relative w-full max-w-md mx-auto">
                          <Image 
                            src={cardPhotoPreview} 
                            alt="Card preview" 
                            width={400}
                            height={250}
                            className="rounded-md max-h-48 mx-auto object-contain"
                            unoptimized
                          />
                          <Button 
                            variant="destructive" 
                            size="sm" 
                            className="absolute top-2 right-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCardPhotoPreview(null);
                              form.setValue('cardPhoto', undefined);
                            }}
                            type="button"
                          >
                            Remove
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Click to change image
                        </p>
                      </div>
                    ) : (
                      <div 
                        className="flex flex-col items-center gap-2"
                        onClick={handleFileInputClick}
                      >
                        <div className="bg-primary/10 rounded-full p-3">
                          <Upload className="h-6 w-6 text-primary" />
                        </div>
                        <p className="font-medium">Drag and drop a photo or click to upload</p>
                        <p className="text-sm text-muted-foreground">
                          JPEG or PNG, max 5MB. Please blur sensitive details.
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2" 
                          onClick={handleFileInputClick}
                          type="button"
                        >
                          Select File
                        </Button>
                      </div>
                    )}
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      className="hidden" 
                      accept="image/jpeg,image/png,image/jpg"
                      onChange={handleCardPhotoChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="font-medium text-lg flex items-center gap-2 pb-1 border-b">
                  <User className="h-5 w-5 text-primary" />
                  Your Contact Information
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your contact details will only be shared with the verified card owner.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="finderName"
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
                    name="finderEmail"
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
                    name="finderPhone"
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

              <div className="flex flex-col md:flex-row gap-2 justify-end pt-2">
                <Button variant="outline" type="button" onClick={() => {
                  form.reset();
                  setCardPhotoPreview(null);
                }}>
                  Reset Form
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Found Card"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}