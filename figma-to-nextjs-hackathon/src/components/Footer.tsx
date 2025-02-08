"use client"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

function Footer() {

  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Desktop Layout: 1 row for all sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start">
          {/* Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-4 mt-2">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-gray-300">New arrivals</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Best sellers</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Recently viewed</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Popular this week</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">All products</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4 mt-2">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-gray-300">Crockery</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Furniture</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Homeware</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Plant pots</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Chairs</Link></li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4 mt-2">Our Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-300">About us</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Vacancies</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Contact us</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Privacy</Link></li>
              <li><Link href="/products" className="hover:text-gray-300">Returns policy</Link></li>
            </ul>
          </div>

          {/* Join Mailing List */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl font-semibold mb-4">Join Our Mailing List</h3>
            <form className="flex flex-wrap">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 px-4 py-2 text-white bg-slate-600"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-950 px-4 py-2 hover:bg-blue-800 hover:text-white transition duration-300"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
        {/* Horizontal line */}
        < div className="my-8 border-t border-gray-600" ></div >

        {/* Footer Bottom */}
        < div className="flex flex-wrap justify-between items-center" >
          {/* Copyright */}
          < div className="text-sm text-gray-400 mb-4 sm:mb-0" >
            <p>&copy; 2022 Avion LTD</p>
          </div >

          {/* Social Icons - Hidden on Mobile */}
          < div className="hidden sm:flex space-x-4" >
            <Link href="https://www.linkedin.com/in/MYousuf" className="hover:text-gray-300">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://www.facebook.com/MuhammadYousufMarfaniMYM" className="hover:text-gray-300">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/myousuf_575" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </Link>
            <Link href="https://www.salesforce.com" className="hover:text-gray-300">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://www.pinterest.com" className="hover:text-gray-300">
              <FaPinterest size={20} />
            </Link>
          </div >
        </div >
      </div >
    </footer >
  );
}

export default Footer;
