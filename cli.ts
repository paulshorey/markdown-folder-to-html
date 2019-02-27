#! /usr/bin/env node

import fs from "fs";
import path from "path";
import sh from "shelljs";

import groupByPath from "./lib/group-by-path";
import sortByPreferences from "./lib/sort-by-preferences";
import mdUrl from "./lib/markdown-url-to-html";
import md2html from "./lib/markdown-to-html";
import renderNav from "./lib/render-nav";
import generateIndexInfo from "./lib/generate-index-info";
import page from "./lib/render-page";
import mdRgx from "./lib/markdown-regex";
import { FileTree, StringFile } from "./lib/types";

const [argsSource, argsOutput, ...argsRest] = process.argv.slice(2);

// Default parameters
const defaultFolder = "docs";
const sourceFolder = argsSource || defaultFolder;
const outputFolder = argsOutput || `_${sourceFolder}`;
const templateFilename = "template.html";
const contentsFilename = "contents.json";
const preferences = ["index.md", "README.md"];

// Guards
// Bail out if more than 1 args
if (argsRest && argsRest.length > 0) {
  console.error("Too may arguments");
  usage(true);
}

// Bail out if the sourceFolder doesn't exist
if (!sh.test("-e", sourceFolder)) {
  console.error(
    `Folder ${sourceFolder} not found at ${path.join(process.cwd(), sourceFolder)}`
  );
  usage(true);
}

// Define template html, user's first, otherwise default
let template = path.join(sourceFolder, templateFilename);
if (!sh.test("-e", template)) {
  template = path.join(__dirname, defaultFolder, templateFilename);
}
const tpl = sh.cat(template);

// Prepare outputFolder sourceFolder (create, clean, copy sources)
sh.mkdir("-p", outputFolder);
sh.rm("-rf", outputFolder + "/*");
sh.cp("-R", sourceFolder + "/*", outputFolder);

// Start processing. Outline:
//
// 1. Get all files
// 2. Sort them
// 3. Group them hierachically
// 4. Parse files and generate outputFolder html files

sh.cd(outputFolder);
const allFiles = sh.find("*");

const mdFiles = allFiles
  .filter(file => file.match(mdRgx))
  .sort(sortByPreferences.bind(null, preferences))
  .map(file => {
    const content = sh.cat(file).toString(); // The result is a weird not-string
    // file = file.replace('README','index');
    return {
      path: file,
      url: mdUrl(file),
      content,
      html: md2html(content)
    };
  });

const grouped_mdFiles: FileTree<StringFile> = mdFiles.reduce( 
  (grouped: FileTree<StringFile>, value) => groupByPath(grouped, value.path),
  []
);

mdFiles.forEach(({ path, url, html }) => {
  const navHtml = renderNav(generateIndexInfo(path, grouped_mdFiles));
  const pageHtml = page(tpl, navHtml, html);
  fs.writeFileSync(url, pageHtml);
});

const contentsJSON = {
  paths: grouped_mdFiles,
  contents: mdFiles.map((md, i) => ({ ...md, id: i }))
};
fs.writeFileSync(contentsFilename, JSON.stringify(contentsJSON, null, 2));

sh.rm("-r", "**/*.md");

function usage(error: boolean) {
  console.log(
    `
Usage:

  markdown-sourceFolder-to-html [input-sourceFolder]

    input-sourceFolder [optional] defaults to \`docs\`
  `
  );
  process.exit(error ? 1 : 0);
}
