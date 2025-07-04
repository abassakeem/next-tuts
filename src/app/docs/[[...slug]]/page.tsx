import React from 'react'

export default async function DocsSlugPage({params} : {params: {slug: string[]}}) {

  const { slug } = await params;
  if(slug.length === 2) {
    return (
      <div>
        Viewing docs of {slug[0]} -and slug concept {slug[1]}
      </div>
    )
  }
  else if(slug.length === 1) {
    return (
      <div>
        Viewing docs of {slug[0]}
      </div>
    )
  }
  else if(slug.length === 0) {
    return (
      <div>
        Viewing all docs
      </div>
    )
  }
  return (
    <div>
      <h1>Documentation - {slug.join(' / ')}</h1>
    </div>
  )
}


