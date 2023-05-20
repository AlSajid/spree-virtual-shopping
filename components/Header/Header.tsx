"use client";
import Link from "next/link";
import CategoryList from "@/components/CategoryList";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import Image from "next/image";
import CartHeader from "./CartHeader";
import ProfileHeader from "./profile/ProfileHeader";
import Search from "./Search";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white shadow sticky z-10 top-0 h-14 lg:h-20 grid grid-cols-12 lg:gap-4 lg:bg-white items-center px-3">
        {/* hamburger button */}
        <div className="text-2xl lg:hidden col-span-1 flex justify-center items-center">
          {isMenuOpen ? (
            <div className=" p-0 py-0" onClick={() => setIsMenuOpen(false)}>
              <GiHamburgerMenu />
            </div>
          ) : (
            <div className=" p-0 py-0" onClick={() => setIsMenuOpen(true)}>
              <ImCross />
            </div>
          )}
        </div>

        {/* logo */}
        <div className="lg:col-span-3 col-span-9 ">
          <Link href="/" className="">
            <Image
              src="/logo.png"
              alt="logo"
              width="200"
              height="800"
              priority={true}
              className="flex justify-start px-1 h-8 lg:h-12 lg:my-4 my-2"
            />
          </Link>
        </div>

        <div className="hidden lg:col-span-7 lg:flex justify-center items-center">
          <Search />
        </div>

        {/* right portion */}
        <div className="col-span-2 flex justify-end">
          <div className="flex justify-around items-center h-full">
            <div className="right-menu">
              <CartHeader />,
            </div>

            <div className="right-menu">
              <ProfileHeader />
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden m-auto my-3 ">
        {isMenuOpen && <CategoryList />}
        <Search />
      </div>
    </>
  );
}
