import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-r from-primary to-[#F97316] h-[300px] md:h-[400px] w-full absolute rounded-xl left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-grid-white/25 bg-[length:20px_20px] opacity-10"></div>
          <div className="relative pt-12 pb-16 md:pt-16 md:pb-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about CardFinder GH and how our platform helps reunite people with their lost cards.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold mb-6">FAQ Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="#general" className="flex items-center p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors">
                      <span className="w-2 h-2 bg-[#F97316] rounded-full mr-2"></span>
                      General Questions
                    </a>
                  </li>
                  <li>
                    <a href="#finders" className="flex items-center p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors">
                      <span className="w-2 h-2 bg-[#F97316] rounded-full mr-2"></span>
                      For Card Finders
                    </a>
                  </li>
                  <li>
                    <a href="#owners" className="flex items-center p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors">
                      <span className="w-2 h-2 bg-[#F97316] rounded-full mr-2"></span>
                      For Card Owners
                    </a>
                  </li>
                  <li>
                    <a href="#security" className="flex items-center p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors">
                      <span className="w-2 h-2 bg-[#F97316] rounded-full mr-2"></span>
                      Security & Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#technical" className="flex items-center p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors">
                      <span className="w-2 h-2 bg-[#F97316] rounded-full mr-2"></span>
                      Technical Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div id="general" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-3 h-3 bg-[#F97316] rounded-full mr-3"></span>
                  General Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is CardFinder GH?</AccordionTrigger>
                    <AccordionContent>
                      CardFinder GH is a platform that connects people who have found lost cards with their rightful owners in Ghana. We provide a secure and efficient way for finders to report found cards and for owners to search for their lost cards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What types of cards can be reported on CardFinder GH?</AccordionTrigger>
                    <AccordionContent>
                      We support a wide range of cards including Ghana Cards (National ID), Voter ID cards, Driver's Licenses, Bank Cards (debit/credit), NHIS cards, Student IDs, and other official identification cards issued in Ghana.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is CardFinder GH available throughout Ghana?</AccordionTrigger>
                    <AccordionContent>
                      Yes, our service is available nationwide across all regions in Ghana. Whether you've lost or found a card in Accra, Kumasi, Tamale, or any other location in Ghana, you can use our platform.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is CardFinder GH a free service?</AccordionTrigger>
                    <AccordionContent>
                      Basic services on CardFinder GH are free, including reporting found cards and searching for lost cards. We do offer premium features that require a small fee, such as priority notifications and extended search capabilities.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div id="finders" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-3 h-3 bg-[#F97316] rounded-full mr-3"></span>
                  For Card Finders
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I report a card I've found?</AccordionTrigger>
                    <AccordionContent>
                      To report a found card, create an account on CardFinder GH, then click on the "I Found a Card" button. You'll be prompted to enter details about the card, including the type of card, name on the card, and where you found it. You can also upload images of the card (with sensitive information blurred).
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What information should I provide when reporting a found card?</AccordionTrigger>
                    <AccordionContent>
                      You should provide the type of card, name on the card, where and when you found it, and any other identifying information that might help the owner recognize their card. Please do not share full card numbers, PINs, or other sensitive information.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I hand over the card to its owner?</AccordionTrigger>
                    <AccordionContent>
                      When an owner claims a card you've reported, you'll receive a notification. You can then communicate with the owner through our secure messaging system to arrange a safe meeting place to hand over the card, or you can choose to deposit the card at one of our partner locations for the owner to collect.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I receive a reward for finding a card?</AccordionTrigger>
                    <AccordionContent>
                      CardFinder GH includes an optional appreciation system where card owners can offer a token of gratitude to finders. However, this is entirely at the discretion of the card owner and is not mandatory.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div id="owners" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-3 h-3 bg-[#F97316] rounded-full mr-3"></span>
                  For Card Owners
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I search for my lost card?</AccordionTrigger>
                    <AccordionContent>
                      Create an account on CardFinder GH, then click on the "Search for My Card" button. Enter details about your lost card, including the type of card, your name, and where you might have lost it. Our system will search for matches among reported found cards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How will I know if someone has found my card?</AccordionTrigger>
                    <AccordionContent>
                      If there's a potential match with a reported found card, you'll receive a notification via email and on the platform. You can then view the details provided by the finder and verify if it's your card.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I verify that a found card is mine?</AccordionTrigger>
                    <AccordionContent>
                      When claiming a card, you'll need to provide additional verification information that only the true owner would know, such as specific details about the card that weren't included in the finder's report. This helps ensure cards are returned to their rightful owners.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Should I still report my card as lost to the issuing authority?</AccordionTrigger>
                    <AccordionContent>
                      Yes, CardFinder GH is a supplementary service to help you recover your lost card. You should still follow the official procedures for reporting lost cards to the issuing authorities, especially for bank cards and official IDs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div id="security" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-3 h-3 bg-[#F97316] rounded-full mr-3"></span>
                  Security & Privacy
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How does CardFinder GH protect my personal information?</AccordionTrigger>
                    <AccordionContent>
                      We take data security seriously. We use encryption to protect your personal information, and we never display full card numbers or other sensitive details. Our platform is designed to share only the minimum information necessary to facilitate the return of lost cards.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can anyone see my contact information?</AccordionTrigger>
                    <AccordionContent>
                      No, your contact information is not publicly visible. When a match is made between a finder and an owner, our secure messaging system allows communication without revealing personal contact details until both parties agree to exchange information.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How does CardFinder GH verify users?</AccordionTrigger>
                    <AccordionContent>
                      We have a multi-step verification process for all users, including email verification and phone number verification. For premium services, we may require additional verification steps to ensure the security of our platform.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div id="technical" className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-3 h-3 bg-[#F97316] rounded-full mr-3"></span>
                  Technical Support
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>I'm having trouble with my account. What should I do?</AccordionTrigger>
                    <AccordionContent>
                      If you're experiencing issues with your account, please visit our Help Center or contact our support team via the Contact Us page. Common issues like password resets can be handled through the "Forgot Password" link on the sign-in page.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is there a mobile app for CardFinder GH?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we have mobile apps available for both iOS and Android devices. You can download them from the App Store or Google Play Store. Our mobile app offers all the features of the web platform with the convenience of mobile notifications.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I update my profile information?</AccordionTrigger>
                    <AccordionContent>
                      You can update your profile information by logging into your account, clicking on your profile icon in the top-right corner, and selecting "Profile Settings." From there, you can edit your personal information, contact details, and notification preferences.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-[#1E40AF]/10 dark:bg-[#1E40AF]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              If you couldn't find the answer you were looking for, our support team is here to help.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button size="lg" asChild className="bg-[#F97316] text-white hover:bg-[#F97316]/90 px-8">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF]/10 hover:text-[#1E40AF] dark:border-[#F97316] dark:text-[#F97316] dark:hover:bg-[#F97316]/10 dark:hover:text-[#F97316] px-8">
              <Link href="mailto:support@cardfinder.gh">Email Us</Link>
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
                    <Link href="/auth/signup">Sign Up Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-[#F97316] hover:bg-white/20 hover:text-white dark:border-white dark:text-[#F97316] dark:hover:bg-white/20 dark:hover:text-white">
                    <Link href="/finder/submit">Report a Found Card</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
                <div className="h-full bg-[url('/images/background/card-2.png')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
