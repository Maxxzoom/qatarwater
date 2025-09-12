import { Phone, Mail, Facebook, Twitter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
          <p className="text-xl text-gray-300">
            Trusted by Leading Organizations Across the Region
          </p>
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
              Muscat Water Treatment Trading & Contracting Co. has successfully
              served numerous prestigious clients across Qatar, UAE, and Oman.
              Our commitment to excellence and quality has earned us the trust
              of leading organizations in various sectors.
            </p>
          </div>

          {/* Client Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Industrial Sector
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manufacturing plants, chemical industries, and processing
                facilities requiring high-quality water treatment solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Commercial Buildings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hotels, shopping malls, office complexes, and residential
                buildings with comprehensive water treatment needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Healthcare Facilities
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Hospitals, clinics, and medical centers requiring ultra-pure
                water for medical applications and patient care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Educational Institutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Schools, universities, and research facilities with specialized
                water purification requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Government Projects
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Municipal water treatment plants, government buildings, and
                public infrastructure projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Oil & Gas Industry
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Refineries, petrochemical plants, and offshore facilities
                requiring specialized water treatment solutions.
              </p>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">
                  "Muscat Water Treatment has been our trusted partner for over
                  5 years. Their expertise in industrial water treatment and
                  commitment to quality service is unmatched in the region."
                </p>
                <div className="font-semibold text-gray-800">
                  - Industrial Manufacturing Client
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">
                  "The sea water reverse osmosis system installed by Muscat
                  Water has exceeded our expectations. Professional installation
                  and excellent after-sales support."
                </p>
                <div className="font-semibold text-gray-800">
                  - Commercial Building Client
                </div>
              </div>
            </div>
          </div>

          {/* Geographic Coverage */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Geographic Coverage
            </h3>
            <div className="bg-cyan-50 rounded-lg p-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Qatar:</strong> Doha, Al Rayyan, Al Wakrah, Al Khor
                <br />
                <strong>UAE:</strong> Dubai, Abu Dhabi, Sharjah, Ajman,
                Fujairah, Ras Al Khaimah, Al Ain
                <br />
                <strong>Oman:</strong> Muscat, Salalah, Barka, Sohar, Nizwa, Sur
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
