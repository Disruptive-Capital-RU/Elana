"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dna,
  User,
  FileText,
  TrendingUp,
  Settings,
  ChevronDown,
  Menu,
  X,
  Brain,
  Shield,
  BarChart3,
  HelpCircle,
  Phone,
  Mail,
} from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      title: "Genetic Analysis",
      href: "/",
      submenu: [
        { title: "Overview", href: "/" },
        { title: "Who we serve", href: "/who-we-serve" },
        { title: "What we offer", href: "/services" },
        { title: "Insights", href: "/insights" },
        { title: "About us", href: "/about" },
        { title: "Connect with us", href: "/contact" },
      ],
    },
    {
      title: "How It Works",
      href: "/how-it-works",
      submenu: [
        { title: "How It Works Global", href: "/how-it-works" },
        { title: "Capabilities", href: "/capabilities" },
        { title: "DNA Upload Process", href: "/upload-process" },
        { title: "AI Analysis", href: "/ai-analysis" },
        { title: "Insights", href: "/insights" },
        { title: "Sample Report", href: "/sample-report" },
        { title: "Contact us", href: "/contact" },
      ],
    },
    {
      title: "Upload DNA",
      href: "/upload",
      submenu: [
        { title: "Upload DNA overview", href: "/upload" },
        { title: "What we offer", href: "/upload-services" },
        { title: "About us", href: "/about" },
        { title: "Insights", href: "/insights" },
        { title: "File Formats", href: "/file-formats" },
        { title: "Privacy & Security", href: "/privacy" },
      ],
    },
    {
      title: "About us",
      href: "/about",
      submenu: [
        { title: "Our firm", href: "/about" },
        { title: "Investor Relations", href: "/investors" },
        { title: "Media", href: "/media" },
        { title: "Sustainability and Impact", href: "/sustainability" },
        { title: "Cyber Security at Elana", href: "/security" },
      ],
    },
    {
      title: "Support",
      href: "/support",
      submenu: [
        { title: "Overview", href: "/support" },
        { title: "About us", href: "/about" },
        { title: "Help Center", href: "/help" },
        { title: "Contact Support", href: "/contact" },
        { title: "FAQ", href: "/faq" },
        { title: "Get Help", href: "/get-help" },
      ],
    },
  ];

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="ubs-nav sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Navigation Bar */}
        <div className="flex h-20 items-center">
          {/* Logo */}
          <Link href="/" className="mr-12 flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center shadow-sm">
              <Dna className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light tracking-tight text-gray-900 leading-none">
                Elana
              </span>
              <span className="text-sm text-gray-500 leading-none">Global</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1">
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-base font-normal text-gray-700 hover:text-green-600 transition-colors duration-200 py-6 px-2"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Link>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.title && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-lg rounded-sm z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-150"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/upload">
              <Button className="ubs-button-primary px-6 py-2 text-sm font-medium rounded-sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex flex-1 items-center justify-end lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-green-600"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="py-4">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    {/* Mobile submenu - simplified */}
                    <div className="pl-6 space-y-1">
                      {item.submenu.slice(0, 3).map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-4 px-4 border-t border-gray-100">
                  <Link href="/upload" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="ubs-button-primary w-full text-sm font-medium rounded-sm">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
