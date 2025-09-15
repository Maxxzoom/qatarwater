import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
// import ProductsSection from "@/components/products-section"
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-cyan-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              High-quality water treatment equipment and systems for
              residential, commercial, and industrial applications
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column 1 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-700">
                  Residential Systems
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/products/domestic-water-purifier"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Domestic Water Purifier
                    </span>
                  </Link>
                  <Link
                    href="/products/jumbo-water-filters"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Jumbo Water Filters
                    </span>
                  </Link>
                  <Link
                    href="/products/jumbo-water-filters-uv"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Jumbo Water Filters With U.V. Sterilizer
                    </span>
                  </Link>
                  <Link
                    href="/products/water-dispenser"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Water Dispenser
                    </span>
                  </Link>
                  <Link
                    href="/products/filter-cartridges"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Filter Cartridges Spares Parts & Filter Bags
                    </span>
                  </Link>
                  <Link
                    href="/products/shower-filter"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Shower Filter
                    </span>
                  </Link>
                  <Link
                    href="/products/water-softener-residential"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Water Softener For Residential
                    </span>
                  </Link>
                  <Link
                    href="/products/water-softener-commercial"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Water Softener For Commercial & Industrial
                    </span>
                  </Link>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-700">
                  Industrial Systems
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/products/hydro-pneumatic-system"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Hydro Pneumatic System
                    </span>
                  </Link>
                  <Link
                    href="/products/ozonation-system"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Ozonation System
                    </span>
                  </Link>
                  <Link
                    href="/products/chlorine-dosing-system"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Chlorine Dosing System
                    </span>
                  </Link>
                  <Link
                    href="/products/multimedia-filter-residential"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Multimedia Filter For Residential
                    </span>
                  </Link>
                  <Link
                    href="/products/multimedia-filter-commercial"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Multimedia Filter For Commercial & Industrial
                    </span>
                  </Link>
                  <Link
                    href="/products/activated-carbon-filter"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Activated carbon Filter
                    </span>
                  </Link>
                  <Link
                    href="/products/reverse-osmosis-system"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Reverse Osmosis System 200 GPD & 400 GPD
                    </span>
                  </Link>
                  <Link
                    href="/products/brackish-water-ro"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Brackish Water Reverse Osmosis System
                    </span>
                  </Link>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-700">
                  Advanced Treatment
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/products/sea-water-ro"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Sea Water Reverse Osmosis System
                    </span>
                  </Link>
                  <Link
                    href="/products/grey-green-water-treatment"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Grey+Green Water Treatment System
                    </span>
                  </Link>
                  <Link
                    href="/products/demineralised-plants"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Demineralised Plants & Mixed Bed Plants
                    </span>
                  </Link>
                  <Link
                    href="/products/uf-ultra-filteration"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      UF Ultra Filteration Water System
                    </span>
                  </Link>
                  <Link
                    href="/products/micron-cartridge-filter"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Micron Cartridge Filter
                    </span>
                  </Link>
                  <Link
                    href="/products/ultra-violet-sterilizer"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Ultra Voilet Sterilizer
                    </span>
                  </Link>
                  <Link
                    href="/products/micro-filter"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Micro Filter
                    </span>
                  </Link>
                  <Link
                    href="/products/water-treatment-accessories"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Water Treatment Accessories & Components
                    </span>
                  </Link>
                </div>
              </div>

              {/* Column 4 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-700">
                  Services & Accessories
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/products/filter-media-salt-bags"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Filter Media & Salt Bags
                    </span>
                  </Link>
                  <Link
                    href="/products/water-testing-instrument"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Water Testing Instrument
                    </span>
                  </Link>
                  <Link
                    href="/products/water-analysis-consultation"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Water Analysis & Consultation
                    </span>
                  </Link>
                  <Link
                    href="/products/water-filter-service-amc"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Water Filter Service & AMC
                    </span>
                  </Link>
                  <Link
                    href="/products/water-tank-cleaning"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-cyan-700">
                      Water Tank Cleaning & Disinfection
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <ProductsSection /> */}
      </main>

      <Footer />
    </div>
  );
}
