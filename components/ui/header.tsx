import { Facebook, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="bg-white">
      {/* Top Header Bar */}
      <div className="bg-cyan-700 text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
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
      <div className="bg-gray-100 px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-3 border">
              <img
                src="/tyson-logo.jpg"
                alt="TYSON Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-cyan-700 leading-tight uppercase">
                Tyson Group of Industry
                <br />
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 border">
              <img
                src="/iso-9001-2015-logo.jpg"
                alt="ISO 9001:2015 Certified"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-2 border">
              <img
                src="/water-quality-association-logo.jpg"
                alt="Water Quality Association"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm px-4 py-2 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="bg-slate-800 hover:bg-cyan-700 text-white px-6 py-2 rounded-full"
            >
              Home
            </Link>
            {/* About Us Dropdown */}
            <div className="relative group">
              <Link
                href="/about"
                className="text-gray-700 hover:text-cyan-700  font-medium"
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
              className="text-gray-700 hover:text-cyan-700 font-medium"
            >
              Our Services
            </Link>
            {/* Products Dropdown */}
            <div className="relative group">
              <Link
                href="/products"
                className="text-gray-700 hover:text-cyan-700 font-medium"
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
              className="text-gray-700 hover:text-cyan-700 font-medium"
            >
              Clients
            </Link>
            <Link
              href="/articles"
              className="text-gray-700 hover:text-cyan-700 font-medium"
            >
              Articles
            </Link>
            <Link
              href="/enquiry"
              className="text-gray-700 hover:text-cyan-700 font-medium"
            >
              Enquiry
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-cyan-700 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
