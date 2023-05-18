"use client";
import Link from "next/link";
import CategoryList from "../CategoryList";
import Search from "./Search";
// import Logo from "./Logo";
// import RightMenu from "./RightMenu/RightMenu";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white shadow sticky z-10 top-0 h-14 lg:h-20 grid grid-cols-12 lg:gap-4 lg:bg-white items-center px-3">
        {/* hamburger button */}
        <div className="text-2xl lg:hidden col-span-1 flex justify-center items-center">
          {isMenuOpen ? (
            <label className=" p-0 py-0" onClick={() => setIsMenuOpen(false)}>
              <svg
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8L8 16M12 12L16 16M8 8L10 10"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          ) : (
            <label className=" p-0 py-0" onClick={() => setIsMenuOpen(true)}>
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          )}
        </div>

        <div className="lg:col-span-3 col-span-9 ">
          <Link href="/" className="flex justify-start px-1">
            <Image
              src="/logo.png"
              alt="logo"
              width="32"
              height="48"
              className="h-8 lg:h-12 lg:my-4 my-2"
            />
          </Link>
        </div>

        <div className="hidden lg:col-span-7 lg:flex justify-center items-center">
          <Search />
        </div>

        <div className="col-span-2 flex justify-end">{/* <RightMenu /> */}</div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden m-auto my-3 ">
        {isMenuOpen && (
          <CategoryList
          // isMenuOpen={isMenuOpen}
          // setIsMenuOpen={setIsMenuOpen}
          />
        )}
        <Search />
      </div>
    </>
  );
}
