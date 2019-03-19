import { FileTree, FileFolder, FileNode, StringFile } from "./types";
import { assert } from "console";

const abcIndex = function(letterOrWord: any) {
  const letter = letterOrWord.charAt(0);
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  return alphabet.indexOf(letter);
};

export default function groupByPath(
  tree: FileTree<StringFile>,
  value: string
): FileTree<StringFile> {

  const paths = value.split("/");
  let currentTree = tree;
  paths.forEach((path, i) => {

    // If we're on the last path segment, we just add it
    if (i === paths.length - 1) {

      currentTree.unshift({ type: "file", value });

    } else {

      let folder: FileNode<StringFile> | undefined = currentTree.find(
        f => f.type === "dir" && f.name === path
      );

      // Check again for type file, but we filtered above... typescript stuff
      if (!folder || folder.type === "file") {
        folder = { type: "dir", name: path, children: [] };
        currentTree.push(folder);
      }
      currentTree = folder.children;

    }
  });
  tree.sort(function(a, b) {
    let a_name, b_name;
    if (a.name
    return abcIndex(a.name) - abcIndex(b.name);
  });
  return tree;
}
