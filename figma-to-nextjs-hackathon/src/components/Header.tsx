'use client';

import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';
import clsx from 'clsx';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Header top part */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8 border-b border-gray-300">
        {/* Logo - Left */}

        <div className="text-3xl text-gray-800 md:ml-0 md:order-2 order-1"><Link href={"/"}>Avion</Link></div>

        {/* Search Icon and Hamburger - Right on Mobile */}
        <div className="md:order-1 order-2 flex items-center space-x-4">
          <FiSearch className="w-6 h-6 text-gray-600 cursor-pointer md:mr-4" />
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <HiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Cart and Profile Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 order-3">
          <Link href={"/cart"}><FiShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" /></Link>
          <FiUser className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Navigation Links - Desktop */}
      <ul className="hidden md:flex justify-center space-x-4 py-4 items-center gap-4">
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Plant Pots</Link></li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Ceramics</Link></li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Tables</Link></li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Chairs</Link></li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Crockey</Link></li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Tableware</Link></li>
        <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Cutlery</Link></li>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <div
          className={clsx(
            "fixed top-0 right-0 w-3/4 h-full bg-gray-100 border-l border-gray-300 transform transition-transform duration-300 ease-in-out z-50",
            { "translate-x-full": !isMobileMenuOpen, "translate-x-0": isMobileMenuOpen }
          )}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-600 z-50"
          >
            <HiX className="w-6 h-6" />
          </button>
          <ul className="flex flex-col items-start px-4 py-8 space-y-4">
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Plant Pots</Link></li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Ceramics</Link></li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Tables</Link></li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Chairs</Link></li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Crockey</Link></li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Tableware</Link></li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer"><Link href={"/products"}>Cutlery</Link></li>
            <li className="flex items-center space-x-4 pt-4 border-t border-gray-300">
              <Link href={"/cart"}><FiShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" /></Link>
              <FiUser className="w-6 h-6 text-gray-600 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
