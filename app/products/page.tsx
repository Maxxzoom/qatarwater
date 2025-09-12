import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
// import ProductsSection from "@/components/products-section"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#1e40af] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-[#0ea5e9] max-w-3xl mx-auto">
              High-quality water treatment equipment and systems for residential, commercial, and industrial
              applications
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column 1 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#1e40af] mb-4">Residential Systems</h3>
                <div className="space-y-3">
                  <Link
                    href="/products/domestic-water-purifier"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Domestic Water Purifier</span>
                  </Link>
                  <Link
                    href="/products/jumbo-water-filters"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Jumbo Water Filters</span>
                  </Link>
                  <Link
                    href="/products/jumbo-water-filters-uv"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Jumbo Water Filters With U.V. Sterilizer</span>
                  </Link>
                  <Link
                    href="/products/water-dispenser"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Water Dispenser</span>
                  </Link>
                  <Link
                    href="/products/filter-cartridges"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">
                      Filter Cartridges Spares Parts & Filter Bags
                    </span>
                  </Link>
                  <Link
                    href="/products/shower-filter"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Shower Filter</span>
                  </Link>
                  <Link
                    href="/products/water-softener-residential"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Water Softener For Residential</span>
                  </Link>
                  <Link
                    href="/products/water-softener-commercial"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">
                      Water Softener For Commercial & Industrial
                    </span>
                  </Link>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#1e40af] mb-4">Industrial Systems</h3>
                <div className="space-y-3">
                  <Link
                    href="/products/hydro-pneumatic-system"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Hydro Pneumatic System</span>
                  </Link>
                  <Link
                    href="/products/ozonation-system"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Ozonation System</span>
                  </Link>
                  <Link
                    href="/products/chlorine-dosing-system"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Chlorine Dosing System</span>
                  </Link>
                  <Link
                    href="/products/multimedia-filter-residential"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Multimedia Filter For Residential</span>
                  </Link>
                  <Link
                    href="/products/multimedia-filter-commercial"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">
                      Multimedia Filter For Commercial & Industrial
                    </span>
                  </Link>
                  <Link
                    href="/products/activated-carbon-filter"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Activated carbon Filter</span>
                  </Link>
                  <Link
                    href="/products/reverse-osmosis-system"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Reverse Osmosis System 200 GPD & 400 GPD</span>
                  </Link>
                  <Link
                    href="/products/brackish-water-ro"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Brackish Water Reverse Osmosis System</span>
                  </Link>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#1e40af] mb-4">Advanced Treatment</h3>
                <div className="space-y-3">
                  <Link
                    href="/products/sea-water-ro"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Sea Water Reverse Osmosis System</span>
                  </Link>
                  <Link
                    href="/products/grey-green-water-treatment"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Grey+Green Water Treatment System</span>
                  </Link>
                  <Link
                    href="/products/demineralised-plants"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Demineralised Plants & Mixed Bed Plants</span>
                  </Link>
                  <Link
                    href="/products/uf-ultra-filteration"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">UF Ultra Filteration Water System</span>
                  </Link>
                  <Link
                    href="/products/micron-cartridge-filter"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Micron Cartridge Filter</span>
                  </Link>
                  <Link
                    href="/products/ultra-violet-sterilizer"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Ultra Voilet Sterilizer</span>
                  </Link>
                  <Link
                    href="/products/micro-filter"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Micro Filter</span>
                  </Link>
                  <Link
                    href="/products/water-treatment-accessories"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Water Treatment Accessories & Components</span>
                  </Link>
                </div>
              </div>

              {/* Column 4 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#1e40af] mb-4">Services & Accessories</h3>
                <div className="space-y-3">
                  <Link
                    href="/products/filter-media-salt-bags"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Filter Media & Salt Bags</span>
                  </Link>
                  <Link
                    href="/products/water-testing-instrument"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Water Testing Instrument</span>
                  </Link>
                  <Link
                    href="/products/water-analysis-consultation"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Water Analysis & Consultation</span>
                  </Link>
                  <Link
                    href="/products/water-filter-service-amc"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Water Filter Service & AMC</span>
                  </Link>
                  <Link
                    href="/products/water-tank-cleaning"
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-700 hover:text-[#1e40af]">Water Tank Cleaning & Disinfection</span>
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
  )
}
