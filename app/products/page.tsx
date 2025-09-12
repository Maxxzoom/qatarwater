import { Phone, Mail, Facebook, Twitter, Droplets, Filter, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      name: "Domestic Water Purifier",
      image: "/domestic-water-purifier.jpg",
      description: "High-quality water purification systems for residential use with advanced filtration technology.",
    },
    {
      name: "Jumbo Water Filters",
      image: "/jumbo-water-filters-blue.jpg",
      description: "Large capacity water filters designed for commercial and industrial applications.",
    },
    {
      name: "Advanced Filtration System",
      image: "/advanced-water-filtration-system-with-digital-control.jpg",
      description:
        "State-of-the-art multi-stage filtration system with digital control panel for precise water treatment.",
    },
    {
      name: "Modern Water Dispenser",
      image: "/modern-water-dispenser-with-digital-display.jpg",
      description: "Premium water dispensing solutions with digital controls for offices and commercial spaces.",
    },
    {
      name: "Multimedia Filters",
      image: "/blue-water-treatment-tanks.jpg",
      description: "Multi-stage filtration systems for removing various contaminants from water.",
    },
    {
      name: "Reverse Osmosis Systems",
      image: "/water-filtration-equipment.jpg",
      description: "Advanced RO systems for desalination and water purification applications.",
    },
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
            <Link href="/">
              <Button variant="outline" className="px-6 py-2 rounded-full bg-transparent">
                Home
              </Button>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Our Services
            </Link>
            <Link href="/products" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Products
            </Link>
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

      {/* Page Header */}
      <div className="bg-slate-800 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-cyan-400">Comprehensive range of water treatment equipment and solutions</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Water Treatment Equipment</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer a comprehensive range of water treatment products designed to meet various industrial,
              commercial, and residential needs. All our products are sourced from top brands and meet international
              quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  <div className="flex gap-2">
                    <Button className="bg-cyan-600 hover:bg-cyan-700 text-white flex-1">View Details</Button>
                    <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                      Enquire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cyan-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Water Purifiers</h3>
              <p className="text-gray-600">
                Domestic and commercial water purification systems for clean, safe drinking water.
              </p>
            </div>
            <div className="bg-cyan-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Filtration Systems</h3>
              <p className="text-gray-600">
                Advanced filtration solutions including multimedia filters and reverse osmosis systems.
              </p>
            </div>
            <div className="bg-cyan-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">UV Sterilizers</h3>
              <p className="text-gray-600">UV sterilization systems for effective disinfection and water treatment.</p>
            </div>
          </div>

          {/* Brand Partners */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Brand Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-blue-600">CNP</div>
              <div className="text-2xl font-bold text-blue-800">C.R.I.</div>
              <div className="text-xl font-semibold text-green-600">Chemtronics</div>
              <div className="text-xl font-bold text-blue-700">PENTRON</div>
              <div className="text-xl font-bold text-blue-600">Hayward</div>
              <div className="text-2xl font-bold text-red-600">PENTAIR</div>
            </div>
            <p className="text-center text-gray-600 mt-4">
              We partner with leading international brands to ensure the highest quality products for our customers.
            </p>
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
    </div>
  )
}
