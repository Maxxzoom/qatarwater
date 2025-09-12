"use client";

import { useState } from "react";
import { Phone, Mail, Facebook, Twitter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function ArticlesPage() {
  const articles = [
    "RO Water Purifier & Filter Supplier Oman-Muscat Water",
    "Residential Water Filter Oman - Muscat Water",
    "RO Water Filter Supply In Oman - Muscat Water",
    "Water Purification Company In Oman - Muscat Water",
    "RO Water Filter Cartridge Oman - Muscat Water",
    "Reverse Osmosis Water Filter Under Sink Oman, Muscat Water",
    "Reverse Osmosis Water Purifier Under Sink Oman, Muscat Water",
    "Water Treatment Company In Oman - Muscat Water",
    "Water Purifier Oman-Water Purifier Price In Oman - Muscat Water",
    "Water Treatment Supplier Oman - Muscat Water",
    "Water Filter Supplier Oman - Muscat Water",
    "Leading Water Filter Company In Oman - Muscat Water",
    "Drinking Water Filter Machine Installation Company In Oman - Muscat Water",
    "Water Purifier Installation & Commissioning Oman - Muscat Water",
    "Water Purifier Maintenance Company In Oman - Muscat Water",
    "Water purifier service in oman - muscat water",
    "Water Purifier Seller In Oman - Muscat Water",
    "Water Filter & Purifier System Supplier In Oman - Muscat Water",
    "Water Filter / Purifier Shop In Oman - Muscat Water",
    "RO Water Filter System 200 Gpd Supplier In Oman-Muscat Water",
    "RO Water Purifier 200 Gpd Installation & Service In Oman-Muscat Water",
    "400 GPD RO Water System Supplier In Oman-Muscat Water",
    "400 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "600 GPD RO Water System Supplier In Oman-Muscat Water",
    "600 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "800 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "1000 GPD RO Water System Supplier In Oman-Muscat Water",
    "1000 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "2000 GPD RO Water System Supplier In Oman - Muscat Water",
    "2000 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "3000 GPD RO Water System Supplier In Oman-Muscat Water",
    "3000 GPD RO Water Purifier Installation & Service In Oman-Muscat Water",
    "Big Blue Water Filter System Oman - Muscat Water",
    "Big Blue Water Filter Oman - Muscat Water",
    'Big Blue 20" Water Filter Oman - Muscat Water',
    'Three Stage Big Blue 20" Water Filter Oman- Muscat Water',
    "Triple Jumbo Filter For Whole House Oman - Muscat Water",
    "Chlorine Removal Filter For House Oman - Muscat Water",
    "Building Water Filter Oman - Muscat Water",
    "Whole House Water Filter In Oman - Muscat Water",
    "Jumbo Central Water Filter Oman - Muscat Water",
    "Jumbo Triple Water Filter Oman -Muscat Water",
    "Jumbo Filtration System Oman- Muscat Water",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filtered articles based on search term
  const filteredArticles = articles.filter((article) =>
    article.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <Header />

      {/* Page Header */}
      <div className="bg-slate-800 text-white px-4 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Articles</h1>
          <p className="text-xl text-gray-300">
            Water Treatment Accessories, Water Treatment Components, Supply
          </p>
        </div>
      </div>

      {/* Articles Content */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                    {article}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive information about water treatment solutions,
                    installation services, and maintenance for various capacity
                    systems in Oman.
                  </p>
                  <Button
                    variant="outline"
                    className="text-cyan-600 border-cyan-600 hover:bg-cyan-50 bg-transparent text-sm"
                  >
                    Read More
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">
                No articles found.
              </p>
            )}
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Article Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-cyan-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-gray-800 mb-2">RO Systems</h3>
                <p className="text-sm text-gray-600">
                  Reverse Osmosis water purification systems and components
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-gray-800 mb-2">Water Filters</h3>
                <p className="text-sm text-gray-600">
                  Various filtration systems for residential and commercial use
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-gray-800 mb-2">
                  Installation & Service
                </h3>
                <p className="text-sm text-gray-600">
                  Professional installation and maintenance services
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-gray-800 mb-2">
                  Industrial Solutions
                </h3>
                <p className="text-sm text-gray-600">
                  Large capacity systems for industrial applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
