'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://www.thespoiledbeauties.com/cdn/shop/articles/Brown_Aesthetic_Simple_Vlog_YouTube_Thumbnail-9_1200x1200.png?v=1674246223"
                alt="Spoiled Beauties Salon Interior"
                fill
                className="object-cover image-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-gradient">About Spoiled Beauties</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Located in the heart of Fredericksburg, VA, Spoiled Beauties is your premier destination for hair care and styling. Our team of experienced professionals is dedicated to providing you with exceptional service and stunning results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover-card">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Location</h3>
                <p className="text-gray-600">Fredericksburg, VA</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover-card">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Contact</h3>
                <p className="text-gray-600">+1 (571) 221-1835</p>
              </div>
            </div>
            <button className="btn-primary w-full md:w-auto">
              Visit Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 