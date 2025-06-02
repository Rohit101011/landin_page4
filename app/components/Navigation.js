'use client';

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600">Spoiled Beauties</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-pink-600">Home</a>
            <a href="#services" className="text-gray-600 hover:text-pink-600">Services</a>
            <a href="#about" className="text-gray-600 hover:text-pink-600">About</a>
            <a href="#reviews" className="text-gray-600 hover:text-pink-600">Reviews</a>
            <a href="#contact" className="text-gray-600 hover:text-pink-600">Contact</a>
          </div>
          <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
} 