"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, CreditCard, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MainNav = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/finder/submit" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <CreditCard className="mr-2 h-4 w-4" />
              Found a Card
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/owner/search" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Search className="mr-2 h-4 w-4" />
              Search for Card
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#1E40AF] to-[#1E40AF] p-6 no-underline outline-none focus:shadow-md"
                    href="/how-it-works"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium text-white">
                      How CardFinder Works
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Learn how we connect people who have lost their cards with those who have found them.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/about"
                  >
                    <div className="text-sm font-medium leading-none">About Us</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Our mission to help Ghanaians recover lost identity cards
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/faq"
                  >
                    <div className="text-sm font-medium leading-none">FAQ</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Answers to commonly asked questions about our service
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    href="/contact"
                  >
                    <div className="text-sm font-medium leading-none">Contact Us</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Get in touch with our support team for assistance
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 bg-background md:hidden",
        isOpen ? "block" : "hidden"
      )}
    >
      <div className="flex flex-col space-y-4 p-4">
        <Link
          href="/finder/submit"
          className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent"
          onClick={() => setIsOpen(false)}
        >
          <CreditCard className="h-5 w-5" />
          <span>Found a Card</span>
        </Link>
        <Link
          href="/owner/search"
          className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent"
          onClick={() => setIsOpen(false)}
        >
          <Search className="h-5 w-5" />
          <span>Search for Card</span>
        </Link>
        <Link
          href="/how-it-works"
          className="rounded-md p-2 hover:bg-accent"
          onClick={() => setIsOpen(false)}
        >
          How CardFinder Works
        </Link>
        <Link
          href="/about"
          className="rounded-md p-2 hover:bg-accent"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/faq"
          className="rounded-md p-2 hover:bg-accent"
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </Link>
        <Link
          href="/contact"
          className="rounded-md p-2 hover:bg-accent"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <CreditCard className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">CardFinder GH</span>
          </Link>
          <MainNav />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" asChild className="hidden md:inline-flex">
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
    </header>
  );
}