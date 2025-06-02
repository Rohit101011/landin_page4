'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Transform Your Look at{' '}
              <span className="text-gradient">Spoiled Beauties</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experience luxury hair care in Fredericksburg, VA. Our expert stylists are ready to make you feel beautiful.
            </p>
            <button className="btn-primary">
              Book Your Appointment
            </button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://static.wixstatic.com/media/915994_4c42dff25da04e60ad915cefca45c43b~mv2.png/v1/fit/w_2500,h_1330,al_c/915994_4c42dff25da04e60ad915cefca45c43b~mv2.png"
                alt="Spoiled Beauties Salon"
                fill
                className="object-cover image-hover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 