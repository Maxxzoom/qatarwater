import { Phone, Mail, Facebook, Twitter, Globe, Wrench, Settings, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
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
          <Link href="/" className="flex items-center gap-4">
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
          </Link>
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
            <Link href="/">
              <Button variant="outline" className="px-6 py-2 rounded-full bg-transparent">
                Home
              </Button>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Our Services
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
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
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-cyan-400">Comprehensive water treatment solutions for all your needs</p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our main service is the design, detailed engineering, consultancy, production supply, installation and
              commissioning of water treatment system such as Multimedia filters, Activated carbon filters, Water
              softeners, chemical dosing system, Reverse osmosis plants for desalination, Ground water, Brackish water,
              grey water treatment system.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Design Build Operate */}
            <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">DESIGN, BUILD AND OPERATE</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Muscat Water Treatment Trading And Contracting L.L.C we have full capability to provide full turnkey
                package covering all areas of design build and operate.
              </p>
              <img
                src="/water-treatment-system-design.jpg"
                alt="Design Build Operate"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">Learn More</Button>
            </div>

            {/* Process Design */}
            <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">PROCESS DESIGN</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Muscat Water has an in house resource to provide you with full process design for all water and waste
                water treatment and plumbing applications.
              </p>
              <img
                src="/water-treatment-process-design-equipment.jpg"
                alt="Process Design"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">Learn More</Button>
            </div>

            {/* Commissioning */}
            <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">COMMISSIONING AND HANDOVER</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We have completed more than 100 projects of water system. Based on this extensive experience, we have an
                in-depth knowledge and capability to commission and put into operation a wide variety of successful
                projects and technologies.
              </p>
              <img
                src="/water-treatment-commissioning-equipment.jpg"
                alt="Commissioning"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">Learn More</Button>
            </div>

            {/* Service and Repairs */}
            <div className="bg-white p-8 rounded-lg shadow-lg border hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                    <Wrench className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">SERVICE AND REPAIRS</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Muscat Water provides ultimate service for all our equipment's, system and services time to time. We
                    have dedicated drilled technical team to helping customers to optimise the performance of their
                    processes.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Water system requires regular monitoring and maintenance to protect against fluctuating water
                    conditions. With Muscat Water at your service, you are guaranteed peace of mind with the assurance
                    of efficient operation and long equipment life.
                  </p>
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Contact for Service</Button>
                </div>
                <div>
                  <img
                    src="/blue-water-treatment-tanks-and-industrial-equipmen.jpg"
                    alt="Service and Repairs"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">100+</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Projects Completed</h4>
                <p className="text-sm text-gray-600">Successfully delivered water treatment solutions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Support Available</h4>
                <p className="text-sm text-gray-600">Round the clock maintenance and support</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">ISO Certified</h4>
                <p className="text-sm text-gray-600">Quality assured with ISO 9001:2015</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Gulf Coverage</h4>
                <p className="text-sm text-gray-600">Serving across Gulf region</p>
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
    </div>
  )
}
