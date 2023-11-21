"use client";
import { Movie } from "@/typings";
import { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { MovieCard } from "@/components/MovieCard";
import { BannerCard } from "./BannerCard";

type MovieRowProps = {
  title: string;
  movies: Movie[];
  showAsBanner?: boolean;
};

/* The code is defining a functional component called `MovieRow` in TypeScript React. */
export const MovieRow = ({ title, movies, showAsBanner }: MovieRowProps) => {
  const [isMoved, setIsMoved] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  console.log(movies);
  return (
    <div className=" h-full space-y-0.5 md:space-y-2">
      <h2
        className=" tranition w-56 cursor-pointer text-sm font-semibold
       text-[#c8c6c6] duration-200 hover:text-white md:text-2xl "
      >
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <HiChevronLeft
          onClick={() => handleClick("left")}
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer 
          opacity-0 transition duration-200 hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }
        `}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll  md:space-x-2.5 
        md:p-2
        "
        >
          {showAsBanner ? (
            <>
              {movies.map((movie) => (
                <BannerCard key={movie.id} movie={movie} />
              ))}
            </>
          ) : (
            <>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </>
          )}
        </div>
        <HiChevronRight
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer 
        opacity-0 transition duration-200 hover:scale-125 group-hover:opacity-100
        "
        />
      </div>
    </div>
  );
};
