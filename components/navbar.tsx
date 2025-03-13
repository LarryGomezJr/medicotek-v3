"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image";
import logo from "@/assets/medicotek.png";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Company",
    href: "#company",
    dropdown: [
      { name: "About Us", href: "/about-us" },
      { name: "Products & Services", href: "/products-services" },
      { name: "Completed Projects", href: "/completed-projects" },
    ],
  },
  { name: "Partners", href: "#partners" },
  { name: "Our Team", href: "#team" },
  {
    name: "Contact",
    href: "#contact",
    dropdown: [
      { name: "Inquiry Form", href: "/inquiry-form" },
      { name: "Other Branches", href: "/branches" },
    ],
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Medicotek Logo" height={200} width={250} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-sm font-medium text-gray-700 transition-colors hover:text-green-700">
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {link.dropdown.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} className="w-full cursor-pointer">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700"
              >
                {link.name}
              </Link>
            )
          )}
          <Button className="bg-green-700 hover:bg-green-800">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-20 p-4 pt-0 pb-6 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-1 mt-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="flex flex-col">
                  <button
                    className="flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-green-700 hover:bg-gray-50 rounded-md"
                    onClick={() => {}}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  <div className="pl-4 ml-4 border-l border-gray-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-600 transition-colors hover:text-green-700 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-green-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <Button className="mt-2 bg-green-700 hover:bg-green-800">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

