import { Movie } from "@/typings";
import { atom } from "jotai";

export const showMoviePreviewAtom = atom(false);
export const searchMovieAtom = atom("");
export const currentMovieAtom = atom<Movie | null>({});
