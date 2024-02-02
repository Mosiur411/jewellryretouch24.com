import { toggleTheme } from "@/features/theme/themeSlice ";
import { useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { PiMoonStars } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

export default function Mode() {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);


    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark"); 
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
    };

    return (
        <div>
            {theme === "dark" ? (
                <MdOutlineLightMode
                    id="darkmodelight-btn"
                    className="cursor-pointer text-[23px] text-white hover:text-[#F9B572]"
                    onClick={toggleThemeHandler}
                />
            ) : (
                <PiMoonStars
                    id="darkmodelight-btn"
                    className="cursor-pointer text-[24px] text-black hover:text-[#748E63]"
                    onClick={toggleThemeHandler}
                />
            )}
        </div>
    );
}
