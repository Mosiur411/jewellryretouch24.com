"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
// Images
import service1 from '/public/assect/service/service1.jpg'
import service2 from '/public/assect/service/service2.jpg'
import service3 from '/public/assect/service/service3.jpg'
import service4 from '/public/assect/service/service4.jpg'
import service5 from '/public/assect/service/service5.jpg'

export default function ImageGrids() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        service1, service2, service3, service4, service5
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <Image data-aos="fade-right" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`}
                className='w-100 h-[70vh]'
            />
        </>

    )
}

/*
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:px-20 md:px-0 px-0">
            <div className="grid gap-4  order-last md:order-none">
                <div className="max-w-full rounded-lg md:block hidden"></div>
                <div>
                    <Image
                        src={aboutHero1}
                        alt="aboutHero1"
                        className=" max-w-full rounded-lg border"

                    />
                </div>
                <div className="max-w-full rounded-lg md:block hidden ">
                </div>
            </div>
            <div className="grid gap-4">
                <div >
                    <Image
                        src={aboutHero2}
                        alt="aboutHero1"
                        className=" rounded-lg py-8 border bg-white"
                    />
                </div>
                <div>
                    <Image
                        src={aboutHero3}
                        alt="aboutHero1"
                        className=" max-w-full rounded-lg border"
                    />
                </div>
                <div className=" max-w-full rounded-lg">
                    <Image
                        src={aboutHero4}
                        alt="aboutHero1"
                        className=" max-w-full rounded-lg border"
                    />
                </div>
            </div>
            <div className="grid gap-4 ">
                <div>
                    <Image
                        src={aboutHero8}
                        alt="aboutHero1"
                        className=" max-w-full rounded-lg border py-7 bg-white"
                    />
                </div>
                <div>
                    <Image
                        src={aboutHero5}
                        alt="aboutHero1"
                        className="max-w-full rounded-lg border"
                    />
                </div>
                <div>
                    <Image
                        src={aboutHero6}
                        alt="aboutHero1"
                        className=" max-w-full rounded-lg border"
                    />
                </div>
            </div>
            <div className="grid gap-4 ">
                <div className=" max-w-full rounded-lg md:block hidden">
                </div>
                <div>
                    <Image
                        src={aboutHero9}
                        alt="aboutHero1"
                        className=" max-w-full rounded-lg border py-12 bg-white"
                    />
                </div>
                <div className="max-w-full rounded-lg md:block hidden">
                </div>
            </div>
        </div>
*/
