"use client";
import { currentMovieAtom, showMoviePreviewAtom } from "@/atoms";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaPause,
  FaPlay,
  FaPlusCircle,
  FaThumbsDown,
  FaThumbsUp,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import ReactPlayer from "react-player/lazy";

export const Modal = () => {
  const [showModal, setShowModal] = useAtom(showMoviePreviewAtom);
  const [currentMovie, setCurrentMovie] = useAtom(currentMovieAtom);
  const [trailer, setTrailer] = useState("");
  const [movieGenre, setMovieGenre] = useState([]);
  const [modalInputs, setModalInputs] = useState({
    isPlaying: false,
    isMuted: true,
    addToList: false,
    isLike: true,
  });

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWRiYmU2MGY5ODE4MjNjZmY5NjEyNGVkY2YyOWQ2ZSIsInN1YiI6IjY1NTk5NTk1YjU0MDAyMTRkM2NiMmFiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B1q8Sv7NeTmh6793iIFNdBEB4g5xKgrcUyP5NjkfT-M",
      },
    };
    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          currentMovie?.media_type === "tv" ? "tv" : "movie"
        }/${currentMovie?.id}?api_key=
          eadbbe60f981823cff96124edcf29d6e
        }&language=en-US&append_to_response=videos`,
        options
      )
        .then((response) => response.json())
        .catch((error) => console.log(error.message));
      setTrailer(data?.videos?.results[0]?.key);
      setMovieGenre(data?.genres);
    };
    fetchMovie();
  }, [currentMovie]);

  if (!showModal) return null;

  return (
    <>
      {showModal && (
        <div
          className="fixed !top-7 bottom-4 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden 
    overflow-y-scroll rounded-md 
    "
        >
          <>
            <button
              className="modalButton absolute right-5 !z-40 h-9 w-9 
          border-none bg-[#181818] hover:bg-[#181818]"
              onClick={() => setShowModal(false)}
            >
              <MdCancel className="h-6 w-6 " />
            </button>
            <div className="relative pt-[56.25%] bg-black">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                playing={modalInputs.isPlaying}
                muted={modalInputs.isMuted}
              />
              <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                <div className="flex space-x-2 ">
                  <button
                    onClick={() =>
                      setModalInputs({
                        ...modalInputs,
                        isPlaying: !modalInputs.isPlaying,
                      })
                    }
                    className="flex items-center gap-x-2 rounded bg-white px-8 text-xl 
            font-bold text-black transition hover:bg-[#e6e6e6]
            "
                  >
                    {modalInputs.isPlaying ? (
                      <FaPause className="h-7 w-7 text-red-700" />
                    ) : (
                      <FaPlay className="h-7 w-7 text-green-700" />
                    )}
                    {modalInputs.isPlaying ? "Pause" : "Play"}
                  </button>
                  <button
                    className="modalButton"
                    onClick={() =>
                      setModalInputs({
                        ...modalInputs,
                        addToList: !modalInputs.addToList,
                      })
                    }
                  >
                    {modalInputs.addToList ? (
                      <FaCheckCircle className="h-7 w-7 " />
                    ) : (
                      <FaPlusCircle className="h-7 w-7 " />
                    )}
                  </button>
                  <button
                    className="modalButton"
                    onClick={() =>
                      setModalInputs({
                        ...modalInputs,
                        isLike: !modalInputs.isLike,
                      })
                    }
                  >
                    {modalInputs.isLike ? (
                      <FaThumbsUp className="h-7 w-7 " />
                    ) : (
                      <FaThumbsDown className="h-7 w-7 " />
                    )}
                  </button>
                </div>
                <button
                  className="modalButton"
                  onClick={() =>
                    setModalInputs({
                      ...modalInputs,
                      isMuted: !modalInputs.isMuted,
                    })
                  }
                >
                  {modalInputs.isMuted ? (
                    <FaVolumeMute className="h-6 w-6" />
                  ) : (
                    <FaVolumeUp className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
              <div className="space-y-6 text-lg">
                <div className="flex items-center space-x-2 text-sm ">
                  <p className="font-semibold text-green-400 ">
                    {currentMovie?.vote_average! * 10}%Match
                  </p>
                  <p className="font-light">
                    {currentMovie?.release_date || currentMovie?.first_air_date}
                  </p>
                  <div
                    className="flex h-4 items-center justify-center rounded border border-white/40 
                px-1.5 text-xs "
                  >
                    HD
                  </div>
                </div>
                <div className="font-white flex flex-col gap-x-10 gap-y-4 md:flex-row">
                  <p className="w-5/6">{currentMovie?.overview}</p>
                  <div className="flex flex-col space-y-3 text-sm">
                    <div>
                      <span className="text-[gray]">Genres:</span>
                      {movieGenre?.map((genre: any) => genre?.name).join(",")}
                    </div>

                    <div>
                      <span className="text-[gray]">Origaina language: </span>
                      {currentMovie?.original_language}
                    </div>

                    <div>
                      <span className="text-[gray]"> Total vote:</span>
                      {currentMovie?.vote_count}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
};
