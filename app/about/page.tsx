import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Award, Users, Globe } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-[#1E40AF] rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About CardFinder GH
                </h1>
                <p className="text-xl text-white/90">
                  We're on a mission to help Ghanaians recover their lost cards and documents through a secure, 
                  efficient platform that connects finders with owners.
                </p>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF] to-transparent z-10"></div>
                <img 
                  src="/images/background/gh-card.png" 
                  alt="Ghana Card" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  CardFinder GH was founded in 2023 after our founder lost his Ghana Card in Accra and spent weeks trying to recover it. 
                  After experiencing the frustration firsthand, he realized there needed to be a better way to connect people who find lost 
                  cards with their rightful owners.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  What started as a simple idea has grown into Ghana's premier lost card recovery platform, helping thousands of 
                  Ghanaians reunite with their important documents and cards.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Today, CardFinder GH operates throughout Ghana, with a dedicated team committed to making the card recovery process 
                  as simple, secure, and efficient as possible.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-48 bg-[#F97316] rounded-lg rotate-6 opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-72 h-48 bg-[#1E40AF] rounded-lg -rotate-6 opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border dark:border-gray-700">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="CardFinder GH Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To create a trustworthy platform that simplifies the process of recovering lost cards and documents, 
                  reducing the stress and inconvenience of card loss for all Ghanaians.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-[#1E40AF]/10 dark:bg-[#1E40AF]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              At CardFinder GH, our work is guided by a set of core values that shape everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Trust & Security</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  We prioritize the security of personal information and create a trustworthy environment for all users.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Excellence</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  We strive for excellence in our platform, service, and support to provide the best possible experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Community</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  We believe in the power of community and fostering a culture of honesty and helpfulness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Accessibility</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  We're committed to making our service accessible to all Ghanaians, regardless of location or background.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated team behind CardFinder GH who work tirelessly to help Ghanaians recover their lost cards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://images.pexels.com/photos/1820656/pexels-photo-1820656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Kofi Mensah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">Kofi Mensah</h3>
                <p className="text-[#F97316] mb-3">Founder & CEO</p>
                <p className="text-muted-foreground dark:text-gray-300">
                  Kofi founded CardFinder GH after his personal experience with losing important documents. 
                  He leads the company's vision and strategy.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 2 */}
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ama Darko" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">Ama Darko</h3>
                <p className="text-[#F97316] mb-3">Chief Technology Officer</p>
                <p className="text-muted-foreground dark:text-gray-300">
                  Ama oversees the development and maintenance of our platform, ensuring it remains secure, 
                  efficient, and user-friendly.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 3 */}
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700">
                <img 
                  src="https://images.pexels.com/photos/8837586/pexels-photo-8837586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Kwame Osei" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">Kwame Osei</h3>
                <p className="text-[#F97316] mb-3">Head of Operations</p>
                <p className="text-muted-foreground dark:text-gray-300">
                  Kwame manages our day-to-day operations and coordinates with partners across Ghana to 
                  expand our service reach.
                </p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Join Our Mission</h2>
                <p className="mt-4 text-lg text-white/90">
                  Be part of the solution by helping Ghanaians recover their lost cards. Sign up today to report a found card or search for your lost one.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white dark:bg-white text-primary dark:text-primary hover:bg-white/80 dark:hover:bg-white/90">
                    <Link href="/auth/signup">Get Started Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-[#F97316] hover:bg-white/20 hover:text-white dark:border-white dark:text-[#F97316] dark:hover:bg-white/20 dark:hover:text-white">
                    <Link href="/contact">Contact Us</Link>
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
