import Link from 'next/link'
import React from 'react'

export default function Archived() {
  return (
    <div>
      <h1>Archived Notifications</h1>
      <p>Here you can find your archived notifications.</p>
      <Link href="/complex-dashboard">
        <button className="btn px-2 text-black bg-white rounded-lg">Back to Notifications</button>
      </Link>
    </div>
  )
}

