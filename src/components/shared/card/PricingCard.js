"use client"

import { useSelector } from "react-redux";

export default function PricingCard({ children, description, price, type, buttonText, active, }) {
    const { theme } = useSelector((state) => state.theme);
    return (
        <>
            <div className="w-full  ">
                <div className="relative z-[-1] lg:mb-10 overflow-hidden rounded-[10px] border dark:border-[#4d4b40] dark:hover:border-[#96906c]  bg-white dark:bg-[#1c1c1c] p-7 ">
                    <span className="mb-3 block text-lg font-semibold  dark:text-white">
                        {type}
                    </span>
                    <h2 className="mb-3 text-[42px] font-bold text-[#748E63] dark:text-[#F9B572]">
                        {price}
                    </h2>
                    <p className="mb-4 border-b pb-8 text-base  border-[#748E63] dark:border-[#F9B572] dark:text-dark-6  dark:text-white">
                        {description}
                    </p>
                    <div className="mb-9 flex flex-col gap-[14px] ">{children}</div>
                    <a
                        href="/#"
                        className={` ${active
                            ? "block w-full rounded-md border border-[#748E63] bg-[#748E63] dark:border-[#F9B572] dark:bg-[#F9B572] p-3 text-center text-base dark:text-black font-medium text-white transition hover:bg-opacity-90"
                            : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-[#748E63]  hover:dark:border-[#F9B572] hover:bg-primary hover:text-[#748E63] dark:hover:text-[#F9B572] dark:border-dark-3  dark:text-white"
                            } `}
                    >
                        {buttonText}
                    </a>
                    <div>
                        <span className="absolute right-0 top-7 z-[-1]">
                            <svg
                                width={77}
                                height={172}
                                viewBox="0 0 77 172"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx={86} cy={86} r={86} fill={`${theme === "light" ? "#748e630f" : "#f9b5721f"}`} />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1={86}
                                        y1={0}
                                        x2={86}
                                        y2={172}
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#748E63" stopOpacity="0.09" />
                                        <stop offset={1} stopColor="#748E63" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="absolute right-4 top-4 z-[-1]">
                            <svg
                                width={41}
                                height={89}
                                viewBox="0 0 41 89"
                                fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="38.9138"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 87.4849)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="38.9138"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 74.9871)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="38.9138"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 62.4892)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="38.9138"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 38.3457)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="38.9138"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 13.634)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="38.9138"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 50.2754)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="38.9138"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 26.1319)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="38.9138"
                                    cy="1.42021"
                                    r="1.42021"
                                    transform="rotate(180 38.9138 1.42021)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="26.4157"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 87.4849)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="26.4157"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 74.9871)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="26.4157"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 62.4892)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="26.4157"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 38.3457)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="26.4157"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 13.634)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="26.4157"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 50.2754)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="26.4157"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 26.1319)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="26.4157"
                                    cy="1.4202"
                                    r="1.42021"
                                    transform="rotate(180 26.4157 1.4202)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="13.9177"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 87.4849)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="13.9177"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 74.9871)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="13.9177"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 62.4892)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="13.9177"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 38.3457)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="13.9177"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 13.634)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="13.9177"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 50.2754)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="13.9177"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 26.1319)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="13.9177"
                                    cy="1.42019"
                                    r="1.42021"
                                    transform="rotate(180 13.9177 1.42019)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="1.41963"
                                    cy="87.4849"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 87.4849)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="1.41963"
                                    cy="74.9871"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 74.9871)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="1.41963"
                                    cy="62.4892"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 62.4892)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="1.41963"
                                    cy="38.3457"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 38.3457)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="1.41963"
                                    cy="13.634"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 13.634)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="1.41963"
                                    cy="50.2754"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 50.2754)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="1.41963"
                                    cy="26.1319"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 26.1319)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                                <circle
                                    cx="1.41963"
                                    cy="1.4202"
                                    r="1.42021"
                                    transform="rotate(180 1.41963 1.4202)"
                                    fill={`${theme === "light" ? "#748E63" : "#F9B572"}`}
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};