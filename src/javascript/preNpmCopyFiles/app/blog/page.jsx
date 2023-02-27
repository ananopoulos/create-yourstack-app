import React from "react";
import PostCard from "../../src/components/organisms/PostCard/PostCard";
import getMarkdowns from "../../src/utils/getMarkdowns/getMarkdowns";

// The "lastUpdated" format is yyyy-mm-dd
// lastUpdated: 2023-01-20

export const metadata = {
  title: "Blog Posts",
  description: "These are Blog Posts",
};

export default function Page() {
  const contentPath = "src/content/blog";
  const posts = getMarkdowns(contentPath);
  return (
    <div className="mb-12">
      <div className="container mx-auto pl-6 pr-6 pt-8">
        <h1 className="mt-8 mb-12 font-bold text-3xl">Latest Posts</h1>
      </div>
      <div className="container mx-auto pl-6 pr-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.data.title}
            image={post.data.image}
            date={post.data.date}
            description={post.data.description}
            href={"/blog/" + post.slug}
          />
        ))}
      </div>
    </div>
  );
}
