"use client";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components

import SectionHeader from "@/components/shared/sectionHeader/page";
import ReviewCard from "@/components/shared/card/reviewCard";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";


export default function Reviews() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const reviews = [
        {
            name: "Emily Johnson",
            designation: "Graphic Designer",
            image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            testimonial: "Incredible service! The attention to detail and creativity exceeded my expectations. My go-to for photo editing. Thank you for elevating my work!"
        },
        {
            name: "Alex Turner",
            designation: "Photographer",
            image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            testimonial: "Outstanding work! Swift turnaround, flawless edits. As a photographer, I appreciate the dedication to perfection. Highly recommended for professional photo enhancements."
        },
        {
            name: "Sophie Miller",
            designation: "Marketing Manager",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            testimonial: "Impressed with the quality and precision. The edits transformed our product images. Great communication and timely delivery. Will definitely use the service again!"
        },
        {
            name: "David Anderson",
            designation: "Creative Director",
            image: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            testimonial: "A game-changer in photo retouching! Exquisite results, attentive team, and seamless process. Our visuals have never looked better. Exceptional service all around."
        },
        {
            name: "Amanda White",
            designation: "E-commerce Entrepreneur",
            image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            testimonial: "Boosted my online store's appeal! The shadow service added depth, and the team's professionalism stood out. An invaluable resource for enhancing product visuals. Highly recommended!"
        }
    ];



    return (
        <div className=" px-4 sm:px-10 mt-20 ">
            <SectionHeader lable='Testimonials' title='Our Customer Say About Us ' shotDetails='Exceptional service! Transformative edits brought my photos to life. Professionalism, precision, and prompt delivery. Highly recommend for a flawless visual experience!' />
            <div className="review__slider ">
                <Slider {...settings}>
                    {reviews.map(data => <ReviewCard key={data} data={data} />)}
                </Slider>
            </div>
        </div>
    );
};
