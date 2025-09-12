import { Phone, Mail, Facebook, Twitter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ArticlesPage() {
  const articles = [
    "RO Water Purifier & Filter Supplier Oman-Muscat Water",
    "Residential Water Filter Oman - Muscat Water",
    "RO Water Filter Supply In Oman - Muscat Water",
    "Water Purification Company In Oman - Muscat Water",
    "RO Water Filter Cartridge Oman - Muscat Water",
    "Reverse Osmosis Water Filter Under Sink Oman, Muscat Water",
    "Reverse Osmosis Water Purifier Under Sink Oman, Muscat Water",
    "Water Treatment Company In Oman - Muscat Water",
    "Water Purifier Oman-Water Purifier Price In Oman - Muscat Water",
    "Water Treatment Supplier Oman - Muscat Water",
    "Water Filter Supplier Oman - Muscat Water",
    "Leading Water Filter Company In Oman - Muscat Water",
    "Drinking Water Filter Machine Installation Company In Oman - Muscat Water",
    "Water Purifier Installation & Commissioning Oman - Muscat Water",
    "Water Purifier Maintenance Company In Oman - Muscat Water",
    "Water purifier service in oman - muscat water",
    "Water Purifier Seller In Oman - Muscat Water",
    "Water Filter & Purifier System Supplier In Oman - Muscat Water",
    "Water Filter / Purifier Shop In Oman - Muscat Water",
    "RO Water Filter System 200 Gpd Supplier In Oman-Muscat Water",
    "RO Water Purifier 200 Gpd Installation & Service In Oman-Muscat Water",
    "400 GPD RO Water System Supplier In Oman-Muscat Water",
    "400 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "600 GPD RO Water System Supplier In Oman-Muscat Water",
    "600 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "800 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "1000 GPD RO Water System Supplier In Oman-Muscat Water",
    "1000 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "2000 GPD RO Water System Supplier In Oman - Muscat Water",
    "2000 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "3000 GPD RO Water System Supplier In Oman-Muscat Water",
    "3000 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "Big Blue Water Filter System Oman - Muscat Water",
    "Big Blue Water Filter Oman - Muscat Water",
    'Big Blue 20" Water Filter Oman - Muscat Water',
    'Three Stage Big Blue 20" Water Filter Oman- Muscat Water',
    "Triple Jumbo Filter For Whole House Oman - Muscat Water",
    "Chlorine Removal Filter For House Oman - Muscat Water",
    "Building Water Filter Oman - Muscat Water",
    "Whole House Water Filter In Oman - Muscat Water",
    "Jumbo Central Water Filter Oman - Muscat Water",
    "Jumbo Triple Water Filter Oman -Muscat Water",
    "Jumbo Filtration System Oman- Muscat Water",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-cyan-600 text-white px-4 py-2">
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
      <nav className="bg-white shadow-sm px-4 py-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us ▼
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Our Services
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              Products ▼
            </Link>
            <Link href="/clients" className="text-gray-700 hover:text-blue-600 font-medium">
              Clients
            </Link>
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-full">Articles</Button>
            <Link href="/enquiry" className="text-gray-700 hover:text-blue-600 font-medium">
              Enquiry
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-slate-800 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Articles</h1>
          <p className="text-xl text-gray-300">Water Treatment Accessories, Water Treatment Components, Supply</p>
        </div>
      </div>

      {/* Articles Content */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">{article}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive information about water treatment solutions, installation services, and maintenance for
                  various capacity systems in Oman.
                </p>
                <Button
                  variant="outline"
                  className="text-cyan-600 border-cyan-600 hover:bg-cyan-50 bg-transparent text-sm"
                >
                  Read More
                </Button>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Article Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-cyan-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-gray-800 mb-2">RO Systems</h3>
                <p className="text-sm text-gray-600">Reverse Osmosis water purification systems and components</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-gray-800 mb-2">Water Filters</h3>
                <p className="text-sm text-gray-600">Various filtration systems for residential and commercial use</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-gray-800 mb-2">Installation & Service</h3>
                <p className="text-sm text-gray-600">Professional installation and maintenance services</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-gray-800 mb-2">Industrial Solutions</h3>
                <p className="text-sm text-gray-600">Large capacity systems for industrial applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Muscat Water Treatment Trading & Contracting</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Expert solutions and sales - Qatar - Dubai - Al Ain - Liwa - Oman - Muscat - Salalah - Barka - United
                Arab Emirates (UAE) - Dubai - Sharjah - Ajman - Abu Dhabi - Fujairah - Ras al Khaimah - Al Ain
              </p>
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
                  <Link href="/contact" className="hover:text-cyan-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Our Location</h3>
              <p className="text-gray-300 text-sm">
                Muscat, Oman
                <br />
                Tel: +968 94064811
                <br />
                Email: response@qatarwatertreatment.com
              </p>
            </div>
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
