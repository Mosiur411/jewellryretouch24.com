import Image from 'next/image';

export default function PortfolioImageContainer() {
    const images = [
        '/assect/image/portfolio/1.jpg',
        '/assect/image/portfolio/2.jpg',
        '/assect/image/portfolio/4.jpg',
        '/assect/image/portfolio/5.jpg',
        '/assect/image/portfolio/6.jpg',
        '/assect/image/portfolio/7.jpg',
        '/assect/image/portfolio/8.jpg',
        '/assect/image/portfolio/9.jpg',
        '/assect/image/portfolio/10.jpg',
        '/assect/image/portfolio/11.jpg',
        '/assect/image/portfolio/12.jpg',
        '/assect/image/portfolio/13.jpg',
        '/assect/image/portfolio/14.jpg',
        '/assect/image/portfolio/15.jpg',
        '/assect/image/portfolio/16.jpg',
        '/assect/image/portfolio/17.jpg',
        '/assect/image/portfolio/18.jpg',
        '/assect/image/portfolio/19.jpg',
        '/assect/image/portfolio/20.jpg',
        '/assect/image/portfolio/21.jpg',
        '/assect/image/portfolio/22.jpg',
        '/assect/image/portfolio/23.jpg',
        '/assect/image/portfolio/24.jpg',
        '/assect/image/portfolio/25.jpg',
        '/assect/image/portfolio/26.jpg',
        '/assect/image/portfolio/27.jpg',
    ];

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 md:gap-10 gap-5">
            {images.map((src, index) => (
                <Image
                    key={index}
                    className="rounded-lg"
                    src={src}
                    alt={`Portfolio Image ${index + 1}`}
                    width={300}
                    height={320} 
                />
            ))}
        </div>
    );
}
