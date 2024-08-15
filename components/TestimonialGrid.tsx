
// Masonry grid of testimonial cards. Each card should display a quote, avatar, and name.


import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "This product changed my life! I can't imagine going back to how things were before.",
    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQniilkAaUkRBXcLbnqUsePgRVPBMjx_vMICyCwr2NJ5uQJymdh",
    name: "Jane Doe"
  },
  {
    id: 2,
    quote: "Absolutely fantastic service. The team went above and beyond to meet my needs.",
    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQniilkAaUkRBXcLbnqUsePgRVPBMjx_vMICyCwr2NJ5uQJymdh",
    name: "John Smith"
  },
  {
    id: 3,
    quote: "I'm impressed with the quality and attention to detail. Highly recommended!",
    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQniilkAaUkRBXcLbnqUsePgRVPBMjx_vMICyCwr2NJ5uQJymdh",
    name: "Alice Johnson"
  },
  {
    id: 4,
    quote: "The best in the business. Their expertise is unmatched.",
    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQniilkAaUkRBXcLbnqUsePgRVPBMjx_vMICyCwr2NJ5uQJymdh",
    name: "Bob Williams"
  },
  {
    id: 5,
    quote: "Exceptional customer support. They were always there when I needed help.",
    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQniilkAaUkRBXcLbnqUsePgRVPBMjx_vMICyCwr2NJ5uQJymdh",
    name: "Emily Brown"
  }
];

const TestimonialCard = ({ quote, avatar, name }) => (
  <div className="nes-container is-dark with-title p-4 mb-4">
    <p className="title">{name}</p>
    <div className="flex items-center mb-4">
      <img src={avatar} alt={name} width={48} height={48} className="rounded-full mr-4" />
      <p className="text-sm">{quote}</p>
    </div>
  </div>
);

const TestimonialGrid = () => {
  return (
    <div className="nes-container with-title is-dark max-w-4xl mx-auto mt-10">
      <p className="title">What Our Customers Say</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;
