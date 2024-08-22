"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function HomeImageCarousel({ imgData }) {
    return (
        <div className="relative">
            <Swiper
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                autoplay={{ delay: 1000, disableOnInteraction: false }} 
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {imgData?.icon.map((icon, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="h-80 w-full rounded-b-xl text-xl"
                            src={icon}
                            alt="jewellryretouch24"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
