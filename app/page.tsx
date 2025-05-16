import Link from "next/link";
import { CreditCard, Search, AlertTriangle, Award, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-r from-primary to-[#F97316] h-[500px] md:h-[600px] w-full absolute rounded-xl left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-grid-white/25 bg-[length:20px_20px] opacity-10"></div>
          <div className="relative pt-20 pb-24 md:pt-32 md:pb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white dark:text-primary-foreground">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Reunite With Your Lost Cards in Ghana
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-white/90 dark:text-primary-foreground/90 leading-relaxed">
                  CardFinder GH connects people who have found cards with their rightful owners, 
                  making the recovery process quick and secure.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white text-primary hover:bg-white/80 dark:bg-white dark:text-primary dark:hover:bg-white/90">
                    <Link href="/finder/submit">I Found a Card</Link>
                  </Button>
                  <Button size="lg" asChild className="bg-[#F97316] text-white hover:bg-[#F97316]/90 dark:bg-[#F97316] dark:text-white dark:hover:bg-[#F97316]/90">
                    <Link href="/owner/search">Search for My Card</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-72 h-48 bg-[#F97316] rounded-lg rotate-6 opacity-30"></div>
                  <div className="absolute -bottom-6 -right-6 w-72 h-48 bg-[#1E40AF] rounded-lg -rotate-6 opacity-30"></div>
                  <div className="relative bg-white dark:bg-card p-8 rounded-lg shadow-xl">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Found Card</div>
                        <div className="text-lg font-semibold dark:text-foreground">Ghana Card</div>
                      </div>
                      <CreditCard className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Card Owner</div>
                        <div className="text-sm font-medium dark:text-foreground">Kofi Annan</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Found Location</div>
                        <div className="text-sm font-medium dark:text-foreground">Accra Mall, Accra</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Date Found</div>
                        <div className="text-sm font-medium dark:text-foreground">July 26, 2025</div>
                      </div>
                      <Button className="w-full bg-primary text-primary-foreground dark:bg-white dark:text-primary hover:bg-primary/90 dark:hover:bg-white/90">Claim This Card</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#1E40AF]/10 dark:bg-[#1E40AF]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How CardFinder Works</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform makes it easy to connect those who have found cards with their rightful owners
              through a secure and straightforward process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <CreditCard className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Submit Found Card</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  If you've found a card, submit details on our platform including the card type, name, and where you found it.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Search & Connect</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Card owners can search for their lost cards and securely connect with finders through our platform.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Reward & Recover</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  After verification, owners can send a token of appreciation and arrange to recover their card safely.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Lost Card */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Lost Your Card?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Report your lost card on our platform and get notified if someone finds it. We support various types of 
                cards including:
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#1E40AF]/10 p-1">
                    <svg className="h-5 w-5 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Ghana Card (National ID)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#1E40AF]/10 p-1">
                    <svg className="h-5 w-5 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Voter's ID Card</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#1E40AF]/10 p-1">
                    <svg className="h-5 w-5 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Driver's License</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#1E40AF]/10 p-1">
                    <svg className="h-5 w-5 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Bank Cards (Debit/Credit)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-[#1E40AF]/10 p-1">
                    <svg className="h-5 w-5 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>NHIS Cards</span>
                </li>
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/owner/report">Report Lost Card</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg h-72 w-full opacity-20 absolute -bottom-4 -right-4"></div>
              <div className="relative bg-card rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">Report a Lost Card</h3>
                    <p className="text-muted-foreground">Get notified when it's found</p>
                  </div>
                  <AlertTriangle className="h-10 w-10 text-red-500" />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted h-10 rounded"></div>
                    <div className="bg-muted h-10 rounded"></div>
                  </div>
                  <div className="bg-muted h-10 rounded"></div>
                  <div className="bg-muted h-10 rounded"></div>
                  <div className="bg-muted h-24 rounded"></div>
                  <Button className="w-full" asChild>
                    <Link href="/owner/report">Submit Report</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose CardFinder GH</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed with security, privacy, and user experience in mind to ensure 
              a safe and effective card recovery process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Privacy-Focused</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  We mask sensitive card information and only reveal necessary details after verification.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Fast Recovery</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Our platform helps you quickly locate and recover your lost cards, reducing the time and stress of replacement.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary dark:text-white">
                    <path d="M12 22s8-4 8-10V6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v6c0 6 8 10 8 10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Secure Verification</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  We use multiple verification steps to confirm the identity of card owners before connecting them with finders.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary dark:text-white">
                    <path d="M17 18h1a4 4 0 0 0 0-8h-1" />
                    <path d="M3 18h1a4 4 0 0 0 0-8H3" />
                    <path d="M10 18h4a4 4 0 0 0 0-8h-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">National Coverage</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Our service covers all regions in Ghana, making it easier to find cards regardless of where they were lost.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary dark:text-white">
                    <path d="M5.2 6A3 3 0 0 0 4 8.8c.3 1.2 1.2 2.2 2.4 2.4a3 3 0 0 0 2.8-1.2V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8h.6a3 3 0 0 0 2.8-4.2 3 3 0 0 0-5.6 1.2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Appreciation System</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Our token system allows card owners to show appreciation to finders for their honesty and effort.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md dark:border dark:border-gray-700 dark:shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary dark:text-white">
                    <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.85 4 7.55V20" />
                    <path d="M19.8 17.817a2.5 2.5 0 0 0-1.345-2.217l-3.035-1.83a1.5 1.5 0 0 1-.625-2.177l3.114-5.135c.126-.244.201-.367.201-.488A1.5 1.5 0 0 0 16.5 4.5c-1.06 0-1.31.857-1.61 1.609l-1.868 4.03c-.12.26-.36.37-.582.215a.46.46 0 0 1-.25-.331c-.02-.105-.012-.21.022-.304L13.1 6.9l.1-.2c.122-.32.181-.56.181-.696 0-.583-.473-1.004-1-1.004-.918 0-1.636.609-2.417 1.76C8.739 8.407 8 11.082 8 13.2v1.604c0 .275.092.533.248.74v.056c1.306 1.433 4.663 2.987 6.532 3.748.748.304 1.59.502 2.532.502.693 0 1.235-.1 1.488-.218" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Mobile-First Design</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Our platform is optimized for mobile devices, making it convenient to use for all Ghanaians.
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
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Recover Your Lost Card?</h2>
                <p className="mt-4 text-lg text-white/90">
                  Join thousands of Ghanaians who have successfully recovered their lost cards through our platform.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white text-primary hover:bg-white/80 dark:bg-white dark:text-primary dark:hover:bg-white/90">
                    <Link href="/auth/signup">Get Started Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-[#1E40AF] hover:bg-white/20 hover:text-white dark:border-white dark:text-[#F97316] dark:hover:bg-white/20 dark:hover:text-white">
                    <Link href="/how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
                <div className="h-full bg-[url('https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Download Our App</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Get the CardFinder GH mobile app for a seamless experience. Report lost cards, search for found cards, and receive instant notifications on the go.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#1E40AF] text-white hover:bg-[#F97316]/90 h-14 px-6 flex items-center gap-2 rounded-lg" asChild>
                    <Link href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-7 h-7 fill-current">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs">Download on the</span>
                        <span className="text-lg font-semibold -mt-1">App Store</span>
                      </div>
                    </Link>
                  </Button>
                  <Button size="lg" className="bg-[#F97316] text-white hover:bg-[#1E40AF]/90 h-14 px-6 flex items-center gap-2 rounded-lg" asChild>
                    <Link href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7 fill-current">
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                      </svg>
                      <div className="flex flex-col items-start">
                        <span className="text-xs">GET IT ON</span>
                        <span className="text-lg font-semibold -mt-1">Google Play</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#F97316]/20 rounded-full"></div>
                <div className="relative bg-white dark:bg-gray-700 p-6 rounded-3xl shadow-xl overflow-hidden border dark:border-gray-600">
                  <div className="flex justify-center">
                    <div className="relative w-48 h-96 bg-black rounded-3xl overflow-hidden border-8 border-gray-800">
                      <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-xl"></div>
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-gray-800 rounded-full"></div>
                      <div className="h-full w-full pt-6 bg-gradient-to-b from-[#1E40AF] to-[#F97316]/80 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="rounded-full bg-white/20 p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                            <CreditCard className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-lg font-bold mb-1">CardFinder GH</h3>
                          <p className="text-xs px-4">Find and recover your lost cards with ease</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}