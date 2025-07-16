import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-2">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Kommu
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              A grassroots movement dedicated to empowering communities to take action on environmental issues and build
              a sustainable future together.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-2 rounded-full text-muted-foreground hover:text-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-2 rounded-full text-muted-foreground hover:text-secondary transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#urban-greening" className="text-muted-foreground hover:text-primary transition-colors">
                  Urban Greening
                </Link>
              </li>
              <li>
                <Link href="#zero-waste" className="text-muted-foreground hover:text-secondary transition-colors">
                  Zero Waste Initiative
                </Link>
              </li>
              <li>
                <Link href="#water" className="text-muted-foreground hover:text-primary transition-colors">
                  Water Conservation
                </Link>
              </li>
              <li>
                <Link href="#organizing" className="text-muted-foreground hover:text-secondary transition-colors">
                  Community Organizing
                </Link>
              </li>
              <li>
                <Link href="#housing" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainable Housing
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-muted-foreground hover:text-secondary transition-colors">
                  Environmental Education
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-muted-foreground hover:text-primary transition-colors">
                  Impact Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest news, events, and ways to get involved.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to receive emails from Kommu. You can unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kommu. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

