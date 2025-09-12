import { Phone, Mail, Facebook, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/about" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
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
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-cyan-400">Learn more about our company and expertise</p>
        </div>
      </div>

      {/* About Content */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="mb-6">
                <span className="text-cyan-600 text-sm font-medium uppercase tracking-wide">ABOUT COMPANY</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Water & Waste Water Treatment Technologies</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Muscat water treatment trading & contracting Co. Is an ISO 9001:2015 certified pioneer company leading
                  in the field of Water & Waste Water treatment technologies. It is a Gulf based company Muscat Water
                  has provided flawless services and supports We offer single source responsibility for complete water
                  treatment solution for all sectors.
                </p>
                <p>
                  Muscat water treatment trading & contracting Co. Company has established high reputation and good will
                  among the customers through high service. Muscat water has got professional engineers, skilled
                  technicians, electricians and professional Sales Personnel who will exactly suggest you the water
                  system according to your water condition and type of building.
                </p>
                <p>
                  Commercial requirements Muscat water deserve to provide its esteemed customers with maintenance within
                  24 hours of their complaints if any. Muscat water treatment trading & contracting Co. Company is known
                  to treat any kind of water such as sea water, bore well /brackish water, Municipal water, grey water,
                  sewage water ,industrial effluents etc.. for both domestic and commercial purpose.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/blue-water-treatment-tanks-and-industrial-equipmen.jpg"
                alt="Water treatment facility"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Company Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Team</h3>
              <p className="text-gray-600">
                Professional engineers, skilled technicians, electricians and professional Sales Personnel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Maintenance within 24 hours of customer complaints with dedicated support team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Solutions</h3>
              <p className="text-gray-600">
                Single source responsibility for complete water treatment solution for all sectors.
              </p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Expertise</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We have got strong back up of esteemed customers who are extremely satisfied with our product and
              services. Our range can be customised according to client's need and we offer customisation on various
              parameters like capacity raw material used and dimensions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are the fastest and largest growing integrated water solution provider in country backed by supplying
              top brand products and dedicated manpower, working constantly to ensure maximum client satisfaction.
              However if you require any further information/ clarification please feel free to contact us and we shall
              be glad to furnish you the same.
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
