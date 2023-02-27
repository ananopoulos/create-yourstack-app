import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getMarkdown = (slug, srcPath) => {
  const fileContents = fs.readFileSync(
    path.join(`${srcPath}/${slug}.md`),
    "utf8"
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getMarkdown;
