'use client'

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

// Components
import RoundedBtn from '../roundedBtn/page';
import { MdKeyboardArrowDown } from 'react-icons/md';


export default function Menu() {
    const pathname = usePathname();
    const isPathActive = (menuLink) => {
        return pathname === menuLink || pathname.startsWith(`${menuLink}/`);
    };
    const [submenu, setSubmenu] = useState(false)
    const [subItem, setSubItem] = useState(false)
    const [OthersubItem, OthersetSubItem] = useState(false)


    return (
        <div className='md:flex hidden xl:gap-32 gap-3  items-center '>
            <div
                className={`relative  md:flex hidden lg:gap-10  gap-4 items-center  `}
            >
                <Link
                    className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] font-medium ${isPathActive('/') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                    href={'/'}>Home
                </Link>
                <div className='relative'>
                    <Link
                        onMouseEnter={() => setSubmenu(true)}
                        onMouseLeave={() => setSubmenu(false)}
                        className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572]  py-5 font-medium flex items-center gap-1.5  ${isPathActive('/services') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                        href={'/services'}>Services <MdKeyboardArrowDown />
                    </Link>

                    {/* Services submenu */}
                    <div onMouseEnter={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)} className={`absolute rounded  -left-40 lg:w-96 w-80 text-[14px] font-medium bg-red-300 flex flex-col transition-all ease-linear duration-100 ${submenu ? "visible top-[3.8rem] opacity-100" : "invisible top-[4.5rem] opacity-0"} `}>
                        <div className='relative'>
                            <Link
                                onMouseEnter={() => setSubItem(true)}
                                onMouseLeave={() => setSubItem(false)}
                                className='py-3 px-3 w-full bg-gray-100 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#00000094] dark:border-gray-600 border-b flex items-center justify-between '
                                href={'/clippingPathService'}>Jewelry Retouching  Service  <MdKeyboardArrowDown />
                            </Link>

                            {/* For submenu submenus */}
                            <div onMouseEnter={() => setSubItem(true)} onMouseLeave={() => setSubItem(false)} className={`absolute rounded  lg:-right-96 -right-80 lg:w-96 w-80 text-[14px] font-medium bg-red-300 flex flex-col transition-all ease-linear duration-150 ${subItem ? "visible top-0 opacity-100" : "invisible top-[.2rem] opacity-0"} `}>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-200 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/brass-ligth'}>Brass Light 
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-200 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/earring'}>Earring
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-200 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/necklace'}>Necklace
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-200 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/ring'}>Ring
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-200 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/color-changing'}>Color Changing
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-200 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/watche'}>Watches
                                </Link>
                            </div>

                        </div>
                        <div className='relative'>
                            <Link
                                onMouseEnter={() => OthersetSubItem(true)}
                                onMouseLeave={() => OthersetSubItem(false)}
                                className='py-3 px-3 w-full bg-gray-100 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#00000094] dark:border-gray-600 border-b flex items-center justify-between '
                                href={'/services/clipping-path-service'}>Other Service<MdKeyboardArrowDown />
                            </Link>

                            {/* For submenu submenus */}
                            <div onMouseEnter={() => OthersetSubItem(true)} onMouseLeave={() => OthersetSubItem(false)} className={`absolute rounded  lg:-right-96 -right-80 lg:w-96 w-80 text-[14px] font-medium bg-red-300 flex flex-col transition-all ease-linear duration-150 ${OthersubItem ? "visible top-0 opacity-100" : "invisible top-[.2rem] opacity-0"} `}>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-100 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/clipping-path-service'}>Photo Retouching Service
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-100 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/shadow-service'}>Shadow Service
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-100 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/golden-sunset-dining'}>Image Manipulation
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-100 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/photo-retouching-service'}>Neck Joint Service
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-100 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/majestic-mountain-trek'}>Image Maskin Service
                                </Link>
                                <Link
                                    className='py-3 px-3 w-full bg-gray-100 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#00000094] dark:border-gray-600 border-b '
                                    href={'/services/garden-of-tranquility'}>Photo Color Correction Service
                                </Link>

                            </div>

                        </div>

                    </div>
                </div>
                <Link
                    className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] py-5 font-medium ${isPathActive('/pricing') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                    href={'/pricing'}>Pricing
                </Link>
                <Link
                    className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] py-5 font-medium ${isPathActive('/contact') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                    href={'/contact'}>Contact
                </Link>
                <Link
                    className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] py-5 font-medium ${isPathActive('/blog') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                    href={'/blog'}>Blog
                </Link>
                <Link
                    className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] py-5  font-medium ${isPathActive('/portfolio') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                    href={'/portfolio'}>Portfolio
                </Link>
                <Link
                    className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] py-5  font-medium ${isPathActive('/about') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                    href={'/about'}>About
                </Link>
            </div>
            <RoundedBtn href={'/freeTrial'} text='Free Trial' type='button' />
        </div>
    );
}
