import { Phone, Mail, Facebook, Twitter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Carousel from "@/components/ui/carousels";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <Header />

      {/* Hero Section */}
      <Carousel />

      {/* Three Column Section */}
      <div className="bg-gray-50 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Quality Policy */}
            <div className="group bg-white hover:bg-cyan-700 p-6 rounded-lg shadow-sm hover:text-white">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-cyan-700 group-hover:bg-white rounded flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white group-hover:text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Quality Policy</h3>
                  <p className="text-sm leading-relaxed">
                    We provide customers with the best value for their resources
                    expended.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="group bg-white hover:bg-cyan-700 p-6 rounded-lg shadow-sm hover:text-white">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-cyan-700 group-hover:bg-white rounded flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white group-hover:text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Our Mission</h3>
                  <p className="text-sm leading-relaxed">
                    To provide superior quality products and services to our
                    customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div className="group bg-white hover:bg-cyan-700 p-6 rounded-lg shadow-sm hover:text-white">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-cyan-700 group-hover:bg-white rounded flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white group-hover:text-cyan-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Our Vision</h3>
                  <p className="text-sm leading-relaxed">
                    To expand the working horizon to cover many customers across
                    the country.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Company Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/blue-water-treatment-tanks-and-industrial-equipmen.jpg"
                  alt="Water treatment equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-cyan-700 text-sm font-medium uppercase tracking-wide">
                    ABOUT COMPANY
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Water & Waste Water Treatment Technologies
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Muscat water treatment trading & contracting Co. Is an ISO
                  9001:2015 certified pioneer company leading in the field of
                  Water & Waste Water treatment technologies. It is a Gulf based
                  company Qatar Water has provided flawless services and
                  supports We offer single source responsibility for complete
                  water treatment solution for all sectors.
                </p>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-slate-800 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className=" text-sm font-medium uppercase tracking-wide mb-2">
              OUR SERVICES
            </p>
            <h2 className="text-3xl font-bold">Services We're Offering</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Build Operate */}
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/water-treatment-system-design.jpg"
                  alt="Design Build Operate"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">
                DESIGN,BUILD AND OPERATE
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                At Muscat water treatment trading & contracting Co. we have full
                capability to provide full turnkey package covering all areas..
              </p>
              <Button
                variant="outline"
                className="text-cyan-600 border-cyan-600 hover:bg-cyan-50 bg-transparent"
              >
                Read More
              </Button>
            </div>

            {/* Process Design */}
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/water-treatment-process-design-equipment.jpg"
                  alt="Process Design"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">PROCESS DESIGN</h3>
              <p className="text-sm text-gray-600 mb-4">
                Muscat water has an in house resource to provide you with full
                process design for all water and waste water treatment and
                plumbing applications.
              </p>
              <Button
                variant="outline"
                className="text-cyan-600 border-cyan-600 hover:bg-cyan-50 bg-transparent"
              >
                Read More
              </Button>
            </div>

            {/* Commissioning */}
            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <div className="mb-4">
                <img
                  src="/water-treatment-commissioning-equipment.jpg"
                  alt="Commissioning"
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <h3 className="text-lg font-bold mb-3">
                COMMISSIONING AND HANDOVER
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                We have completed more than 100 projects of water system. Based
                on this extensive experience, we have an in-depth knowledge..
              </p>
              <Button
                variant="outline"
                className="text-cyan-600 border-cyan-600 hover:bg-cyan-50 bg-transparent"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Products */}
      <div className="bg-gray-50 px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Design, Detailed Engineering, Consultancy, Production Supply,
              Installation and Commissioning of Water Treatment System such as
              Multimedia Filters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img
                src="/domestic-water-purifier.jpg"
                alt="Domestic Water Purifier"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <h4 className="font-semibold text-gray-800">
                Domestic Water Purifier
              </h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img
                src="/jumbo-water-filters-blue.jpg"
                alt="Jumbo Water Filters"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <h4 className="font-semibold text-gray-800">
                Jumbo Water Filters
              </h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img
                src="/advanced-water-filtration-system-with-digital-control.jpg"
                alt="Advanced Filtration System"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <h4 className="font-semibold text-gray-800">
                Advanced Filtration System
              </h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <img
                src="/modern-water-dispenser-with-digital-display.jpg"
                alt="Modern Water Dispenser"
                className="w-full h-32 object-cover rounded mb-3"
              />
              <h4 className="font-semibold text-gray-800">
                Modern Water Dispenser
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Our Valuable Brands */}
      <div className="bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Our Valuable Brands
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <img
              src="/cnp-logo.jpg"
              alt="CNP"
              className="h-12 object-contain"
            />
            <img
              src="/cck-logo.jpg"
              alt="C.C.K."
              className="h-12 object-contain"
            />
            <img
              src="/chemtronics-logo.jpg"
              alt="Chemtronics"
              className="h-12 object-contain"
            />
            <img
              src="/vontron-logo.jpg"
              alt="Vontron"
              className="h-12 object-contain"
            />
            <img
              src="/hydranautics-logo.jpg"
              alt="Hydranautics"
              className="h-12 object-contain"
            />
            <img
              src="/toray-logo.jpg"
              alt="Toray"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
