'use client';

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      review: "Amazing experience! The stylists are incredibly talented and professional.",
      rating: 5
    },
    {
      name: "Jessica K.",
      review: "Best salon in Fredericksburg! Always leave feeling beautiful.",
      rating: 5
    },
    {
      name: "Emily R.",
      review: "Love the atmosphere and the results! Highly recommend.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="section-spacing bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="hover-card bg-pink-50/50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{review.review}</p>
              <p className="font-semibold text-gray-800 text-lg">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 