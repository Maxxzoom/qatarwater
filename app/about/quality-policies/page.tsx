import { Phone, Mail, Facebook, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function QualityPoliciesPage() {
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
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-full">About Us</Button>
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

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Quality Policies</h1>
          <div className="w-20 h-1 bg-cyan-600 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan-400 rounded flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3">Our Quality Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We provide customers with the best value for their resources expended. Our commitment to quality
                    ensures that every product and service meets the highest standards in the water treatment industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">ISO 9001:2015 Certification</h3>
                <p className="text-gray-600 leading-relaxed">
                  Muscat Water Treatment Trading & Contracting Co. is an ISO 9001:2015 certified company, demonstrating
                  our commitment to quality management systems and continuous improvement.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain strict quality control measures throughout our operations, from design and manufacturing
                  to installation and after-sales service.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our quality policy focuses on exceeding customer expectations by delivering reliable, efficient, and
                  cost-effective water treatment solutions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-cyan-600 text-white p-8 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">Quality Standards</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Compliance with international water treatment standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Regular quality audits and assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Continuous training and development programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Advanced testing and monitoring procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Commitment to environmental sustainability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <img
                src="/water-treatment-system-design.jpg"
                alt="Quality Control Process"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Quality Control Process</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our comprehensive quality control process ensures that every water treatment system meets our rigorous
                standards before delivery and installation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white px-4 py-12 mt-16">
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
                  <Link href="/about/quality-policies" className="hover:text-cyan-400">
                    Quality Policies
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
    </div>
  )
}
