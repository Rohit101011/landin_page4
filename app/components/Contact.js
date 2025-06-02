'use client';

export default function Contact() {
  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Contact Us</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-gray-800">Get in Touch</h3>
                <div className="space-y-6">
                  <p className="flex items-center text-gray-600 text-lg">
                    <span className="mr-4 text-2xl">📍</span> Fredericksburg, VA
                  </p>
                  <p className="flex items-center text-gray-600 text-lg">
                    <span className="mr-4 text-2xl">📞</span> +1 (571) 221-1835
                  </p>
                  <p className="flex items-center text-gray-600 text-lg">
                    <span className="mr-4 text-2xl">✉️</span> info@spoiledbeauties.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-8 text-gray-800">Book an Appointment</h3>
                <button className="btn-primary w-full">
                  Book Now
                </button>
                <p className="text-gray-500 text-sm mt-4 text-center">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 