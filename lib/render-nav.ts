"use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//   return (mod && mod.__esModule) ? mod : {
//     "default": mod
//   };
// };
// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// const assert_never_1 = __importDefault(require("./assert-never"));

export default function renderNav(groupedFiles: any, level = 0) {
  // Build <li>s
  var nav = '';
  groupedFiles.forEach((f: any) => {
    /*
        DIR
    */
    if (f.type === "dir") {
      const childrenNav = renderNav(f.children, level + 1);
      // Heading with link if there is an index file in the folder
      const indexFile = getIndexFile(f.children);
      if (indexFile) {
        const link = renderHREF(f.name, indexFile.value.href, indexFile.value.active);
        nav += `<li class="heading">${link}</li>\n${childrenNav}`;
        return;
      }
      // Heading without link
      nav += `<li class="heading"><span>${f.name}</span></li>\n${childrenNav}`;
      return;
    }
    /*
        FILE
    */
    if (f.type === "file") {
      const {
        text,
        href,
        active
      } = f.value;
      // Skip index files on nested levels since the Heading links to them.
      // if (level > 0 && text && (text.toLowerCase() === "index" || text.toLowerCase() === "readme")) {
      // 	return;
      // }
      // Render link
      nav += `<li>${renderHREF(text, href, active)}</li>`;
      return;
    }
    /*
        N/A
    */
    // return assert_never_1.default(f);
  });
  return `<ul>${nav}</ul>`;
}
exports.default = renderNav;
/*
    <a href=...
*/
function renderHREF(text: any, href: any, active: any) {
  if (text == "README" || text == "index") {
    return '';
  }
  return `<a class="${active ? "active" : ""}" href="./${href}">${text}</a>`;
}
/*
    index.html or README.html
*/
function getIndexFile(files: any) {
  var indexFile = files.find((e: any) => e.type === "file" && e.value.text === "index");
  if (!indexFile) {
    indexFile = files.find((e: any) => e.type === "file" && e.value.text === "README");
  };
  return indexFile;
}