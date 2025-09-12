import { Phone, Mail, Facebook, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-cyan-700 text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Tel: +968 94064811</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>response@qatarwatertreatment.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Facebook className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Twitter className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-1 text-sm">Send An Enquiry</Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-100 px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-3 border">
              <img src="/tyson-logo.jpg" alt="TYSON Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-800 leading-tight">
                MUSCAT WATER TREATMENT
                <br />
                TRADING & CONTRACTING CO.
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
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-full">Home</Button>
            {/* About Us Dropdown */}
            <div className="relative group">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us ▼
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-gray-50"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about/quality-policies"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-gray-50"
                  >
                    Quality Policies
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Our Services
            </Link>
            {/* Products Dropdown */}
            <div className="relative group">
              <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
                Products ▼
              </Link>
              <div className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="grid grid-cols-4 gap-6 p-6">
                  {/* Column 1 */}
                  <div className="space-y-3">
                    <Link
                      href="/products/domestic-water-purifier"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Domestic Water Purifier
                    </Link>
                    <Link
                      href="/products/jumbo-water-filters"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Jumbo Water Filters
                    </Link>
                    <Link
                      href="/products/jumbo-water-filters-uv"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Jumbo Water Filters With U.V. Sterilizer
                    </Link>
                    <Link
                      href="/products/water-dispenser"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Water Dispenser
                    </Link>
                    <Link
                      href="/products/filter-cartridges"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Filter Cartridges Spares Parts & Filter Bags
                    </Link>
                    <Link
                      href="/products/shower-filter"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Shower Filter
                    </Link>
                    <Link
                      href="/products/water-softener-residential"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Water Softener For Residential
                    </Link>
                    <Link
                      href="/products/water-softener-commercial"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Water Softener For Commercial & Industrial
                    </Link>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-3">
                    <Link
                      href="/products/hydro-pneumatic-system"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Hydro Pneumatic System
                    </Link>
                    <Link
                      href="/products/ozonation-system"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Ozonation System
                    </Link>
                    <Link
                      href="/products/chlorine-dosing-system"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Chlorine Dosing System
                    </Link>
                    <Link
                      href="/products/multimedia-filter-residential"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Multimedia Filter For Residential
                    </Link>
                    <Link
                      href="/products/multimedia-filter-commercial"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Multimedia Filter For Commercial & Industrial
                    </Link>
                    <Link
                      href="/products/activated-carbon-filter"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Activated carbon Filter
                    </Link>
                    <Link
                      href="/products/reverse-osmosis-system"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Reverse Osmosis System 200 GPD & 400 GPD
                    </Link>
                    <Link
                      href="/products/brackish-water-ro"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Brackish Water Reverse Osmosis System
                    </Link>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-3">
                    <Link
                      href="/products/sea-water-ro"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Sea Water Reverse Osmosis System
                    </Link>
                    <Link
                      href="/products/grey-green-water-treatment"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Grey+Green Water Treatment System
                    </Link>
                    <Link
                      href="/products/demineralised-plants"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Demineralised Plants & Mixed Bed Plants
                    </Link>
                    <Link
                      href="/products/uf-ultra-filteration"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      UF Ultra Filteration Water System
                    </Link>
                    <Link
                      href="/products/micron-cartridge-filter"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Micron Cartridge Filter
                    </Link>
                    <Link
                      href="/products/ultra-violet-sterilizer"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Ultra Voilet Sterilizer
                    </Link>
                    <Link
                      href="/products/micro-filter"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Micro Filter
                    </Link>
                    <Link
                      href="/products/water-treatment-accessories"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Water Treatment Accessories & Components
                    </Link>
                  </div>

                  {/* Column 4 */}
                  <div className="space-y-3">
                    <Link
                      href="/products/filter-media-salt-bags"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Filter Media & Salt Bags
                    </Link>
                    <Link
                      href="/products/water-testing-instrument"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Water Testing Instrument
                    </Link>
                    <Link
                      href="/products/water-analysis-consultation"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Water Analysis & Consultation
                    </Link>
                    <Link
                      href="/products/water-filter-service"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Water Filter Service & AMC
                    </Link>
                    <Link
                      href="/products/water-tank-cleaning"
                      className="block text-sm text-gray-600 hover:text-cyan-600 hover:underline"
                    >
                      Water Tank Cleaning & Disinfection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/clients" className="text-gray-700 hover:text-blue-600 font-medium">
              Clients
            </Link>
            <Link href="/articles" className="text-gray-700 hover:text-blue-600 font-medium">
              Articles
            </Link>
            <Link href="/enquiry" className="text-gray-700 hover:text-blue-600 font-medium">
              Enquiry
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/industrial-water-treatment-facility-with-pipes-and.jpg')" }}
        ></div>

        {/* Circular overlays with equipment images */}
        <div className="absolute right-20 top-10">
          <div className="w-32 h-32 rounded-full bg-white/90 p-2">
            <img
              src="/blue-water-treatment-tanks.jpg"
              alt="Water treatment tanks"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="absolute right-32 bottom-10">
          <div className="w-24 h-24 rounded-full bg-white/90 p-2">
            <img
              src="/water-filtration-equipment.jpg"
              alt="Filtration equipment"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <p className="text-sm mb-2 text-cyan-300">Water & Waste Water Treatment Technologies</p>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Multimedia Filter For
              <br />
              Commercial & Industrial
            </h2>
            <div className="flex gap-4">
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-slate-900">
                Read More
              </Button>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Contact Us</Button>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Three Column Section */}
      <div className="bg-gray-50 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Quality Policy */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-cyan-400 rounded flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Quality Policy</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We provides customer with the best value for their resources expended.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-cyan-400 rounded flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To provide superior quality products and services to our customers..
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-cyan-600 p-6 rounded-lg text-white">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">OUR VISION</h3>
                  <p className="text-sm leading-relaxed">
                    To Expand the working horizon to cover many customers over the country.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Company Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/blue-water-treatment-tanks-and-industrial-equipmen.jpg"
                  alt="Water treatment equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-cyan-600 text-sm font-medium uppercase tracking-wide">ABOUT COMPANY</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Water & Waste Water Treatment Technologies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Muscat water treatment trading & contracting Co. Is an ISO 9001:2015 certified pioneer company leading
                  in the field of Water & Waste Water treatment technologies. It is a Gulf based company Qatar Water has
                  provided flawless services and supports We offer single source responsibility for complete water
                  treatment solution for all sectors.
                </p>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-slate-800 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-wide mb-2">OUR SERVICES</p>
            <h2 className="text-3xl font-bold">Services We're Offering</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Build Operate */}
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/water-treatment-system-design.jpg"
                  alt="Design Build Operate"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">DESIGN,BUILD AND OPERATE</h3>
              <p className="text-sm text-gray-600 mb-4">
                At Muscat water treatment trading & contracting Co. we have full capability to provide full turnkey
                package covering all areas..
              </p>
              <Button variant="outline" className="text-cyan-600 border-cyan-600 hover:bg-cyan-50 bg-transparent">
                Read More
              </Button>
            </div>

            {/* Process Design */}
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/water-treatment-process-design-equipment.jpg"
                  alt="Process Design"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">PROCESS DESIGN</h3>
              <p className="text-sm text-gray-600 mb-4">
                Muscat water has an in house resource to provide you with full process design for all water and waste
                water treatment and plumbing applications.
              </p>
              <Button variant="outline" className="text-cyan-600 border-cyan-600 hover:bg-cyan-50 bg-transparent">
                Read More
              </Button>
            </div>

            {/* Commissioning */}
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/water-treatment-commissioning-equipment.jpg"
                  alt="Commissioning"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">COMMISSIONING AND HANDOVER</h3>
              <p className="text-sm text-gray-600 mb-4">
                We have completed more than 100 projects of water system. Based on this extensive experience, we have an
                in-depth knowledge..
              </p>
              <Button variant="outline" className="text-cyan-600 border-cyan-600 hover:bg-cyan-50 bg-transparent">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Products */}
      <div className="bg-gray-50 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Design, Detailed Engineering, Consultancy, Production Supply, Installation and Commissioning of Water
              Treatment System such as Multimedia Filters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img
                src="/domestic-water-purifier.jpg"
                alt="Domestic Water Purifier"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <h4 className="font-semibold text-gray-800">Domestic Water Purifier</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img
                src="/jumbo-water-filters-blue.jpg"
                alt="Jumbo Water Filters"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <h4 className="font-semibold text-gray-800">Jumbo Water Filters</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img
                src="/advanced-water-filtration-system-with-digital-control.jpg"
                alt="Advanced Filtration System"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <h4 className="font-semibold text-gray-800">Advanced Filtration System</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img
                src="/modern-water-dispenser-with-digital-display.jpg"
                alt="Modern Water Dispenser"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <h4 className="font-semibold text-gray-800">Modern Water Dispenser</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Our Valuable Brands */}
      <div className="bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Valuable Brands</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <img src="/cnp-logo.jpg" alt="CNP" className="h-12 object-contain" />
            <img src="/cck-logo.jpg" alt="C.C.K." className="h-12 object-contain" />
            <img src="/chemtronics-logo.jpg" alt="Chemtronics" className="h-12 object-contain" />
            <img src="/vontron-logo.jpg" alt="Vontron" className="h-12 object-contain" />
            <img src="/hydranautics-logo.jpg" alt="Hydranautics" className="h-12 object-contain" />
            <img src="/toray-logo.jpg" alt="Toray" className="h-12 object-contain" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Muscat Water Treatment Trading & Contracting</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Expert solutions and sales - Qatar - Dubai - Al Ain - Liwa - Oman - Muscat - Salalah - Barka - United
                Arab Emirates (UAE) - Dubai - Sharjah - Ajman - Abu Dhabi - Fujairah - Ras al Khaimah - Al Ain
              </p>
              <div className="text-gray-300 text-sm space-y-1">
                <p>
                  <strong>Address:</strong> Muscat, Sultanate of Oman
                </p>
                <p>
                  <strong>Phone:</strong> +968 94064811
                </p>
                <p>
                  <strong>Email:</strong> response@qatarwatertreatment.com
                </p>
                <p>
                  <strong>Website:</strong> www.qatarwatertreatment.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/" className="hover:text-cyan-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-cyan-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-cyan-400">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-cyan-400">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="hover:text-cyan-400">
                    Clients
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-cyan-400">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry" className="hover:text-cyan-400">
                    Enquiry
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Our Location</h3>
              <div className="text-gray-300 text-sm space-y-2">
                <p>
                  <strong>Head Office:</strong>
                </p>
                <p>Muscat Water Treatment Trading & Contracting Co.</p>
                <p>Muscat, Sultanate of Oman</p>
                <p className="mt-4">
                  <strong>Contact Information:</strong>
                </p>
                <p>Tel: +968 94064811</p>
                <p>Email: response@qatarwatertreatment.com</p>
                <p className="mt-4">
                  <strong>Service Areas:</strong>
                </p>
                <p>Qatar, UAE, Oman, GCC Countries</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Muscat Water Treatment Trading & Contracting Co. All rights reserved. Designed And Promoted By
              Maharashtra Industries Directory, www.maharashtradirectory.com
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-orange-600 transition-colors">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm font-medium">Any Question? We are Online... Ask Now</span>
        </div>
      </div>
    </div>
  )
}
