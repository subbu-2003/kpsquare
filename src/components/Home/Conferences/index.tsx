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
      title: "A5 Notepad (Pack Of 8)",
      desc: "papesaur A5 Notepads, 90 Pages Unruled, 100 GSM Paper Quality.",
      price: "₹799 / Page",
      image: "/images/quickpicks/a5.webp",
    },
    {
      id: 2,
      title: "A4 Black Photo Frame",
      desc: "Ideal way to frame your favourite photos (A4, Black).",
      price: "₹499 / 1",
      image: "/images/quickpicks/a4frame.webp",
    },
    {
      id: 3,
      title: "Black 12×18 Size Photo Frame",
      desc: "Perfect for displaying your cherished memories.",
      price: "₹799 / 1",
      image: "/images/quickpicks/blackphoto.webp",
    },
    {
      id: 4,
      title: "Premium A4 Notepads",
      desc: "Smooth 100 GSM paper with 90 unruled pages. (Pack of 4)",
      price: "₹699 / pages",
      image: "/images/quickpicks/a4frame.webp",
    },
     {
      id: 5,
      title: "Color Photo Frame",
      desc: "Smooth 100 GSM paper with 90 unruled pages. (Pack of 4)",
      price: "₹699 / pages",
      image: "/images/quickpicks/colorframe.webp",
    }
  ];

  return (
    <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Best Seller</h2>
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
  <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
    <div className="w-full flex items-center justify-center">
      <Image
        src={item.image}
        alt={item.title}
        width={300}
        height={250}
        className="object-contain rounded-lg"
      />
    </div>

    <h4 className="text-xl font-semibold mt-4 text-black">{item.title}</h4>
    <p className="text-gray-500 text-sm mt-2 h-12">{item.desc}</p>

    <div className="flex justify-between items-center mt-5">
      <button className="bg-blue-500 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition">
        <i className="fa fa-shopping-cart"></i> Buy Now
      </button>

      <span className="text-blue-500 font-semibold">
        {item.price}
      </span>
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
