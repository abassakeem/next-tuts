import React from 'react'
import { notFound } from 'next/navigation'

export default function Review({ params }: { params: { id: string, reviewId: string } }) {

    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
  return (
    <div>
      <h1>Review {params.reviewId} for Blog Post {params.id}</h1>
    </div>
  )
}
