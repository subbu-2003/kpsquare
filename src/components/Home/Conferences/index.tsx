"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Conferences = () => {
  const products = [
  {
    id: 1,
    title: "Designing",
    desc: "Adyar Students Xerox offers top-notch printing, photocopying, and in-house design services. Our expert team transforms ideas into professional designs with precision and creativity.",
    image: "/images/services/Designing.jpg",
  },
  {
    id: 2,
    title: "Rexine Hard Binding and Gold Embossing",
    desc: "Premium rexine hard binding services combining a glossy finish with luxurious gold embossing, creating books that are both elegant and durable.",
    image: "/images/services/Hard Binding and Gold.jpg",
  },
  {
    id: 3,
    title: "Hard Binding Matt Lamination",
    desc: "Professional and durable hard binding combined with matt lamination, offering a refined finish and long-lasting protection for your documents.",
    image: "/images/services/Hard Binding Matt Lamination.avif",
  },
  {
    id: 4,
    title: "Metal Spiral Binding",
    desc: "High-quality metal spiral binding designed to enhance both functionality and appearance, ideal for reports, manuals, and notebooks.",
    image: "/images/services/Metal Spiral Binding.avif",
  },
  {
    id: 5,
    title: "Hard Binding Gloss Lamination",
    desc: "Exceptional hard binding with gloss lamination that ensures your books look professional while providing superior protection and shine.",
    image: "/images/services/Hard Binding Gloss Lamination.avif",
  },
  {
    id: 6,
    title: "Wire-O Binding",
    desc: "A sleek and durable binding solution commonly used for presentations and submissions, offering easy page turning and a polished look.",
    image: "/images/services/Wire-O Binding.avif",
  },
  {
    id: 7,
    title: "Hard Binding",
    desc: "A classic hard binding solution for long-lasting documents, providing strength, protection, and a professional appearance.",
    image: "/images/services/Hard Binding.jpg",
  },
];

  return (
    <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-center mb-10">
    Best <span className="text-sky-500">Selling</span>
  </h2>

      </div>

      <div className="relative px-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={900}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((item) => (
      <SwiperSlide key={item.id}>
  <div
    className="bg-white rounded-2xl shadow-md
               hover:shadow-xl transition-all duration-300
               h-[500px] flex flex-col overflow-hidden"
  >
    {/* Image Section */}
    <div className="relative w-full h-[360px] bg-gray-50 flex items-center justify-center">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-contain p-6"
        priority
      />
    </div>

    {/* Content Section */}
    <div className="flex-1 flex flex-col p-5">
      <h4 className="text-lg font-semibold text-gray-900">
        {item.title}
      </h4>

      <p className="text-gray-500 text-sm mt-2 line-clamp-2 leading-relaxed">
        {item.desc}
      </p>

      {/* CTA */}
      <div className="mt-auto pt-5">
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg
                     font-medium text-sm
                     hover:bg-blue-600 transition"
        >
          Bind Now
        </button>
      </div>
    </div>
  </div>
</SwiperSlide>



          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Conferences;
