"use client";

import { Facebook, Mail, Phone, Twitter, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Top Header Bar */}
      <div className="bg-cyan-700 text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center text-sm gap-2 md:gap-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Tel: +91 9604338704</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>response@dummy.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Twitter className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-1 text-sm">
              Send An Enquiry
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="w-36 h-24 transition-shadow duration-300 flex items-center justify-center">
              <img
                src="/images/tyson-logo.png"
                alt="TYSON Logo"
                className="w-full h-full object-contain bg-transparent blend-transition"
                loading="eager"
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-cyan-700 leading-tight uppercase tracking-wide">
                Tyson Group of Industry
              </h1>
              <p className="text-gray-600 text-sm mt-1 font-medium">
                Industrial Excellence & Innovation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm px-4 py-2 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between md:justify-center">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-cyan-700 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-white font-medium text-lg hover:bg-cyan-700 px-6 py-2 rounded-full"
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group">
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-white font-medium text-lg hover:bg-cyan-700 px-6 py-2 rounded-full"
                >
                  About Us ▼
                </Link>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-700 hover:bg-gray-50"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/about/quality-policies"
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-700 hover:bg-gray-50"
                    >
                      Quality Policies
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/services"
                className="text-gray-700 hover:text-white font-medium text-lg hover:bg-cyan-700 px-6 py-2 rounded-full"
              >
                Our Services
              </Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-white font-medium text-lg hover:bg-cyan-700 px-6 py-2 rounded-full"
                >
                  Products ▼
                </Link>
                <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="grid grid-cols-4 gap-6 p-6">
                    {/* Column 1 */}
                    <div className="space-y-3">
                      <Link
                        href="/products/domestic-water-purifier"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Domestic Water Purifier
                      </Link>
                      <Link
                        href="/products/jumbo-water-filters"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Jumbo Water Filters
                      </Link>
                      <Link
                        href="/products/jumbo-water-filters-uv"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Jumbo Water Filters With U.V. Sterilizer
                      </Link>
                      <Link
                        href="/products/water-dispenser"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Water Dispenser
                      </Link>
                      <Link
                        href="/products/filter-cartridges"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Filter Cartridges Spares Parts & Filter Bags
                      </Link>
                      <Link
                        href="/products/shower-filter"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Shower Filter
                      </Link>
                      <Link
                        href="/products/water-softener-residential"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Water Softener For Residential
                      </Link>
                      <Link
                        href="/products/water-softener-commercial"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Water Softener For Commercial & Industrial
                      </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-3">
                      <Link
                        href="/products/hydro-pneumatic-system"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Hydro Pneumatic System
                      </Link>
                      <Link
                        href="/products/ozonation-system"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Ozonation System
                      </Link>
                      <Link
                        href="/products/chlorine-dosing-system"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Chlorine Dosing System
                      </Link>
                      <Link
                        href="/products/multimedia-filter-residential"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Multimedia Filter For Residential
                      </Link>
                      <Link
                        href="/products/multimedia-filter-commercial"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Multimedia Filter For Commercial & Industrial
                      </Link>
                      <Link
                        href="/products/activated-carbon-filter"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Activated carbon Filter
                      </Link>
                      <Link
                        href="/products/reverse-osmosis-system"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Reverse Osmosis System 200 GPD & 400 GPD
                      </Link>
                      <Link
                        href="/products/brackish-water-ro"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Brackish Water Reverse Osmosis System
                      </Link>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-3">
                      <Link
                        href="/products/sea-water-ro"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Sea Water Reverse Osmosis System
                      </Link>
                      <Link
                        href="/products/grey-green-water-treatment"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Grey+Green Water Treatment System
                      </Link>
                      <Link
                        href="/products/demineralised-plants"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Demineralised Plants & Mixed Bed Plants
                      </Link>
                      <Link
                        href="/products/uf-ultra-filteration"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        UF Ultra Filteration Water System
                      </Link>
                      <Link
                        href="/products/micron-cartridge-filter"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Micron Cartridge Filter
                      </Link>
                      <Link
                        href="/products/ultra-violet-sterilizer"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Ultra Voilet Sterilizer
                      </Link>
                      <Link
                        href="/products/micro-filter"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Micro Filter
                      </Link>
                      <Link
                        href="/products/water-treatment-accessories"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Water Treatment Accessories & Components
                      </Link>
                    </div>

                    {/* Column 4 */}
                    <div className="space-y-3">
                      <Link
                        href="/products/filter-media-salt-bags"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Filter Media & Salt Bags
                      </Link>
                      <Link
                        href="/products/water-testing-instrument"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Water Testing Instrument
                      </Link>
                      <Link
                        href="/products/water-analysis-consultation"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Water Analysis & Consultation
                      </Link>
                      <Link
                        href="/products/water-filter-service-amc"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Water Filter Service & AMC
                      </Link>
                      <Link
                        href="/products/water-tank-cleaning"
                        className="block text-sm text-gray-600 hover:text-cyan-700 hover:underline"
                      >
                        Water Tank Cleaning & Disinfection
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/clients"
                className="text-gray-700 hover:text-white font-medium text-lg hover:bg-cyan-700 px-6 py-2 rounded-full"
              >
                Clients
              </Link>
              <Link
                href="/articles"
                className="text-gray-700 hover:text-white font-medium text-lg hover:bg-cyan-700 px-6 py-2 rounded-full"
              >
                Articles
              </Link>
              <Link
                href="/enquiry"
                className="text-gray-700 hover:text-white font-medium text-lg hover:bg-cyan-700 px-6 py-2 rounded-full"
              >
                Enquiry
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-white font-medium text-lg hover:bg-cyan-700 px-6 py-2 rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
              <div className="py-4 px-4 space-y-2">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-cyan-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile About Us Dropdown */}
                <div>
                  <button
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className="w-full text-left text-gray-700 hover:text-cyan-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium flex items-center justify-between"
                  >
                    About Us
                    <span
                      className={`transform transition-transform ${
                        isAboutDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {isAboutDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      <Link
                        href="/about"
                        className="block text-gray-600 hover:text-cyan-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About Us
                      </Link>
                      <Link
                        href="/about/quality-policies"
                        className="block text-gray-600 hover:text-cyan-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Quality Policies
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/services"
                  className="block text-gray-700 hover:text-cyan-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Services
                </Link>

                {/* Mobile Products Dropdown */}
                <div>
                  <button
                    onClick={() =>
                      setIsProductsDropdownOpen(!isProductsDropdownOpen)
                    }
                    className="w-full text-left text-gray-700 hover:text-cyan-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium flex items-center justify-between"
                  >
                    Products
                    <span
                      className={`transform transition-transform ${
                        isProductsDropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {isProductsDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-1 max-h-64 overflow-y-auto">
                      <Link
                        href="/products/domestic-water-purifier"
                        className="block text-gray-600 hover:text-cyan-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Domestic Water Purifier
                      </Link>
                      <Link
                        href="/products/jumbo-water-filters"
                        className="block text-gray-600 hover:text-cyan-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Jumbo Water Filters
                      </Link>
                      <Link
                        href="/products/water-softener-residential"
                        className="block text-gray-600 hover:text-cyan-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Water Softener For Residential
                      </Link>
                      <Link
                        href="/products/reverse-osmosis-system"
                        className="block text-gray-600 hover:text-cyan-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Reverse Osmosis System
                      </Link>
                      <Link
                        href="/products"
                        className="block text-cyan-700 font-medium hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View All Products →
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/clients"
                  className="block text-gray-700 hover:text-cyan-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Clients
                </Link>
                <Link
                  href="/articles"
                  className="block text-gray-700 hover:text-cyan-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Articles
                </Link>
                <Link
                  href="/enquiry"
                  className="block text-gray-700 hover:text-cyan-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Enquiry
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-cyan-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
