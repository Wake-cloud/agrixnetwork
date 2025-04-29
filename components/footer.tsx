import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/agrix-logo.png"
                alt="AgriX Network International Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold">AgriX Network Int.</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting farmers, researchers, and consumers to promote regenerative agriculture practices worldwide.
            </p>
            <div className="flex gap-4">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-muted-foreground hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/research" className="text-muted-foreground hover:text-primary">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-muted-foreground hover:text-primary">
                  Farming Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/events" className="text-muted-foreground hover:text-primary">
                  Events & Webinars
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>123 Sustainable Way</p>
              <p>Eco City, EC 12345</p>
              <p>United States</p>
              <p className="pt-2">
                <a href="mailto:info@agrixnetwork.com" className="hover:text-primary">
                  info@agrixnetwork.com
                </a>
              </p>
              <p>
                <a href="tel:+11234567890" className="hover:text-primary">
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AgriX Network International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
