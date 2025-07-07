import Link from 'next/link'
import React from 'react'

export default function F1() {
  return (
    <div>
      <h1>F1 Page</h1>
      <p>This is the F1 page of the Next.js application.</p>
      <p>It is designed to demonstrate a simple page structure.</p>
      <p>Feel free to modify and expand this page as needed.</p>

      <Link className='text-blue-500 hover:underline' href="/f1/f2">Go to F2 Page</Link>
      <Link className='text-blue-500 hover:underline' href="/f3">Go to F3 Page</Link>
    </div>
  )
}
