"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var __importDefault = (this && this.__importDefault) || function (mod) {
//   return (mod && mod.__esModule) ? mod : {
//     "default": mod
//   };
// };
// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// const assert_never_1 = __importDefault(require("./assert-never"));
function renderNav(groupedFiles, level = 0) {
    // Build <li>s
    var navIsActive = false;
    var nav = '';
    groupedFiles.forEach((f) => {
        /*
                DIR
        */
        if (f.type === "dir") {
            const childrenNav = renderNav(f.children, level + 1);
            // Heading with link if there is an index file in the folder
            const indexFile = getIndexFile(f.children);
            if (indexFile) {
                const link = renderHREF(f.name, indexFile.value.href);
                if (link) {
                    let navIsActiveClass = "";
                    if (indexFile.value.active) {
                        navIsActive = true;
                        navIsActiveClass = "active";
                    }
                    nav += `<li class="heading ${navIsActiveClass}">${link}</li>\n${childrenNav}`;
                }
                return;
            }
            // Heading without link
            if (f.name) {
                nav += `<li class="heading"><span>${f.name}</span></li>\n${childrenNav}`;
            }
            return;
        }
        /*
                FILE
        */
        if (f.type === "file") {
            const { text, href, active } = f.value;
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
                    navIsActiveClass = "active";
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
    return `<ul class="${navIsActive ? 'active' : ''}">${nav}</ul>`;
}
exports.default = renderNav;
exports.default = renderNav;
/*
        <a href=...
*/
function renderHREF(text, href) {
    if (text == "README" || text == "index") {
        return '';
    }
    return `<a href="./${href}">${text}</a>`;
}
/*
        index.html or README.html
*/
function getIndexFile(files) {
    var indexFile = files.find((e) => e.type === "file" && e.value.text === "index");
    if (!indexFile) {
        indexFile = files.find((e) => e.type === "file" && e.value.text === "README");
    }
    ;
    return indexFile;
}