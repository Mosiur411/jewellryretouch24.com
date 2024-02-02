'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

// Import the JSON data
import menus from '/public/assect/json/menus.json';

// Import React Icons
import { GoTable } from 'react-icons/go';
import { HiOutlineHome } from 'react-icons/hi';
import { RiPriceTag3Line } from 'react-icons/ri';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PiUserSquare, PiNote, PiSubtractSquare, PiSubtractBold } from 'react-icons/pi';
import { CiCircleRemove } from 'react-icons/ci';
import { FiImage } from "react-icons/fi";

// Components
import Logo from './logo';
import RoundedBtn from '../roundedBtn/page';

export default function MobileMenu() {
  // To Get pathname for active menu
  const pathname = usePathname();
  // State
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false)
  const [subItem, setSubItem] = useState(false)

  // Icon mapping
  const icons = {
    Home: <HiOutlineHome />,
    Services: <GoTable />,
    Pricing: <RiPriceTag3Line />,
    Contact: <PiUserSquare />,
    About: <RiMenuUnfoldFill />,
    Blog: <PiNote />,
    Portfolio: <FiImage />
  };

  return (
    <div className='md:hidden mobileMenu'>
      <RiMenuUnfoldFill onClick={() => setOpen(true)} className='text-lg dark:text-white' />

      <div onClick={() => setOpen(false)} className={`fixed w-full h-screen top-0 left-0 dark:bg-black bg-gray-300 bg-opacity-25 dark:bg-opacity-25 transition-all ease-linear duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div onClick={(e) => e.stopPropagation()} className={`fixed top-0 w-11/12 sm:w-2/3 pt-5 pb-10 px-10 h-screen bg-white dark:bg-[#1c1c1c] dark:bg-opacity-50 bg-opacity-50 backdrop-blur-lg transition-all ease-linear duration-300  ${open ? "left-0 visible " : "-left-[33rem] invisible"}`}>
          <div className='flex flex-col  h-full '>
            <div className='flex justify-center mb-10'>
              <Logo />
            </div>
            <div onClick={() => setOpen(false)} className=' absolute top-3 right-2 text-2xl text-[#748E63] dark:text-[#F9B572] hover:text-red-500 cursor-pointer'>
              <CiCircleRemove />
            </div>
            {/* Menu */}
            <div className=' flex flex-col flex-1 justify-between min-h-[86vh]   overflow-y-scroll scrollbar-hide'>
              <div className='flex flex-col items-start w-full  '>

                <div className=' w-full' >
                  <Link className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center gap-2  w-full  ${pathname === '/' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`} href={'/'}>
                    {icons['Home']}  Home
                  </Link>
                  <Link onClick={() => setSubmenu(!submenu)} className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center justify-between  gap-2  w-full  ${pathname === '/services' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`} href={'/services'}>
                    <div className=' flex items-center gap-2'> {icons['Services']}  Services</div> <MdKeyboardArrowDown className=' text-xl' />
                  </Link>


                  {
                    submenu && <div>
                      <div className='relative'>
                        <Link
                          onClick={() => setSubItem(!subItem)}
                          className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center justify-between w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                          href={'/clippingPathService'}> <div className='flex items-start gap-2'><PiSubtractSquare className='mt-1' /> Clipping Path Service </div> <MdKeyboardArrowDown />
                        </Link>

                        {/* For submenu submenus */}
                        {
                          subItem &&
                          <div onClick={() => setSubItem(!subItem)} className={` rounded w-full h-fit text-[14px] font-medium  flex flex-col transition-all ease-linear duration-150 `}>
                            <Link
                              className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                              href={'/basicClippingPath'}><PiSubtractBold />Basic Clipping Path
                            </Link>
                            <Link
                              className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                              href={'/simpleClippingPath'}><PiSubtractBold />Simple Clipping Path
                            </Link>
                            <Link
                              className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                              href={'/mediumClippingPaths'}><PiSubtractBold />Medium Clipping Paths
                            </Link>
                            <Link
                              className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                              href={'/complexClippingPath'}><PiSubtractBold />Complex Clipping Path
                            </Link>
                            <Link
                              className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                              href={'superComplexClippingPath'}><PiSubtractBold />Super Complex Clipping Path
                            </Link>
                          </div>
                        }

                      </div>


                      <Link
                        className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                        href={'/photoRetouchingService'}><PiSubtractSquare />  Photo Retouching Service
                      </Link>
                      <Link
                        className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                        href={'/shadowService'}><PiSubtractSquare />  Shadow Service
                      </Link>
                      <Link
                        className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                        href={'/imageManipulation'}><PiSubtractSquare />  Image Manipulation
                      </Link>
                      <Link
                        className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                        href={'/neckJointService'}> <PiSubtractSquare /> Neck Joint Service
                      </Link>
                      <Link
                        className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                        href={'/imageMaskinService'}> <PiSubtractSquare /> Image Maskin Service
                      </Link>
                      <Link
                        className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`}
                        href={'/photoColorCorrectionService'}> <PiSubtractSquare /> Photo Color Correction Service
                      </Link>
                    </div>
                  }

                  <Link className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/pricing' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`} href={'/pricing'}>
                    {icons['Pricing']}  Pricing
                  </Link>
                  <Link className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/contact' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`} href={'/contact'}>
                    {icons['Contact']}  Contact
                  </Link>
                  <Link className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/blog' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`} href={'/blog'}>
                    {icons['Blog']}  Blog
                  </Link>
                  <Link className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/portfolio' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`} href={'/portfolio'}>
                    {icons['Portfolio']}  Portfolio
                  </Link>
                  <Link className={`text-[14px] hover:text-[#748E63] py-4 dark:hover-text-[#F9B572] font-medium  flex items-center  gap-2 w-full  ${pathname === '/about' ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`} href={'/about'}>
                    {icons['About']}  About
                  </Link>


                </div>

              </div>

              {/* Free Trial Button */}
              <RoundedBtn href={'/freeTrial'} text='Free Trial' type='button' />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
