'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import RoundedBtn from '../roundedBtn/page';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Menu() {
    const pathname = usePathname();
    const isPathActive = (menuLink) => {
        return pathname === menuLink || pathname.startsWith(`${menuLink}/`);
    };

    return (
        <div className='md:flex hidden xl:gap-32 gap-3 items-center'>
            <div className={`relative md:flex hidden lg:gap-10 gap-4 items-center`}>
                <Link
                    className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] font-medium ${isPathActive('/') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                    href={'/'}>Home
                </Link>
                <div className='relative group'>
                    <Link
                        className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] py-5 font-medium flex items-center gap-1.5 ${isPathActive('/services') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                        href={'/services'}
                    >
                        Services <MdKeyboardArrowDown />
                    </Link>

                    {/* Services submenu */}
                    <div className="absolute left-0 hidden group-hover:block top-[3.8rem] opacity-0 group-hover:opacity-100 transition-all ease-linear duration-150">
                        <div className="w-[250px] flex flex-col space-y-2 bg-white dark:bg-[#1c1c1c] shadow-lg rounded-md">
                            <Link
                                className=" px-3 text-[14px] font-medium hover:bg-gray-200 dark:hover:bg-[#00000094] border-b block"
                                href={'/services/clipping-path-service'}
                            >
                                Clipping Path Service
                            </Link>
                            <Link
                                className="px-3 text-[14px] font-medium hover:bg-gray-200 dark:hover:bg-[#00000094] border-b block"
                                href={'/services/photo-retouching-service'}
                            >
                                Photo Retouching Service
                            </Link>
                            <Link
                                className=" px-3 text-[14px] font-medium hover:bg-gray-200 dark:hover:bg-[#00000094] border-b block"
                                href={'/services/shadow-service'}
                            >
                                Shadow Service
                            </Link>
                            <Link
                                className=" px-3 text-[14px] font-medium hover:bg-gray-200 dark:hover:bg-[#00000094] border-b block"
                                href={'/services/golden-sunset-dining'}
                            >
                                Image Manipulation / Neck Joint
                            </Link>
                            <Link
                                className=" px-3 text-[14px] font-medium hover:bg-gray-200 dark:hover:bg-[#00000094] border-b block"
                                href={'/services/majestic-mountain-trek'}
                            >
                                Image Masking Service
                            </Link>
                            <Link
                                className="px-3 text-[14px] font-medium hover:bg-gray-200 dark:hover:bg-[#00000094] border-b block"
                                href={'/services/ecommerce-image-editing'}
                            >
                                Ecommerce Image Editing
                            </Link>
                            <Link
                                className="px-3 text-[14px] font-medium hover:bg-gray-200 dark:hover:bg-[#00000094] border-b block"
                                href={'/services/garden-of-tranquility'}
                            >
                                Photo Color Correction
                            </Link>
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
                    className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] py-5 font-medium ${isPathActive('/portfolio') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                    href={'/portfolio'}>Portfolio
                </Link>
                <Link
                    className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] py-5 font-medium ${isPathActive('/about') ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                    href={'/about'}>About
                </Link>
            </div>
            <RoundedBtn href={'/freeTrial'} text='Free Trial' type='button' />
        </div>
    );
}
