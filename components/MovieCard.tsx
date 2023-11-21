"use client";

import {
  currentMovieAtom,
  searchMovieAtom,
  showMoviePreviewAtom,
} from "@/atoms";
import { Movie } from "@/typings";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import {
  FaPlayCircle,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsDown,
} from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [currentMovie, setCurrentMovie] = useAtom(currentMovieAtom);
  const [showModal, setShowModal] = useAtom(showMoviePreviewAtom);
  const [searchMovies, setSearchMovies] = useAtom(searchMovieAtom);
  console.log(searchMovies);
  return (
    <div
      className=" relative h-28  min-w-[180px] cursor-pointer transition duration-200
      ease-out md:h-36 md:min-w-[260px] md:hover:scale-125 hover:z-50 overflow-y-hidden "
      onClick={() => {
        setShowModal(true);
        setCurrentMovie(movie);
        setSearchMovies("");
      }}
    >
      <Image
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        fill
        alt="movie poster"
      />

      <div>
        <div className="absolute top0 left-0 bottom-2  h-full w-full text-white opacity-0 hover:opacity-100 z-50 flex flex-col items-center">
          <div className="bg-[#141414] mt-auto  w-full">
            <div className="flex flex-col p-2  h-full">
              <div className="flex items-center space-x-2 p-21">
                <FaPlayCircle className="h-6 w-6" />
                <CiCirclePlus className="h-6 w-6" />
                <FaRegThumbsUp className="h-5 w-5" />
                <FaRegThumbsDown className="h-5 w-5" />
              </div>
              <div className="flex flex-col ">
                <p className=" font-bold  text-xs">{movie?.title}</p>
                <div className="h-full  flex flex-col ">
                  <p className="text-green-500 text-xs ">
                    Vote Average : {movie?.vote_average}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
