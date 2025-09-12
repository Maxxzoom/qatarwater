import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function MultimediaFilterResidentialPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#1e40af] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">Multimedia Filter For Residential</h1>
                <p className="text-xl text-[#0ea5e9] mb-8">
                  Multi-layer filtration systems using sand, anthracite, and garnet for effective sediment and turbidity
                  removal.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Get Quote</Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#1e40af] px-8 py-3 bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/residential-multimedia-filter-with-layered-media.jpg"
                  alt="Residential Multimedia Filter"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1e40af] mb-6">Product Features</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0ea5e9] rounded-full mt-2"></div>
                    <span>Multi-layer filtration media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0ea5e9] rounded-full mt-2"></div>
                    <span>Automatic backwash system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0ea5e9] rounded-full mt-2"></div>
                    <span>High dirt holding capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0ea5e9] rounded-full mt-2"></div>
                    <span>Low maintenance operation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0ea5e9] rounded-full mt-2"></div>
                    <span>Compact residential design</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1e40af] mb-6">Specifications</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Flow Rate:</span>
                      <span>5-15 GPM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Tank Size:</span>
                      <span>10" x 54"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Media:</span>
                      <span>Sand, Anthracite, Garnet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Backwash:</span>
                      <span>Automatic Timer</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Warranty:</span>
                      <span>3 Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
