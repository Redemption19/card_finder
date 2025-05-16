import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-r from-primary to-[#F97316] h-[300px] md:h-[400px] w-full absolute rounded-xl left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-grid-white/25 bg-[length:20px_20px] opacity-10"></div>
          <div className="relative pt-12 pb-16 md:pt-16 md:pb-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using the CardFinder GH platform.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Last Updated: May 10, 2025
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
                These Terms of Service ("Terms") govern your access to and use of the CardFinder GH website and services, including any mobile applications (collectively, the "Service"). Please read these Terms carefully, and contact us if you have any questions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Using CardFinder GH</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">1.1 Account Registration</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To use certain features of our Service, you may need to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself. You are responsible for safeguarding your account credentials and for any activity that occurs under your account.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">1.2 Prohibited Activities</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You may not use our Service for any illegal purpose or in violation of any local, state, national, or international law. You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Impersonate any person or entity</li>
                <li>Submit false or misleading information</li>
                <li>Upload viruses or malicious code</li>
                <li>Interfere with the proper working of the Service</li>
                <li>Attempt to access areas of our systems that you are not authorized to access</li>
                <li>Use the Service to harass, abuse, or harm another person</li>
                <li>Use our Service for any fraudulent or inappropriate purpose</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. User Content</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.1 Content Responsibility</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.2 Content Ownership</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You retain any and all of your rights to any Content you submit, post or display on or through the Service. By posting Content on our Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Privacy and Security</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.1 Privacy Policy</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Please review our <Link href="/privacy" className="text-primary hover:text-primary/80 dark:text-[#F97316] dark:hover:text-[#F97316]/80">Privacy Policy</Link>, which also governs your use of our Service, to understand our practices regarding the collection, use, and disclosure of your personal information.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.2 Data Security</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Termination</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In no event shall CardFinder GH, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Your access to or use of or inability to access or use the Service</li>
                <li>Any conduct or content of any third party on the Service</li>
                <li>Any content obtained from the Service</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                CardFinder GH<br />
                14 Independence Avenue<br />
                Accra, Ghana<br />
                Email: <a href="mailto:legal@cardfinder.gh" className="text-primary hover:text-primary/80 dark:text-[#F97316] dark:hover:text-[#F97316]/80">legal@cardfinder.gh</a><br />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of Ghanaians who have successfully recovered their lost cards through our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/auth/signup">Create an Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary dark:border-[#F97316] dark:text-[#F97316] dark:hover:bg-[#F97316]/10 dark:hover:text-[#F97316]">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
