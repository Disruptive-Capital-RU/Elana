import Link from "next/link";
import { Dna } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Tagline Section - UBS Style */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-8">
            <div className="text-right">
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Reimagining the power of personalized nutrition.
              </p>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Connecting genetics with optimal health.
              </p>
            </div>
            <div className="flex items-center">
              <Dna className="h-8 w-8 text-green-600 mr-3" />
              <span className="text-2xl font-light text-gray-900">Elana</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/upload"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  DNA Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/recommendations"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  AI Recommendations
                </Link>
              </li>
              <li>
                <Link
                  href="/sample-report"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Genetic Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Meal Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/professional"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Professional Services
                </Link>
              </li>
            </ul>
          </div>

          {/* About Elana */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              About Elana
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  About Elana Genetics
                </Link>
              </li>
              <li>
                <Link
                  href="/science"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Our Science
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Latest Research
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Medical Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/data-security"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Data Security & Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Support & Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  User Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Global Contacts
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Office Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Language/Region Selector - UBS Style */}
        <div className="flex items-center justify-center mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-600">Change your region</span>
            <button className="text-green-600 hover:text-green-700 font-medium underline">
              Select region
            </button>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-gray-600 mb-8">
          <Link
            href="/about"
            className="hover:text-green-600 transition-colors"
          >
            Information on Elana
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/terms"
            className="hover:text-green-600 transition-colors"
          >
            Terms of use
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/privacy"
            className="hover:text-green-600 transition-colors"
          >
            Privacy statement
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/report-fraud"
            className="hover:text-green-600 transition-colors"
          >
            Report fraudulent mail
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/privacy-settings"
            className="hover:text-green-600 transition-colors"
          >
            Privacy Settings
          </Link>
        </div>

        {/* Legal Information */}
        <div className="text-sm text-gray-600 leading-relaxed mb-6">
          <p className="mb-4">
            The genetic analysis, dietary recommendations, and/or health
            information contained within these services may not be suitable for
            all individuals. Please consult with healthcare professionals before
            making significant dietary changes based on genetic analysis.
          </p>
          <p className="mb-4">
            Copying, editing, modifying, distributing, sharing, linking or any
            other use (whether for commercial purposes or otherwise) of genetic
            data, analysis results, or personalized recommendations, other than
            personal use, without Elana&apos;s prior written permission is
            strictly prohibited.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>© Elana Genetics 2024 - 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
