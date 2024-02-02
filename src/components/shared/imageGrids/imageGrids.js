import Image from "next/image";

// Images
import aboutHero1 from '/public/assect/image/about/about1.png'
import aboutHero4 from '/public/assect/image/about/about2.png'
import aboutHero2 from '/public/assect/image/about/about3.PNG'
import aboutHero3 from '/public/assect/image/about/about4.png'
import aboutHero5 from '/public/assect/image/about/about5.png'
import aboutHero6 from '/public/assect/image/about/about6.png'
import aboutHero8 from '/public/assect/image/about/about7.png'
import aboutHero9 from '/public/assect/image/about/about8.png'

export default function ImageGrids() {
    return (
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
    )
}
