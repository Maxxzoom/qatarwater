import { Phone, Mail, Facebook, Twitter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function QualityPoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <Header />

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Quality Policies
          </h1>
          <div className="w-20 h-1 bg-cyan-600 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-cyan-700 rounded flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    Our Quality Policy
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We provide customers with the best value for their resources
                    expended. Our commitment to quality ensures that every
                    product and service meets the highest standards in the water
                    treatment industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  ISO 9001:2015 Certification
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Muscat Water Treatment Trading & Contracting Co. is an ISO
                  9001:2015 certified company, demonstrating our commitment to
                  quality management systems and continuous improvement.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain strict quality control measures throughout our
                  operations, from design and manufacturing to installation and
                  after-sales service.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our quality policy focuses on exceeding customer expectations
                  by delivering reliable, efficient, and cost-effective water
                  treatment solutions.
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
                  <span>
                    Compliance with international water treatment standards
                  </span>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Quality Control Process
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our comprehensive quality control process ensures that every
                water treatment system meets our rigorous standards before
                delivery and installation.
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
