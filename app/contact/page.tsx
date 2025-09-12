import { Phone, Mail, Facebook, Twitter, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
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
            <Link href="/contact" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="bg-slate-800 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-cyan-400">Get in touch with our water treatment experts</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="Enter message subject" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea placeholder="Enter your message here..." rows={6} />
                </div>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-cyan-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        Muscat, Oman
                        <br />
                        Serving Qatar, UAE, and Gulf Region
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone Number</h3>
                      <p className="text-gray-600">+968 94064811</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email Address</h3>
                      <p className="text-gray-600">response@qatarwatertreatment.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Sunday - Thursday: 8:00 AM - 6:00 PM
                        <br />
                        Friday - Saturday: 9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Oman</h4>
                    <ul className="space-y-1">
                      <li>Muscat</li>
                      <li>Salalah</li>
                      <li>Barka</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">UAE</h4>
                    <ul className="space-y-1">
                      <li>Dubai</li>
                      <li>Abu Dhabi</li>
                      <li>Sharjah</li>
                      <li>Ajman</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Qatar</h4>
                    <ul className="space-y-1">
                      <li>Doha</li>
                      <li>Al Rayyan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Other Areas</h4>
                    <ul className="space-y-1">
                      <li>Al Ain</li>
                      <li>Liwa</li>
                      <li>Fujairah</li>
                    </ul>
                  </div>
                </div>
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
