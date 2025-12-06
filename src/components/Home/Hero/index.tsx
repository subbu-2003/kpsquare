"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
    return (
    <section className="relative w-full h-[85vh] mt-16 overflow-hidden">
    <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
    >

        {/* ================= SLIDE 1 ================= */}
        <SwiperSlide>
            <div className="h-full w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10 gap-6">

                {/* LEFT IMAGE BOX */}
                <div className="w-full md:w-2/3 bg-white rounded-3xl p-5 shadow-lg">
                    <img
                        src="/images/banner/hot-air-balloon-realistic-dreamscape.jpg"
                        alt="Order Prints Online"
                        className="w-full h-full object-contain rounded-2xl"
                    />
                </div>

                {/* RIGHT TEXT CARD */}
                <div className="w-full md:w-1/3 flex items-center justify-center">
                    <div className="bg-transparent backdrop-blur-lg shadow-md rounded-2xl px-10 py-8 text-start w-full md:w-auto">
                        <h2 className="text-2xl font-semibold mb-2">Print Quick</h2>
                        <button className="text-xl mt-3 flex items-center gap-2 justify-center">
                            →
                        </button>
                    </div>
                </div>

            </div>
        </SwiperSlide>

        {/* ================= SLIDE 2 ================= */}
        <SwiperSlide>
            <div className="h-full w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10 gap-6">

                <div className="w-full md:w-2/3  bg-white rounded-3xl p-5 shadow-lg">
                    <img
                        src="/images/banner/hot-air-balloon-realistic-dreamscape.jpg"
                        alt="Order Prints Online"
                        className="w-full h-full object-contain rounded-2xl"
                    />
                </div>

                <div className="w-full md:w-1/3 flex items-center justify-center">
                    <div className="bg-transparent backdrop-blur-lg shadow-md rounded-2xl px-10 py-8 text-start w-full md:w-auto">
                        <h2 className="text-2xl font-semibold mb-2">Print Quick</h2>
                        <button className="text-xl mt-3 flex items-center gap-2 justify-center">
                            →
                        </button>
                    </div>
                </div>

            </div>
        </SwiperSlide>

    </Swiper>
</section>


    );
};

export default Hero;
