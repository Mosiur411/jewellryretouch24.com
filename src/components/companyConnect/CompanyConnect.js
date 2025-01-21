

import Image from "next/image";
import img1 from '/public/assect/image/trusted/1.png'
import img2 from '/public/assect/image/trusted/2.png'
import img4 from '/public/assect/image/trusted/4.png'
import img5 from '/public/assect/image/trusted/5.png'
import img6 from '/public/assect/image/trusted/7.png'
import img7 from '/public/assect/image/trusted/8.png'


const CompanyConnect = () => {
  const logos = [
    { src: img1},
    { src: img2},
    { src: img4},
    { src: img5},
    { src: img6},
    { src: img7},
   
  ];



  return (
    <div className=" py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Trusted by Leading Companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
        justify-center 
        gap-6 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150} // Customize width
                height={100} // Customize height
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyConnect;
