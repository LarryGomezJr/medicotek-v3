import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-16 mx-auto md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">NatureGreen</h3>
            <p className="mb-6">
              Committed to sustainable solutions for a greener future. We combine innovation with environmental
              responsibility to create lasting positive impact.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#company" className="hover:text-white">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-green-500" />
                <span>123 Green Street, Eco City, 10001</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-green-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-green-500" />
                <span>info@naturegreen.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates on sustainable solutions and company news.
            </p>
            <div className="flex flex-col space-y-3">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-green-700 hover:bg-green-800">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p>&copy; {new Date().getFullYear()} NatureGreen. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

