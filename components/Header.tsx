"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent, useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { searchMovieAtom } from '@/atoms';
import { useAtom } from 'jotai';


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchMovie, setSearchMovie] = useAtom(searchMovieAtom)

  // const handleSearchMovie = (e : FormEvent) => { 
  //   e.preventDefault()
  //   setSearchMovie(searchQuery)
  //  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/netflixlogo.svg"
          alt="netflix-logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 lg:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & popular</li>
          <li className="headerLink">
            <Link href="/myList">Favorite List</Link>
          </li>
        </ul>
      </div>
    {/* Right Section */}
    <div>
      <div className="flex my-2 items-center space-x-3  text-sm font-light">
        <form
        // onSubmit={handleSearchMovie}
          className="z-50 transition duration-500 sm:inline "
        >
          <div className='bg-black rounded-md border flex items-center'>
          <IoMdSearch className=" h-8 w-8  rounded font-semibold text-white" />
          <input
            type="text"
            placeholder="Search"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            className=" bg-transparent ml-3 outline-none"
            />
          </div>
        </form>

        <div className='flex items-center space-x-3'>

        <FaBell className="h-6 w-6"/>

        <Image  src="https://rb.gy/g1pwyx"
          alt="account"
          width={30}
          height={30}
          className="cursor-pointer rounded"/>

      </div>
      </div>
    </div>

    </header>
  )
}
