import Link from "next/link";
import { CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <CreditCard className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">CardFinder GH</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Helping Ghanaians recover their lost identity and payment cards since 2025.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-base mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/finder/submit" className="text-muted-foreground hover:text-foreground">
                  Found a Card
                </Link>
              </li>
              <li>
                <Link href="/owner/search" className="text-muted-foreground hover:text-foreground">
                  Search for Card
                </Link>
              </li>
              <li>
                <Link href="/owner/report" className="text-muted-foreground hover:text-foreground">
                  Report Lost Card
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base mb-2">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base mb-2">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Email: <a href="mailto:contact@cardfindergh.com" className="hover:text-foreground">contact@cardfindergh.com</a>
              </li>
              <li className="text-muted-foreground">
                Phone: <a href="tel:+233200000000" className="hover:text-foreground">+233 20 000 0000</a>
              </li>
              <li className="text-muted-foreground">
                Location: Accra, Ghana
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CardFinder GH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}