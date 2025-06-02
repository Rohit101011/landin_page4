'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gradient mb-2">Spoiled Beauties</h2>
            <p className="text-gray-400">Your Beauty, Our Passion</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <span className="text-2xl">📱</span>
              <span className="ml-2">Facebook</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <span className="text-2xl">📸</span>
              <span className="ml-2">Instagram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <span className="text-2xl">🐦</span>
              <span className="ml-2">Twitter</span>
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Spoiled Beauties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 