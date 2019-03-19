### Markdown:  

**CLI command "--help" output lines to Markdown file**  
Find `\n(.*?) (([a-z]+) )?([A-Z])`  
Replace `\n**$1**\t_$2_\t$4`  
  
  
**bold**  
`\*\*([^\n```.]*)\*\*`  
Replace with bold inline code block  
**`$1`**  
  
  
**between parentheses and newline**  
`\)\s?(.*?)\s?\n`  
Make the non-whitespace sentence of it bold  
`) \t**$1**\n`  
  
  
**whitespace on the left side of bold stars**  
`\*\*\s?([A-Za-z])`  
Remove that whitespace  
`**$1`  
  
  
  