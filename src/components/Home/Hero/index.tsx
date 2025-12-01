"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
    return (
        <section className="relative w-full h-[85vh] overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-full"
            >

                {/* ================= SLIDE 1 ================= */}
                <SwiperSlide>
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                        style={{ backgroundImage: "url('/images/banner/hot-air-balloon-realistic-dreamscape.jpg')" }}
                    >
                        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-center px-4">
                            <h1 className="text-white text-5xl font-bold mb-5 drop-shadow-lg">
                                User Experience Conference
                            </h1>

                            <p className="text-white text-xl mb-8 max-w-2xl drop-shadow-lg">
                                Join the next generation event where ideas meet innovation.
                            </p>

                            <Link
                                href="/"
                                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                            >
                                Get Tickets
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* ================= SLIDE 2 ================= */}
                <SwiperSlide>
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                        style={{ backgroundImage: "url('/images/banner/hot-air-balloon-realistic-dreamscape.jpg')" }}
                    >
                        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-center px-4">
                            <h1 className="text-white text-5xl font-bold mb-5 drop-shadow-lg">
                                Creative Design Workshop
                            </h1>

                            <p className="text-white text-xl mb-8 max-w-2xl drop-shadow-lg">
                                Learn design fundamentals from top industry experts.
                            </p>

                            <Link
                                href="/"
                                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Hero;
