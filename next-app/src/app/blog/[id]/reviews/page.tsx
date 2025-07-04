import React from 'react'

export default function Reviews({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Reviews for Blog Post {params.id}</h1>    
    </div>
  )
}
