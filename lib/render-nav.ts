"use strict";
import { FileTree, StringFile, IndexFile, FileNode } from "./types";
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
	var navIsActive = false;
	var nav = '';
	groupedFiles.forEach((f: FileNode<IndexFile>) => {
		let navIsActiveClass = "";
		/*
				DIR
		*/
		if (f.type === "dir") {
			const childrenNav = renderNav(f.children, level + 1);
			// if one of the children is active, make this <ul> active
			if (childrenNav.indexOf("isActive") !== -1) {
				// navIsActive = true;
				navIsActiveClass = "childIsActive";
			}
			// Heading with link if there is an index file in the folder
			const indexFile = getIndexFile(f.children);
			if (indexFile) {
				const link = renderHREF(f.name, indexFile.value.href);
				if (link) {
					if (indexFile.value.active) {
						navIsActive = true;
						navIsActiveClass = "isActive";
					}
					nav += `<li class="heading ${navIsActiveClass}">${link}</li>\n${childrenNav}\n`;
				}
				return;
			}
			// Heading without link
			if (f.name) {
				/* notice isActive class below - to always expand a folder if it does not contain a link to open itself (because it doesn't contain a README or index file inside) */
				nav += `<li class="heading isActive"><span>${f.name}</span></li>\n${childrenNav}\n`;
			}
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
			const link = renderHREF(text, href);
			// Skip index files on nested levels since the Heading links to them.
			// if (level > 0 && text && (text.toLowerCase() === "index" || text.toLowerCase() === "readme")) {
			// 	return;
			// }
			// Render link
			if (link) {
				let navIsActiveClass = "";
				if (active) {
					navIsActive = true;
					navIsActiveClass = "isActive";
				}
				nav += `<li class="${navIsActiveClass}">${link}</li>`;
			}
			return;
		}
		/*
				N/A
		*/
		// return assert_never_1.default(f);
	});
	return nav ? `<ul class="${navIsActive ? 'isActive' : ''}">${nav}</ul>` : '';
}
exports.default = renderNav;
/*
		<a href=...
*/
function renderHREF(text: any, href: any) {
	if (text == "README" || text == "index") {
		return '';
	}
	return `<a href="./${href}">${text}</a>`;
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