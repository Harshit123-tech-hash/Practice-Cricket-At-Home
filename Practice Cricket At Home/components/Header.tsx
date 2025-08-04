
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <i className="ri-cricket-line text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold text-green-800" style={{fontFamily: 'Pacifico, serif'}}>CricketHome</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap cursor-pointer">Home</Link>
            <Link href="/guides" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap cursor-pointer">Practice Guides</Link>
            <Link href="/drills" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap cursor-pointer">Training Drills</Link>
            <Link href="/equipment" className="text-gray-700 hover:text-green-600 font-medium whitespace-nowrap cursor-pointer">Equipment</Link>
            <Link href="/premium" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 font-medium whitespace-nowrap cursor-pointer">Go Premium</Link>
          </nav>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium cursor-pointer">Home</Link>
              <Link href="/guides" className="text-gray-700 hover:text-green-600 font-medium cursor-pointer">Practice Guides</Link>
              <Link href="/drills" className="text-gray-700 hover:text-green-600 font-medium cursor-pointer">Training Drills</Link>
              <Link href="/equipment" className="text-gray-700 hover:text-green-600 font-medium cursor-pointer">Equipment</Link>
              <Link href="/premium" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 font-medium text-center cursor-pointer">Go Premium</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
