'use client'
// Components
import Menu from "./menu";
import Mood from "./mood";
import MobileMenu from "./mobileMenu";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mb-7 z-[1] relative">
      <MobileMenu />
      <div className=" flex items-center md:justify-between justify-center gap-6 py-4 md:py-0 flex-1 md:pr-10 ">
        <Logo />
        <Menu />
      </div>
      <Mood />
    </div>
  );
}

