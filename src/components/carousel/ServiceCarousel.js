"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function ServiceCarousel({ imgData }) {
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

                
                {imgData.map((icon, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="h-auto w-full rounded-b-xl text-xl"
                            src={`/assect/service/${icon}`}
                            alt="Photoeditspecialist"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
