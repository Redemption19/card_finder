import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-r from-primary to-[#F97316] h-[300px] md:h-[400px] w-full absolute rounded-xl left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-grid-white/25 bg-[length:20px_20px] opacity-10"></div>
          <div className="relative pt-12 pb-16 md:pt-16 md:pb-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information at CardFinder GH.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Last Updated: May 10, 2025
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
                At CardFinder GH, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application (collectively, the "Platform"). Please read this Privacy Policy carefully. By accessing or using our Platform, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this policy.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">1.1 Personal Data</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may collect personal information that you voluntarily provide to us when you register on the Platform, express interest in obtaining information about us or our products and services, or otherwise contact us. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address</li>
                <li>Profile picture</li>
                <li>Information about lost or found cards</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">1.2 Automatically Collected Data</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When you access our Platform, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Device type</li>
                <li>Operating system</li>
                <li>Browser type</li>
                <li>IP address</li>
                <li>Time spent on Platform</li>
                <li>Pages visited</li>
                <li>Geographic location (with your consent)</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may use the information we collect about you for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Create and manage your account</li>
                <li>Provide and maintain our services</li>
                <li>Connect card finders with card owners</li>
                <li>Process transactions</li>
                <li>Send administrative information</li>
                <li>Respond to inquiries and offer support</li>
                <li>Send marketing and promotional communications (with your consent)</li>
                <li>Improve our Platform and user experience</li>
                <li>Protect against fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Disclosure of Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.1 By Law or to Protect Rights</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.2 Third-Party Service Providers</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may share your information with third-party service providers who perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.3 Card Matching Process</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When a potential match is found between a lost card report and a found card report, we may share limited contact information between the parties to facilitate the return of the card. This will only be done after verification steps have been completed.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Security of Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Your Privacy Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li><span className="font-medium">Right to Access</span> - You have the right to request copies of your personal information.</li>
                <li><span className="font-medium">Right to Rectification</span> - You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                <li><span className="font-medium">Right to Erasure</span> - You have the right to request that we erase your personal information, under certain conditions.</li>
                <li><span className="font-medium">Right to Restrict Processing</span> - You have the right to request that we restrict the processing of your personal information, under certain conditions.</li>
                <li><span className="font-medium">Right to Object to Processing</span> - You have the right to object to our processing of your personal information, under certain conditions.</li>
                <li><span className="font-medium">Right to Data Portability</span> - You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our Platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this Platform. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                CardFinder GH<br />
                14 Independence Avenue<br />
                Accra, Ghana<br />
                Email: <a href="mailto:privacy@cardfinder.gh" className="text-primary hover:text-primary/80 dark:text-[#F97316] dark:hover:text-[#F97316]/80">privacy@cardfinder.gh</a><br />
                Phone: +233 30 212 3456
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1E40AF]/10 dark:bg-[#1E40AF]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions About Your Privacy?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Our team is here to help you understand how we protect your personal information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Contact Our Privacy Team</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary dark:border-[#F97316] dark:text-[#F97316] dark:hover:bg-[#F97316]/10 dark:hover:text-[#F97316]">
                <Link href="/faq">View FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
