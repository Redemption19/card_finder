import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { 
  Search, 
  Upload, 
  MessageSquare, 
  UserCheck, 
  Shield, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-r from-primary to-[#F97316] h-[300px] md:h-[400px] w-full absolute rounded-xl left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-grid-white/25 bg-[length:20px_20px] opacity-10"></div>
          <div className="relative pt-12 pb-16 md:pt-16 md:pb-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How CardFinder Works
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover how our platform connects people who find lost cards with their rightful owners in Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Simple Process to Reconnect</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              CardFinder GH makes it easy to report found cards and search for lost ones through our secure, user-friendly platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Upload className="h-10 w-10 text-primary dark:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Report or Search</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Create an account and either report a card you've found or search for your lost card by providing the necessary details.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Search className="h-10 w-10 text-primary dark:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Match & Verify</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our system matches lost card reports with found card reports. When a potential match is found, both parties are notified.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-primary dark:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Reconnect</h3>
              <p className="text-gray-700 dark:text-gray-300">
                After verification, connect safely through our platform to arrange the return of the card, either in person or through one of our partner locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Card Finders */}
      <section className="py-16 md:py-24 bg-[#1E40AF]/10 dark:bg-[#1E40AF]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Card Finders</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Found someone's card? Here's how to help them get it back.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F97316]/10 dark:bg-[#F97316]/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-[#F97316]">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Create an Account</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Sign up for a free CardFinder GH account. We'll need some basic information to verify your identity and ensure the security of our platform.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F97316]/10 dark:bg-[#F97316]/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-[#F97316]">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Report the Found Card</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Submit details about the card you found, including the type of card, name on the card, and where you found it. You can also upload images (with sensitive information blurred).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F97316]/10 dark:bg-[#F97316]/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-[#F97316]">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Get Notified of Matches</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      When someone reports a lost card that matches your found card report, you'll receive a notification. You can then communicate with the owner through our secure messaging system.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F97316]/10 dark:bg-[#F97316]/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-[#F97316]">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Return the Card Safely</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Arrange a safe meeting place to return the card, or drop it off at one of our partner locations. The card owner may offer a token of appreciation for your honesty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#F97316] rounded-full opacity-20"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border dark:border-gray-700">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 overflow-hidden">
                    <img 
                      src="/images/background/found-card.png" 
                      alt="Person holding a found card" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">Be a Hero Today</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    By reporting a found card, you're helping someone recover an important document and saving them from the stress and inconvenience of card loss.
                  </p>
                  <Button asChild className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white">
                    <Link href="/finder/submit">Report a Found Card</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Card Owners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Card Owners</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Lost your card? Here's how to find it through our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary rounded-full opacity-20"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border dark:border-gray-700">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 overflow-hidden">
                    <img 
                      src="/images/background/search-card.png" 
                      alt="Person searching for a lost card" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">Lost a Card?</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Don't panic. Many honest people find and report lost cards every day. Our platform helps you connect with them and get your card back quickly.
                  </p>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href="/search">Search for Your Card</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Create an Account</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Sign up for a free CardFinder GH account. We'll need to verify your identity to ensure you're the rightful owner of any claimed cards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Report Your Lost Card</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Provide details about your lost card, including the type of card, your name, and where you might have lost it. The more information you provide, the better your chances of finding it.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Get Notified of Matches</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      When someone reports finding a card that matches your description, you'll receive a notification. You'll need to verify that it's your card by providing additional information.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">Arrange to Retrieve Your Card</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      After verification, communicate with the finder through our secure messaging system to arrange a safe meeting place or pick up your card from one of our partner locations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 md:py-24 bg-[#1E40AF]/10 dark:bg-[#1E40AF]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security is Our Priority</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We've built CardFinder GH with security and privacy at its core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md dark:border dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Secure Verification</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  We verify the identity of all users to ensure cards are returned to their rightful owners and to prevent fraud.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:border dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Private Communication</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  Our secure messaging system allows you to communicate without sharing personal contact information until you're ready.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md dark:border dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="rounded-full w-14 h-14 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                  <UserCheck className="h-8 w-8 text-primary dark:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Safe Meetups</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  We provide guidelines for safe meetups and offer partner locations where cards can be dropped off and picked up securely.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Find quick answers to frequently asked questions about using CardFinder GH.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Is CardFinder GH free to use?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Yes, basic services on CardFinder GH are free, including reporting found cards and searching for lost cards. We do offer premium features that require a small fee, such as priority notifications and extended search capabilities.
              </p>
              
              <h3 className="text-xl font-bold mb-4 dark:text-white">What types of cards can be reported?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We support a wide range of cards including Ghana Cards (National ID), Voter ID cards, Driver's Licenses, Bank Cards (debit/credit), NHIS cards, Student IDs, and other official identification cards issued in Ghana.
              </p>
              
              <h3 className="text-xl font-bold mb-4 dark:text-white">How long does it take to find a match?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The time to find a match varies. If someone has already reported finding your card, you might get a match immediately. Otherwise, it depends on when and if someone finds and reports your card. We recommend reporting lost cards as soon as possible.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">Is my personal information safe?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We take data security seriously. We use encryption to protect your personal information, and we never display full card numbers or other sensitive details. Our platform is designed to share only the minimum information necessary to facilitate the return of lost cards.
              </p>
              
              <h3 className="text-xl font-bold mb-4 dark:text-white">Can I receive a reward for finding a card?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                CardFinder GH includes an optional appreciation system where card owners can offer a token of gratitude to finders. However, this is entirely at the discretion of the card owner and is not mandatory.
              </p>
              
              <h3 className="text-xl font-bold mb-4 dark:text-white">What if I can't meet the finder/owner in person?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We have partner locations throughout Ghana where finders can drop off cards and owners can pick them up. This provides a safe and convenient option when direct meetups aren't possible.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary dark:border-[#F97316] dark:text-[#F97316] dark:hover:bg-[#F97316]/10 dark:hover:text-[#F97316]">
              <Link href="/faq" className="flex items-center">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-primary rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
                <p className="mt-4 text-lg text-white/90">
                  Join thousands of Ghanaians who have successfully recovered their lost cards through our platform.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white dark:bg-white text-primary dark:text-primary hover:bg-white/80 dark:hover:bg-white/90">
                    <Link href="/auth/signup">Create an Account</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-[#F97316] hover:bg-white/20 hover:text-white dark:border-white dark:text-[#F97316] dark:hover:bg-white/20 dark:hover:text-white">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
                <div className="h-full bg-[url('https://images.pexels.com/photos/6994293/pexels-photo-6994293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
