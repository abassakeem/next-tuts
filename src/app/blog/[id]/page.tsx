import React from 'react'

export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Blog Post - {params.id}</h1>
      <p>Welcome to the blog post with ID: {params.id}</p>
    </div>
  )
}
