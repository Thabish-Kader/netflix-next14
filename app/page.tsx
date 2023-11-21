import {  RedirectButton } from "@/components/common";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";


export default function Home() {

  return (
    <main className="">
      <div
      className="relative flex h-screen w-screen flex-col bg-black md:items-center
     md:justify-center md:bg-transparent"
    >

      <Image
        className="-z-10 !hidden opacity-60 sm:!inline"
        src="https://rb.gy/p2hphi"
        layout="fill"
        objectFit="cover"
        alt="logo"
      />
      <Image
        src="/netflixlogo.svg"
        className="absolute  left-4  top-4 cursor-pointer object-contain text-center md:left-10 md:top-6 "
        width="150"
        height="150"
        alt="netflix logo"
      />
      <form
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4 ">
            <input
              type="text"
              placeholder="Email"
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
            />

        </div>
       <RedirectButton btnName="Sign In" btnClassName="bg-[#e50914]" pathToGo="dashboard"/>
        <div className="text-[gray]">
          New to Netflix ?
          <button
            type="submit"
            className="text-white hover:underline "
            disabled
          >&nbsp;
            Sign Up now
          </button>
        </div>
      </form>
    </div>
    </main>
  )
}
