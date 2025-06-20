"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dna,
  User,
  FileText,
  Calendar,
  MessageSquare,
  TrendingUp,
  Settings,
  Menu,
  X,
} from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Dna },
    { href: "/upload", label: "Upload DNA", icon: FileText },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/recommendations", label: "Diet Plan", icon: TrendingUp },
  ];

  return (
    <nav className="ubs-nav sticky top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 items-center px-4">
        {/* Logo - UBS Style */}
        <Link href="/" className="mr-8 flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
            <Dna className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-light tracking-tight text-gray-900 dark:text-white">
            Elana
          </span>
        </Link>

        {/* Desktop Navigation - UBS Style */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-8">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link href="/upload">
              <Button className="ubs-button-primary px-6 py-2 text-sm font-medium rounded-md">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600"
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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-base font-medium text-gray-700 hover:text-blue-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link href="/upload" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="ubs-button-primary w-full text-sm font-medium rounded-md">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
