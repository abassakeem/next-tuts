import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
type props = {
  params: { id: string; reviewId: string };
};

export const generateMetadata = async ({ params }: props): Promise<Metadata> => {
    const id = (await params.id) || "default-id";
    const reviewId = (await params.reviewId) || "default-review-id";
    const title = (await new Promise((resolve) => {
      setTimeout(() => resolve(`Review ${reviewId} for Blog Post ${id}`), 1000);
    })) as string;
  return {
    title,
    description: `This is the review page for blog post ${id} with review ID ${reviewId}.`,
  };
};

export default function Review({ params }: props) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review {params.reviewId} for Blog Post {params.id}
      </h1>
    </div>
  );
}
