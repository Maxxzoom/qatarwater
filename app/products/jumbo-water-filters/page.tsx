import { Phone, Mail, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function JumboWaterFiltersPage() {
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
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
              <div className="text-orange-600 font-bold text-2xl">🦌</div>
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
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="text-white text-xs font-bold text-center">
                ISO
                <br />
                9001:2015
              </div>
            </div>
            <div className="w-16 h-16 bg-blue-800 rounded flex items-center justify-center">
              <div className="text-white text-xs font-bold text-center">
                Water
                <br />
                Quality
              </div>
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
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-full">Products ▼</Button>
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

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src="/jumbo-water-filters-blue.jpg"
              alt="Jumbo Water Filters"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Jumbo Water Filters</h1>
            <div className="prose text-gray-600 space-y-4">
              <p>
                Our Jumbo Water Filters are high-capacity filtration systems designed for commercial and industrial
                applications. These robust filters provide superior water quality for large-scale operations.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Features:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>High-capacity filtration system</li>
                <li>Durable construction for industrial use</li>
                <li>Multiple filter media options</li>
                <li>Easy maintenance and cleaning</li>
                <li>Corrosion-resistant materials</li>
                <li>Long service life</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Specifications:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Flow rate: 50-200 GPM</li>
                <li>Filter size: 20" x 4.5" cartridges</li>
                <li>Operating pressure: up to 150 PSI</li>
                <li>Temperature range: 40-100°F</li>
                <li>Housing material: Stainless steel/FRP</li>
              </ul>
            </div>
            <div className="mt-8 flex gap-4">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Get Quote</Button>
              <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                Contact Us
              </Button>
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
                  <a href="#" className="hover:text-cyan-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Contact Us
                  </a>
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
    </div>
  )
}
