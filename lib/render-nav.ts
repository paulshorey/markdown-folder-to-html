import { FileTree, IndexFile, FileFolder, File } from "./types";
import assertNever from "./assert-never";

export default function renderNav(groupedFiles: FileTree<IndexFile>, level = 0):string {

	// Build <li>s
	var nav = ''
	groupedFiles.forEach(f => {
		/*
			DIR
		*/
		if (f.type === "dir") {
			const childrenNav = renderNav(f.children, level + 1);

			// Heading with link if there is an index file in the folder
			const indexFile = getIndexFile(f.children);
			if (indexFile) {
				const link = renderHREF(
					f.name,
					indexFile.value.href,
					indexFile.value.active
				);
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
			const { text, href, active } = f.value;

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
		return assertNever(f);
	});

	return `<ul>${nav}</ul>`;
}

/*
	<a href=...
*/
function renderHREF(text: string, href: string, active: boolean) {
	if (text == "README" || text == "index") {
		return '';
	}
	return `<a class="${active ? "active" : ""}" href="./${href}">${text}</a>`;
}

/*
	index.html or README.html
*/
function getIndexFile(files: FileTree<IndexFile>): File<IndexFile> | undefined {
	var indexFile = files.find(e => e.type === "file" && e.value.text === "index") as File<IndexFile>;
	if (!indexFile) {
		indexFile = files.find(e => e.type === "file" && e.value.text === "README") as File<IndexFile>;
	};
	return indexFile;
}
