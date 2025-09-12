import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-slate-800 text-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">
                Muscat Water Treatment Trading & Contracting
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Flat No. B1 1104, Sr. No. 28/2A, Shakuntala Kanade Park, Katraj
                Saswad Road, Near Rajlakshmi Furniture, Undri, VTC: Autadwadi
                Handewadi, PO: Phursungi, District: Pune, PIN Code: 412308.
              </p>
              <div className="text-gray-300 text-sm space-y-1">
                <p>
                  <strong>Address:</strong> Muscat, Sultanate of Oman
                </p>
                <p>
                  <strong>Phone:</strong> +91 9604338704
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
                <p>
                  Flat No. B1 1104, Sr. No. 28/2A, Shakuntala Kanade Park,
                  Katraj Saswad Road, Near Rajlakshmi Furniture, Undri, VTC:
                  Autadwadi Handewadi, PO: Phursungi, District: Pune, State:
                  Maharashtra, PIN Code: 412308.
                </p>
                <p className="mt-4">
                  <strong>Contact Information:</strong>
                </p>
                <p>Tel: +91 9604338704</p>
                <p>Email: dummy@gmail.com</p>
                <p className="mt-4">
                  <strong>Service Areas:</strong>
                </p>
                <p>India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 TYSON. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-orange-600 transition-colors">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm font-medium">
            Any Question? We are Online... Ask Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
