"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation'
import HomeImageCarousel from "../carousel/HomeImageCarousel";

export default function HomeImageContainer() {
  const router = useRouter()

  const brandImage = [
    {
      id: 1,
      title: "Brass Light",
      path: "/services/brass-ligth",
      icon: [
        "https://i.ibb.co/5njWjbT/B171-A-Diamond.png",
        "https://i.ibb.co/MGNybpj/1.jpg",
        "https://i.ibb.co/bPLmBBD/2.jpg",
        "https://i.ibb.co/crMDt0t/3.jpg",
        "https://i.ibb.co/LdtQCzM/4.jpg",
        "https://i.ibb.co/gMcRwwn/5.jpg"
      ]
    },
    {
      id: 2,
      title: "Earring",
      path: "/services/earring",
      icon: [
        "https://i.ibb.co/9Gj22R9/1.jpg",
        "https://i.ibb.co/PWJmsDQ/6.jpg",
        "https://i.ibb.co/YycN9Kk/5.png",
        "https://i.ibb.co/XyMxPYB/4.png",
        "https://i.ibb.co/spSwZ2K/3.jpg",
        "https://i.ibb.co/9Gj22R9/1.jpg"
      ]



    },
    {
      id: 3,
      title: "Necklace",
      path: "/services/necklace",
      icon: ["https://i.ibb.co/DGxbq0X/1.jpg","https://i.ibb.co/TqGbLK3/3.jpg","https://i.ibb.co/GMy1t7y/2.jpg","https://i.ibb.co/FDprXfR/4.jpg"]
    },
    {
      id: 4,
      title: "Ring",
      path: "/services/ring",
      icon: ["https://i.ibb.co/zfYYL5j/4.jpg","https://i.ibb.co/dghs6S5/1.jpg","https://i.ibb.co/6RQnkMM/2.jpg","https://i.ibb.co/rkJQtxb/3.jpg"]
    },
    {
      id: 5,
      title: "Color Changing",
      path: "/services/color-changing",
      icon: [
        "https://i.ibb.co/k1vG7mx/jewelry-retouch-327566957-1211288562819905-8094258979065608777-n886.png",
        "https://i.ibb.co/0MJDkj7/jewelry-retouch-327566957-1211288562819905-8094258979065608777-n333.png",
        "https://i.ibb.co/1RDDv6m/jewelry-retouch-327566957-1211288562819905-8094258979065608777-n33.png"
      ]
    },
    {
      id: 6,
      title: "Watches",
      path: "/services/watche",
      icon: ["https://i.ibb.co/bRdm41V/DSC09009.png"]
    },
    {
      id: 7,
      title: "Other",
      path: "/services/other",
      icon: ["https://i.ibb.co/NV6JDZH/Send-to-Editing-R572-Sapp.png","https://i.ibb.co/SJ66Fxp/RHEA-ROSSO-002-271023.png","https://i.ibb.co/MDm2bRV/13341655-02.png"]
    },
  ];

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-10 gap-5">
      {brandImage?.map((data, index) => (
        <div className="cursor-pointer  border bottom-2 rounded-t-xl" key={index} onClick={() => router.push(data?.path, { scroll: true })}>
          <p className="w-full text-center bg-[#748E63] text-white  rounded-t-xl text-xl font-bold px-2 py-4   cursor-pointer">
            <Link href={""} className="">
              {data?.title}
            </Link>
          </p>
          <HomeImageCarousel imgData={data} />
        </div>
      ))}
    </div>
  );
}
