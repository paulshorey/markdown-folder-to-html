# Paul's Web Development Notes  
1. **From a front-end perspective, for a JavaScript tech stack...** a repository of useful tips, tricks, shortcuts, and general knowledge about web application development. I've been doing this for 10 years now, and have regularly found myself coming back to a set of technologies after 6 months or more, and forgetting their settings and gotchas. Maybe this will also help others.  
2. **This is an experiment, and a WIP...** I've been trying to find a decent solution for documenting small web projects. So far, this is a great success! Very easy to edit (markdown files), very easy to collaborate (same repository as the project), and very easy to convert to html (`npm run docs`).  
<br />  
  
# This is not a replacement for real documentation  
### Still use [Documentation.JS](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md)  
```javascript  
    /**  
     * This function adds one to its input.  
     * @param {number} input any number  
     * @returns {number} that number, plus one.  
     */  
    function addOne(input) {  
      return input + 1;  
    }  
```  
Instead, this is a way to document more abstract or trivial ideas, in a more literary format.  
<br /><br />  
  
  
# This is a work in progress  
  
**Unfortunate issues:**  
* **Folders and files must be in alphabetical order.** So, naming is like writing poetry.  
* File names can have spaces, but a space in the filename prevents you from linking to the file from other markdown files (this is a markdown issue).  
  
  
**Todo:**  
* Fix mobile layout  
* When compiling .html files, to modify the original .md file... add double space at the end of every line (for Github-flavor compatibility). Currently implemented as a `git commit` hook, but needs to first remove spaces before adding new ones.  
* Maybe fix underlying codebase to not convert filename strings to (a href="") elements  
* Experiment with this: https://markdowntomedium.com/  
<br /><br />  
  
  
# This website was auto-generated  
from [my repository](http://github.com/paulshorey/ps) `./docs` folder, using [paulshorey/markdown-folder-to-html](https://github.com/paulshorey/markdown-folder-to-html), which is an experimental copy of [joakin/markdown-folder-to-html](https://github.com/joakin/markdown-folder-to-html).  
<br /><br />  