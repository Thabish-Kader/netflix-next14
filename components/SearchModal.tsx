"use client";
import {
  ACTION_MOVIES,
  DOCUMENTARIES,
  HORROR_MOVIES,
  NETFLIX_ORGINALS,
  ROMANCE_MOVIES,
  TOP_RATED,
  TRENDING_MOVIES,
} from "@/constants";
import React, { useState } from "react";
import { MovieCard } from "../components";
import { useAtom } from "jotai";
import { searchMovieAtom } from "@/atoms";

/* The `SearchModal` component is a React functional component that displays a modal for searching
movies. */
export const SearchModal = () => {
  const allMovies = [
    ...TRENDING_MOVIES,
    ...NETFLIX_ORGINALS,
    ...TOP_RATED,
    ...ACTION_MOVIES,
    ...ROMANCE_MOVIES,
    ...HORROR_MOVIES,
    ...DOCUMENTARIES,
  ];
  const [searchMovies, setSearchMovies] = useAtom(searchMovieAtom);

  const uniqueTitles: Record<string, boolean> = {};
  const filteredMovies = allMovies
    .filter((movie) =>
      movie?.title?.toLowerCase().includes(searchMovies.toLowerCase())
    )
    .filter((movie) => {
      if (!uniqueTitles[movie.title!]) {
        uniqueTitles[movie.title!] = true;
        return true;
      }
      return false;
    });

  if (searchMovies.length === 0) return null;
  return (
    <>
      {searchMovies.length >= 1 && (
        <>
          <div className="absolute inset-0 bg-black/50 h-full w-full z-10"></div>
          <div className="absolute  mx-12 top-28 left-0 right-0 z-50  overflow-x-hidden overflow-y-scroll rounded-md ">
            <div className="h-[500px] overflow-y-scroll bg-black p-10 w-full">
              <h1 className="text-2xl pb-4">Search Movies</h1>
              <div className="grid grid-cols-3 gap-2">
                {filteredMovies.length >= 1 ? (
                  <>
                    {filteredMovies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                  </>
                ) : (
                  <h1>No Such Movies</h1>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
