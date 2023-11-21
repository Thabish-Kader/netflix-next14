"use client";
import { useRouter } from "next/navigation";

import React from "react";

type ButtonProps = {
  btnName: string;
  btnClassName?: string;
  pathToGo: string;
};

/**
 * The RedirectButton component is a button that, when clicked, redirects the user to a specified path
 * using the useRouter hook.
 * @param {ButtonProps}  - - `btnName`: The name or label of the button.
 * @returns The code is returning a button component that, when clicked, will redirect the user to a
 * specified path using the useRouter hook from the Next.js framework. The button's name and class name
 * are passed as props.
 */
export const RedirectButton = ({
  btnName,
  btnClassName,
  pathToGo,
}: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className={`${btnClassName} w-full rounded  py-3 font-semibold`}
      onClick={() => router.push(pathToGo)}
    >
      {btnName}
    </button>
  );
};
