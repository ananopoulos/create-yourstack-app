import React from "react";
import Hero from "../src/components/organisms/Hero/Hero";
import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

// The "lastUpdated" format is yyyy-mm-dd
// lastUpdated: 2023-01-20

export const metadata = {
  title: "Welcome!",
  description: "This is the home page",
};

export default function Page() {
  const fileContents = fs.readFileSync(path.join(`README.md`), "utf8");

  return (
    <div className="mb-12">
      <div className="container mx-auto pl-6 pr-6 pt-8">
        <Hero />
      </div>
      <div className="prose container md:max-w-[50%] mx-auto pl-6 pr-6 pt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {fileContents}
        </ReactMarkdown>
      </div>
    </div>
  );
}
