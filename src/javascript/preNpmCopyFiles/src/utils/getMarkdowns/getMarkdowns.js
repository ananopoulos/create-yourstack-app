import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getMarkdowns = (srcPath) => {
  const files = fs.readdirSync(path.join(srcPath));
  const allMarkdownData = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(`${srcPath}/${slug}.md`),
      "utf8"
    );
    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });
  allMarkdownData.sort((a, b) =>
    new Date(a.data.sort) < new Date(b.data.sort) ? 1 : -1
  );
  return allMarkdownData;
};

export default getMarkdowns;
