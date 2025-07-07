'use client '
import Link from 'next/link'
import React from 'react'
import { use } from 'react';

type Params = {
  articleId: string;
}

type SearchParams = {
  lang?: "en" | "fr" | "es";
}

export default  function NewsArticle({params, searchParams} : {params: Promise<Params>, searchParams: Promise<SearchParams>}) {

   const resolvedParams = use(params);
  const resolvedSearchParams = use(searchParams);

  return (
    <div>
      <h1>Article Title of id {resolvedParams.articleId}</h1>
      <p>Article content goes here in language {resolvedSearchParams.lang}.</p>

      <Link href={`/articles/${resolvedParams.articleId}?lang=en`}>English</Link>

      <Link href={`/articles/${resolvedParams.articleId}?lang=fr`}>French</Link>
      <Link href={`/articles/${resolvedParams.articleId}?lang=es`}>Spanish</Link>
    </div>
  )
}
