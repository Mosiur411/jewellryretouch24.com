import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

export default function Social({ collum }) {
    const SocialStyle = `  ${collum ? " border border-[#748E63] dark:border-[#F9B572] text-[#748E63] dark:text-[#F9B572] h-10 w-10 hover:bg-[#748E63] hover:dark:bg-[#F9B572] hover:dark:text-black hover:text-white" : "h-8 w-8 bg-[#748E63] dark:bg-[#F9B572] hover:bg-transparent hover:dark:bg-transparent hover:text-[#748E63]   hover:border hover:border-[#748E63] hover:dark:border-[#F9B572]  hover:dark:text-[#F9B572]"}   flex items-center justify-center rounded-full  cursor-pointer `
    return (
        <div className={`flex ${collum ? "flex-col" : "justify-center items-center"} xl:flex-nowrap flex-wrap  xl:gap-4 gap-3   dark:text-black text-white `}>
            <div className={SocialStyle}><FaFacebook /></div>
            <div className={SocialStyle}><FaLinkedin /></div>
            <div className={SocialStyle}><FaTwitter /></div>
            <div className={SocialStyle}><BiLogoInstagramAlt /></div>
            <div className={SocialStyle}><FaPinterest /></div>
            <div className={SocialStyle}><FaYoutube /></div>
        </div>
    )
}
