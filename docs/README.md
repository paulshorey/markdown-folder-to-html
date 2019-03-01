# Paul's Web Development Knowledgebase  
A repository of useful tips, tricks, shortcuts, and general knowledge about web application development, because sometimes we forget.  
<br /><br />  
  
**This is an exciting journey**  
to find a decent solution for documenting small to medium size web projects. So far, it's a great success! Very easy to edit (markdown files), very easy to collaborate (same repository as the project), and very easy to convert to html (`npm run docs`).  
  
**This website was auto-generated**  
from [my repository](http://github.com/paulshorey/ps) `./docs` folder, using [paulshorey/markdown-folder-to-html](https://github.com/paulshorey/markdown-folder-to-html).  
  
**If anyone wants to contribute**  
to this knowledgebase, and share ownership, please contact me! I'll be happy to move this to its own repository.  
<br /><br />  
  
# This is a work in progress  
  
**Unfortunate issues:**  
* **Folders and files are stored and displayed in alphabetical order.**  
* **Currently, ALL folders MUST have README or index file.** <br />In general... folders are expanded/collapsed with CSS, so the functionality is very limited. Currently, it works and looks ok though. All folder names are always visible. File names are only visible when you click to open the containing folder.  
* File names can have spaces, but a space in the filename prevents you from linking to the file from other markdown files (this is a markdown issue).  
  
  
**Todo:**  
* Fix mobile CSS  
* Add functionality, when compiling .html files, to modify the original .md file... to add double space at the end of every line which does not already have them. (for Github flavor compatibility)  
* Test more edge-cases with navigation list items.  
* Fix underlying codebase to not convert filenames to (a href="") elements.