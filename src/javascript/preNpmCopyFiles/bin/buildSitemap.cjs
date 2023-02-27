#! /usr/bin/env node

const fs = require("fs");
const mustache = require("mustache");
const path = require("path");
const { exit } = require("process");

const siteMapTemplate = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {{#urls}}
  <url>
    <loc>{{{loc}}}</loc>
    {{#lastmod}}
    <lastmod>{{lastmod}}</lastmod>
    {{/lastmod}}
  </url>
  {{/urls}}
</urlset>
`;

const robotsTxtTemplate = `
User-agent: *
Disallow:

Sitemap: {{{baseUrl}}}/sitemap.xml
`;

function getBaseUrl() {
  let baseUrl = null;
  const allFileContents = fs.readFileSync("src/utils/constants.js", "utf-8");
  allFileContents.split(/\r?\n/).forEach((line) => {
    if (line.startsWith("  baseUrl:")) {
      baseUrl = line
        .split(": ")[1]
        .replace('"', "")
        .replace('"', "")
        .replace(",", "")
        .trim();
    }
  });
  if (baseUrl == "https://localhost:3000") {
    console.error(
      "*** Error: baseUrl in src/utils/constants.js has not been updated."
    );
    exit(1);
  }
  return baseUrl;
}

function getAllSitemapUrls(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      if (file == "[slug]") {
        const pieces = dirPath.split("/");
        const slugType = pieces[pieces.length - 1];
        const slugPath = "src/content/" + slugType;
        if (fs.existsSync(slugPath)) {
          const slugs = fs.readdirSync(slugPath);
          slugs.forEach((slug) => {
            let lastUpdated = null;
            const allFileContents = fs.readFileSync(
              slugPath + "/" + slug,
              "utf-8"
            );
            allFileContents.split(/\r?\n/).forEach((line) => {
              if (line.startsWith("lastUpdated:")) {
                lastUpdated = line.split(":")[1].trim();
              }
            });
            const url = {
              loc:
                getBaseUrl() + dirPath.substring(3) + "/" + slug.split(".")[0], // Remove .md
              lastmod: lastUpdated,
            };
            arrayOfFiles.push(url);
          });
        }
      }
      arrayOfFiles = getAllSitemapUrls(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (dirPath.includes("[slug]") == false && file == "page.jsx") {
        let lastUpdated = null;
        const allFileContents = fs.readFileSync(
          path.join(dirPath, "/", file),
          "utf-8"
        );
        allFileContents.split(/\r?\n/).forEach((line) => {
          if (line.startsWith("// lastUpdated:")) {
            lastUpdated = line.split(":")[1].trim();
          }
        });
        const url = {
          loc: getBaseUrl() + dirPath.substring(3),
          lastmod: lastUpdated,
        };
        arrayOfFiles.push(url);
      }
    }
  });

  arrayOfFiles.sort((a, b) => (a.loc > b.loc ? 1 : -1));
  return arrayOfFiles;
}

const urls = getAllSitemapUrls("app", []);
const templateSiteMapVars = {
  urls: urls,
};
const renderedSiteMapMustache = mustache.render(
  siteMapTemplate.trim(),
  templateSiteMapVars
);
fs.writeFileSync("public/sitemap.xml", renderedSiteMapMustache, {
  encoding: "utf8",
  flag: "w",
});

const templateRobotsTxtVars = {
  baseUrl: getBaseUrl(),
};
const renderedRobotsTxtMustache = mustache.render(
  robotsTxtTemplate.trim(),
  templateRobotsTxtVars
);
fs.writeFileSync("public/robots.txt", renderedRobotsTxtMustache, {
  encoding: "utf8",
  flag: "w",
});
