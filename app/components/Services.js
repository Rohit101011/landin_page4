'use client';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Haircuts & Styling",
      description: "Professional cuts and styling for all hair types",
      image: "https://i.ytimg.com/vi/QCQcIWIg-Mg/maxresdefault.jpg"
    },
    {
      title: "Color & Highlights",
      description: "Expert color services and custom highlights",
      image: "https://i.pinimg.com/originals/8b/9e/de/8b9ede6398ba9cc8fad70f91027b5403.png"
    },
    {
      title: "Treatments",
      description: "Luxurious hair treatments and deep conditioning",
      image: "https://www.spoiledlaser.com/wp-content/uploads/2024/09/laser-hair-removal-treatment-3-1024x574.jpg"
    }
  ];

  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="hover-card bg-white rounded-2xl overflow-hidden">
              <div className="relative h-72">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="btn-secondary mt-6 w-full">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 