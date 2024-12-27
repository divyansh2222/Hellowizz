"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import SearchBar from './Searchbar';
import { CiMenuKebab } from "react-icons/ci";

import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  // State to manage the visibility of the dropdown menu
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };



  

  return (
    <nav className="bg-gradient-to-r from-red-500 to-black p-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo and Menu Items */}
        <div className="flex items-center">
          <Image src="/text.png" alt="Logo" width={50} height={50} />
          <h1 className="text-white text-xl ml-2">Hello-Bizz</h1>
        </div>

        {/* Menu Items */}
        <div className="space-x-6">
          <Link href="/home" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/bizreel" className="text-white hover:text-gray-300">Biz-Reels</Link>
          <Link href="/community" className="text-white hover:text-gray-300">Community</Link>
          <Link href="/findnearest" className="text-white hover:text-gray-300">Find nearest Chapter or Club</Link>
        </div>

        {/* searchbar */}
        <SearchBar/>

        {/* Right Section: Menu Logo with Dropdown */}
        <div className="relative">
          {/* Menu Logo that toggles the dropdown */}
          <div className="flex items-center space-x-4 cursor-pointer" onClick={toggleDropdown}>
          <CiMenuKebab className='text-white' />
          </div>

          {/* Dropdown Menu */}
          {isDropdownVisible && (
            <div className="absolute right-0 flex  flex-col min-w-[180px] bg-black text-white pl-3 pb-4 pt-4  pr-3 mt-4 rounded-lg shadow-lg space-y-2">
               <div className='flex justify-start items-center'>
               <Image src='/Frame (3).png' alt='name' width={20} height={20}></Image>
               <Link href="/menuContainer/profile" className="hover:text-gray-300">Profile</Link>
               </div>
              <hr />
              <div className='flex justify-start gap-2 items-center'>
               <Image src='/Vector.png' alt='name' width={20} height={20}></Image>
              <Link href="/menuContainer/news" className="hover:text-gray-300">News</Link>
              </div>
              <hr />
              <div className='flex justify-start gap-2  items-center'>
               <Image src='/Vector (1).png' alt='name' width={20} height={20}></Image>
              <Link href="/menuContainer/clubchapter" className="hover:text-gray-300 text-nowrap">Clubs and Chapter</Link>
              </div>
               <hr />
               <div className='flex justify-start gap-2  items-center'>
               <Image src='/Vector (2).png' alt='name' width={20} height={20}></Image>
              <Link href="/menuContainer/offer" className="hover:text-gray-300">Offers</Link>
              </div>
              <hr />
              <div className='flex justify-start gap-2  items-center'>
              <FiLogOut className='text-red-500' />
              <Link href="/login" className="hover:text-gray-300">Logout</Link>
              </div>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
