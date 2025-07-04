import React from 'react'
 

export default function layout({children,params}: {children: React.ReactNode, params: { id: string, reviewId: string }}) {
    const { id, reviewId } = params;    

  return (
    <div className='p-4'>
      <h1>Review Details for Review {reviewId}</h1>
      <p>blog/ {id}/ {reviewId}</p>
      {children}
      <h2>Featured Products</h2>
    </div>
  )
}
