'use client'
import Image from "next/image";
import nextBlack from '/public/assect/image/next.svg';
import nextWhite from '/public/assect/image/nextWhite.svg';
import { useSelector } from "react-redux";

function NextArrow(props) {
    const { className, style, onClick } = props;
    const { theme } = useSelector((state) => state.theme);

    return (
        <div
            className={`${className} review__arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <div className="right-arrow w-[45px] h-[45px] flex items-center justify-center rounded-full bg-[#ffa347] hover:bg-[#eb943d]">
                <Image
                    width={26}
                    height={26}
                    src={theme === 'dark' ? nextBlack : nextWhite}
                    alt="right arrow"
                />
            </div>
        </div>
    );
}

export default NextArrow;
