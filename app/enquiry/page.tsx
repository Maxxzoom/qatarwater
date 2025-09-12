import { Phone, Mail, Facebook, Twitter, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EnquiryPage() {
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
            <Link href="/clients" className="text-gray-700 hover:text-blue-600 font-medium">
              Clients
            </Link>
            <Link href="/articles" className="text-gray-700 hover:text-blue-600 font-medium">
              Articles
            </Link>
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-full">Enquiry</Button>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-slate-800 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Send An Enquiry</h1>
          <p className="text-xl text-gray-300">Get in Touch for Water Treatment Solutions</p>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Request a Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ro-system">RO Water System</option>
                    <option value="water-softener">Water Softener</option>
                    <option value="multimedia-filter">Multimedia Filter</option>
                    <option value="industrial-treatment">Industrial Water Treatment</option>
                    <option value="domestic-purifier">Domestic Water Purifier</option>
                    <option value="maintenance">Maintenance & Service</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Location</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option value="">Select location</option>
                    <option value="qatar">Qatar</option>
                    <option value="uae">United Arab Emirates</option>
                    <option value="oman">Oman</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-vertical"
                    placeholder="Please describe your requirements in detail..."
                  ></textarea>
                </div>

                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg">Send Enquiry</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+968 94064811</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">response@qatarwatertreatment.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">Muscat, Oman</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Business Hours</h4>
                      <p className="text-gray-600">
                        Sunday - Thursday: 8:00 AM - 6:00 PM
                        <br />
                        Friday - Saturday: 9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    ISO 9001:2015 Certified Company
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    15+ Years of Experience
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    100+ Successful Projects
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    Comprehensive Warranty
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                <p className="text-gray-300 mb-4">
                  Need urgent water treatment service? Our emergency response team is available 24/7 for critical
                  situations.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Call Emergency Line</Button>
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
