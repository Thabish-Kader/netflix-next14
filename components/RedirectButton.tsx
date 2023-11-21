"use client"
import { useRouter } from 'next/navigation'

import React from 'react'

type ButtonProps = {
    btnName : string
    btnClassName?: string
    pathToGo : string
}

export const RedirectButton = ({btnName, btnClassName, pathToGo} : ButtonProps) => {
    const router = useRouter()

  return (
    <button
    type='button'
    className={`${btnClassName} w-full rounded  py-3 font-semibold`}
    onClick={() => router.push(pathToGo)}
  >

    {btnName}
  </button>
  )
}
