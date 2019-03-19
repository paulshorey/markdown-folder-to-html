# Consider [WebStorm](https://www.jetbrains.com/webstorm/)  
  
### Lately, I've had trouble with both Sublime Text and Vs Code.  
  
**VsCode** just does not indent JSX correctly, no matter what options I set, using the popular plugin "js-beautify" or "prettier" or the default formatter. After figuring out the best plugin and settings - it still sometimes breaks JSX.  
  
**Sublime Text** can format JSX using "Sublime-HTMLPrettify", but with this I could not enable "format on save" no matter what I did. It can do format on save with "js-beautify", but then it mangles JSX even worse than in VsCode (using the same engine and same .jsbeautifyrc file).  
  
This has been spurred by the **Prettier** plugin for Sublime text being broken recently. It had a bad release, and it took me forever to figure out that was actually the problem, because I have just come back to React programming after doing other things, so did not remember every setting. I tried every other plugin, switched to VsCode and messed around with that, but VsCode had its own issues. Even if I get Prettier to work again, it would be too little too late.  
  
What do you use? I will be asking around. Meanwhile...  
  
  
### WebStorm simply works,  
**and I have confidence that it will still behave a year from now.**  
  
It indents JSX correctly every time, and has program settings which all actually do what they're supposed to when you change them. WebStorm is a good little robot that does as you command it.  
  
Also, it lets you choose to put arguments on the same line as the brackets, or each on its own line. This is huge for readability. Sometimes one format is more legible. Other times it's not. Now you, the human, can decide which to use.  
  
Examples at the bottom of this page.  
  
  
### Other benefits...  
  
It has several more sophisticated features - ones you would have to spend a long time finding and configuring just right in open source editors.  
  
* When you re-name a file or folder, it can search all the source code in the project, and rename any references to that file, to prevent broken links.  
  
* Key mapping has a very easy search interface. Feel free to remap all your favorite shortcuts, including Macros.  
  
* Pressing "Backspace" (Delete on Mac) when all you have to the left is whitespace, WebStorm deletes all the way to the end of the previous line, with one key stroke.  
    * Vs Code deletes one indentation level at a time, then you must press again to delete the new line  
    * Sublime Text actually is even worse. When indenting using spaces (for example 4), instead of deleting 4 spaces at a time, it deletes one space at a time.  
  
* Lint tooltips are easier to use and read  
  
* Syntax highlighting - customizing the scheme takes a bit of getting used to when coming from Sublime/VsCode. But it has more powerful and more sophisticated syntax coloring! For example, WebStorm is smart enough to color function curly brackets differently than React variable curly brackets which contain the function.  
  
  
### Unfortunately,  
* It costs $130+. But, if you are trying to get paid for the code you write, then you can't afford not to use this. I have seen a productivity increase after just a couple days of getting used to it.  
  
  
### Code Example 1 (JSX)  
**Worst case scenario** (SublimeText using JsBeautify):  
Totally broken.  
```  
    Options.push( <  
        option value = {  
            option  
        } > {  
            option  
        } <  
        /option>  
    );  
```  
**Best case scenario** (VsCode using Prettier or default or JsBeautify):  
Notice the broken indentation. Also, why is that `<SuggestedRow...` indented by 2 spaces, while others by 4 spaces? Idk.  
```  
    SuggestedSelects.push(  
      <SuggestRow  
                    words={lists}  
                    domains={domains}  
                />  
    );  
```  
<br /><br />  
  
  
### Code Example 2 (code blocks: imports, if/else, functions, etc)  
Long-form:  
```  
import {  
  ValidateForm,  
  ValidateField,  
  ValidateButton,  
  validations  
} from 'src/containers/validateForm';  
```  
Short-form:  
```  
import { ValidateForm, ValidateField, ValidateButton, validations } from 'src/containers/validateForm';  
```  
Imagine many of these imports.  
**WebStorm** allows you to use either format. You just code it. WebStorm will detect which format you're using, and fix your indentation and spaces accordingly. VsCode and others force you to use the longer one, unless you specify in the setting to always use the all-in-line version.  
**Same case for open/closed functions and if statements.** Now you can choose how to organize the code.  
 <br /><br /><br />  
  
 # Getting Started with WebStorm  
  
 ### Hints:  
Disable all unnecessary left/bottom/top menus, to have a clean interface.  
In file browser left column, open file with one click instead of two:  
```  
    Project settings [...] > Autoscroll to source  
```  
 Best syntax highlighting:  
 ```  
    WebStorm > Preferences > Editor > Color Scheme > General > "Monokai Pro"  
```  
Install **Material Theme** when first installing WebStorm, or as a Plugin. Material refers to the WebStorm application UI (not the code/text) styling. Theme refers to the header,menus,file browser, status bar, etc. Use this Material `One Dark` "Theme" to nicely match the Monokai "Scheme" above.  
  
### Import Settings:  
Includes auto-format macro and key binding `Cmd + S` to Esc, Format, Save.  
Also key binding `Cmd + D` to do incremental find + add word to multiple cursor, like in Sublime/VsCode.  
And theme/colors/plugins.  
[WebStormSettings](../../assets/files/WebStormSettings.zip)  
```  
    File > Import Settings  
```  
**Keyboard shortcuts (for above settings file)**  
* Ctrl + F        ~ new folder  
* Ctrl + N        ~ new file  
* Ctrl + R        ~ rename file/folder  
 