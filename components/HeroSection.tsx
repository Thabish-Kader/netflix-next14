"use client";
import { currentMovieAtom, showMoviePreviewAtom } from "@/atoms";
import { NETFLIX_ORGINALS } from "@/constants";
import { Movie } from "@/typings";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

/* The `HeroSection` component is a React functional component that displays a hero section for a
movie. */
export const HeroSection = () => {
  const [showModal, setShowModal] = useAtom(showMoviePreviewAtom);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [currentMovie, setCurrentMovie] = useAtom(currentMovieAtom);

  useEffect(() => {
    const randomMovie = Math.floor(Math.random() * NETFLIX_ORGINALS.length);
    const movie = NETFLIX_ORGINALS[randomMovie];
    setMovie(movie);
  }, []);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        {movie && (
          <Image
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            fill
            alt="hero-img"
            className="object-cover"
          />
        )}
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl ">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black ">
          <FaPlay className="h-4 w-4 text-black md:w-7" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70 text-black"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8 " /> More Info
        </button>
      </div>
    </div>
  );
};
