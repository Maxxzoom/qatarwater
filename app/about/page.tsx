import { Phone, Mail, Facebook, Twitter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-cyan-400">
            Learn more about our company and expertise
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="mb-6">
                <span className="text-cyan-600 text-sm font-medium uppercase tracking-wide">
                  ABOUT COMPANY
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Water & Waste Water Treatment Technologies
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Muscat water treatment trading & contracting Co. Is an ISO
                  9001:2015 certified pioneer company leading in the field of
                  Water & Waste Water treatment technologies. It is a Gulf based
                  company Muscat Water has provided flawless services and
                  supports We offer single source responsibility for complete
                  water treatment solution for all sectors.
                </p>
                <p>
                  Muscat water treatment trading & contracting Co. Company has
                  established high reputation and good will among the customers
                  through high service. Muscat water has got professional
                  engineers, skilled technicians, electricians and professional
                  Sales Personnel who will exactly suggest you the water system
                  according to your water condition and type of building.
                </p>
                <p>
                  Commercial requirements Muscat water deserve to provide its
                  esteemed customers with maintenance within 24 hours of their
                  complaints if any. Muscat water treatment trading &
                  contracting Co. Company is known to treat any kind of water
                  such as sea water, bore well /brackish water, Municipal water,
                  grey water, sewage water ,industrial effluents etc.. for both
                  domestic and commercial purpose.
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Professional Team
              </h3>
              <p className="text-gray-600">
                Professional engineers, skilled technicians, electricians and
                professional Sales Personnel.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Maintenance within 24 hours of customer complaints with
                dedicated support team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Complete Solutions
              </h3>
              <p className="text-gray-600">
                Single source responsibility for complete water treatment
                solution for all sectors.
              </p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Expertise
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We have got strong back up of esteemed customers who are extremely
              satisfied with our product and services. Our range can be
              customised according to client's need and we offer customisation
              on various parameters like capacity raw material used and
              dimensions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are the fastest and largest growing integrated water solution
              provider in country backed by supplying top brand products and
              dedicated manpower, working constantly to ensure maximum client
              satisfaction. However if you require any further information/
              clarification please feel free to contact us and we shall be glad
              to furnish you the same.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
