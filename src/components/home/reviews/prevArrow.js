
import Image from "next/image";
import prevblack from '/public/assect/image/previous.svg';
import prevWhite from '/public/assect/image/prevWhite.svg';
import { useSelector } from "react-redux";

function PrevArrow(props) {
    const { className, style, onClick } = props;
    const { theme } = useSelector((state) => state.theme);
    return (
        <div
            className={`${className} review__arrow`}
            style={{ ...style }}
            onClick={onClick}
        >
            <div className="left-arrow w-[45px] h-[45px] flex items-center justify-center rounded-full dark:bg-sky-500 bg-[#748E63] ">
                <Image
                    width={26}
                    height={26}
                    src={theme === 'dark' ? prevblack : prevWhite}
                    alt="left arrow"
                />
            </div>
        </div>
    );
}

export default PrevArrow;
