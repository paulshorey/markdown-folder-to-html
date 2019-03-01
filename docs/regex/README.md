# Regular Expressions  
  
[IDE Examples](./IDE-Examples.md)  
  
### Find/Replace  
Lets use the link above as an example. We want to convert local links from `.md` to `.html`...  
#### in IDE:  
```  
Find: (\[.*?\]\(\./.*?).md(\))  
Replace: $1.html$2  
```  
#### using Javascript:  
```  
str.replace(\(\[.*?\]\(\./.*?).md(\))\g, "$1.html$2");  
```  
So, no matter the complexity, just write the match/replace as:  
```  
str.replace(\        \g, "       ")  
```  
  
## Examples  
  
### HTML:  
search `(\s*)</script>` replace `</script>` puts all closing tags on same line  
  
`\ ?data-(.*?)"(.*?)" `  
`\ ?tabindex=(".*") `  
match all tag attributes starting with with or without leading spaces  
  
  
`li\ class(.*?)"(.*?)" `  
strip out class attribute from matching elements  
  
`<!--(.*?)\.(.*?)-->`  
match comments containing phrase "."  
  
search `href="(.*?)"` replace `href=""` clears all href attributes  
  
search `(\ *?)((?!\ ).*?)><span(.*?)</span> `  
replace `$1$2>\n$1  <span$3\n$1  </span> `  
to add indent span elements  
  
### Javascript:  
Remove all console.logs (or .warn .error, etc):  
`(\s?)console.(.?)\n([\w\s\W\t\n]*?)`