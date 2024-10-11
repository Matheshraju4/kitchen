import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Acme Inc.</h2>
          <p className="text-sm text-gray-600 mb-1">123 Business Street</p>
          <p className="text-sm text-gray-600 mb-1">Cityville, State 12345</p>
          <p className="text-sm text-gray-600 mb-1">Phone: (555) 123-4567</p>
          <p className="text-sm text-gray-600">Email: info@acmeinc.com</p>
        </div>
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Link href="/" className="text-sm hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="/services" className="text-sm hover:underline">
            Services
          </Link>
          <Link href="/products" className="text-sm hover:underline">
            Products
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact
          </Link>
        </nav>
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-2 sm:mb-0">
            © {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Developed by{" "}
            <a href="https://example.com" className="hover:underline">
              Your Company Name
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
