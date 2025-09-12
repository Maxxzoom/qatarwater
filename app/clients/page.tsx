import { Phone, Mail, Facebook, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ClientsPage() {
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
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              Products ▼
            </Link>
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-full">Clients</Button>
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
          <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
          <p className="text-xl text-gray-300">Trusted by Leading Organizations Across the Region</p>
        </div>
      </div>

      {/* Clients Content */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Industrial Water Softener & Sea Water Reverse Osmosis System
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Muscat Water Treatment Trading & Contracting Co. has successfully served numerous prestigious clients
              across Qatar, UAE, and Oman. Our commitment to excellence and quality has earned us the trust of leading
              organizations in various sectors.
            </p>
          </div>

          {/* Client Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Industrial Sector</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manufacturing plants, chemical industries, and processing facilities requiring high-quality water
                treatment solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Commercial Buildings</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hotels, shopping malls, office complexes, and residential buildings with comprehensive water treatment
                needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Healthcare Facilities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hospitals, clinics, and medical centers requiring ultra-pure water for medical applications and patient
                care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Educational Institutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Schools, universities, and research facilities with specialized water purification requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Government Projects</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Municipal water treatment plants, government buildings, and public infrastructure projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Oil & Gas Industry</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Refineries, petrochemical plants, and offshore facilities requiring specialized water treatment
                solutions.
              </p>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">
                  "Muscat Water Treatment has been our trusted partner for over 5 years. Their expertise in industrial
                  water treatment and commitment to quality service is unmatched in the region."
                </p>
                <div className="font-semibold text-gray-800">- Industrial Manufacturing Client</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">
                  "The sea water reverse osmosis system installed by Muscat Water has exceeded our expectations.
                  Professional installation and excellent after-sales support."
                </p>
                <div className="font-semibold text-gray-800">- Commercial Building Client</div>
              </div>
            </div>
          </div>

          {/* Geographic Coverage */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Geographic Coverage</h3>
            <div className="bg-cyan-50 rounded-lg p-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Qatar:</strong> Doha, Al Rayyan, Al Wakrah, Al Khor
                <br />
                <strong>UAE:</strong> Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, Al Ain
                <br />
                <strong>Oman:</strong> Muscat, Salalah, Barka, Sohar, Nizwa, Sur
              </p>
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
