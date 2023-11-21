import {
  currentMovieAtom,
  searchMovieAtom,
  showMoviePreviewAtom,
} from "@/atoms";
import { Movie } from "@/typings";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaPlayCircle, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

/**
 * The `BannerCard` component is a clickable card that displays movie information and triggers a modal
 * when clicked.
 * @param  - - `movie`: A single movie object that contains information about the movie, such as its
 * title, backdrop/poster path, and vote average.
 * @returns The `BannerCard` component is returning a JSX element.
 */
export const BannerCard = ({ movie }: { movie: Movie }) => {
  const [currentMovie, setCurrentMovie] = useAtom(currentMovieAtom);
  const [showModal, setShowModal] = useAtom(showMoviePreviewAtom);
  const [searchMovies, setSearchMovies] = useAtom(searchMovieAtom);

  return (
    <div
      className="relative min-w-[180px] cursor-pointer transition duration-200
    ease-out h-80 md:min-w-[260px] md:hover:scale-125 hover:z-20 overflow-hidden "
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

      <div className="absolute  left-0 bottom-5  h-full w-full text-white opacity-0 hover:opacity-100 z-50 flex flex-col items-center">
        <div className="bg-[#141414] mt-auto  w-full">
          <div className="flex flex-col p-2  h-full">
            <div className="flex items-center space-x-2 p-2">
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
  );
};
