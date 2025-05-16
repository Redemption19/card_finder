import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import dynamic from 'next/dynamic';

// Dynamically import the GoogleMap component with no SSR
const GoogleMapComponent = dynamic(
  () => import('@/components/map/google-map'),
  { ssr: false }
);

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-r from-primary to-[#F97316] h-[300px] md:h-[400px] w-full absolute rounded-xl left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-grid-white/25 bg-[length:20px_20px] opacity-10"></div>
          <div className="relative pt-12 pb-16 md:pt-16 md:pb-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have questions or need assistance? Our team is here to help you with any inquiries about CardFinder GH.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Whether you have a question about our services, need help with your account, or want to provide feedback, 
                we'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full w-10 h-10 bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Email Us</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">For general inquiries:</p>
                    <a href="mailto:info@cardfinder.gh" className="text-primary hover:text-primary/80 dark:text-[#F97316] dark:hover:text-[#F97316]/80">
                      info@cardfinder.gh
                    </a>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 mb-1">For support:</p>
                    <a href="mailto:support@cardfinder.gh" className="text-primary hover:text-primary/80 dark:text-[#F97316] dark:hover:text-[#F97316]/80">
                      support@cardfinder.gh
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full w-10 h-10 bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Call Us</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">Customer Support:</p>
                    <a href="tel:+233302123456" className="text-primary hover:text-primary/80 dark:text-[#F97316] dark:hover:text-[#F97316]/80">
                      +233 30 212 3456
                    </a>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 mb-1">Business Inquiries:</p>
                    <a href="tel:+233302789012" className="text-primary hover:text-primary/80 dark:text-[#F97316] dark:hover:text-[#F97316]/80">
                      +233 30 278 9012
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full w-10 h-10 bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Visit Us</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      CardFinder GH Headquarters<br />
                      14 Independence Avenue<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full w-10 h-10 bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-primary dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">Business Hours</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border-none shadow-lg dark:border dark:border-gray-700">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-semibold mb-6 dark:text-white">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="account">Account Issues</SelectItem>
                          <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" rows={5} />
                    </div>
                    
                    <div className="pt-2">
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        By submitting this form, you agree to our <Link href="/privacy" className="text-primary hover:text-primary/80 dark:text-[#F97316] dark:hover:text-[#F97316]/80">Privacy Policy</Link>.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-[#1E40AF]/10 dark:bg-[#1E40AF]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Visit our headquarters in Accra or one of our regional offices throughout Ghana.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-[16/9] w-full">
              <GoogleMapComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Regional Offices</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              CardFinder GH has offices in major cities across Ghana to better serve you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md dark:border dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Kumasi Office</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>25 Prempeh Street</p>
                  <p>Adum, Kumasi</p>
                  <p>Ghana</p>
                  <p className="pt-2">
                    <span className="font-medium">Phone:</span> +233 32 123 4567
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> kumasi@cardfinder.gh
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:border dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Tamale Office</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>7 Dagomba Road</p>
                  <p>Tamale</p>
                  <p>Ghana</p>
                  <p className="pt-2">
                    <span className="font-medium">Phone:</span> +233 37 765 4321
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> tamale@cardfinder.gh
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:border dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Takoradi Office</h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>12 Market Circle</p>
                  <p>Takoradi</p>
                  <p>Ghana</p>
                  <p className="pt-2">
                    <span className="font-medium">Phone:</span> +233 31 987 6543
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> takoradi@cardfinder.gh
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-primary rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
                <p className="mt-4 text-lg text-white/90">
                  Be part of the CardFinder GH community and help make a difference in Ghana. Sign up today to start reporting or searching for lost cards.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white dark:bg-white text-primary dark:text-primary hover:bg-white/80 dark:hover:bg-white/90">
                    <Link href="/auth/signup">Create an Account</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-[#F97316] hover:bg-white/20 hover:text-white dark:border-white dark:text-[#F97316] dark:hover:bg-white/20 dark:hover:text-white">
                    <Link href="/faq">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
                <div className="h-full bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
