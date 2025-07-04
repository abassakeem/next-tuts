'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname();
  const actualpathname = pathname
  const parts = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>404 - Review Not Found</h1>
      <p>Actual Pathname: {parts}</p>
      <p>The review {reviewId} you are looking for does not exist.</p>
    </div>
  )
}
