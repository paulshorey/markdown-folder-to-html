# Important for collaborating:  
  
After agreeing on and sticking to **tabs** or 2 spaces or 4 spaces, maybe the most useful thing to do next is:  
  
Make sure your **and your teammates'** text-editor or IDE will not format your code unexpectedly.  
  
### If using VS CODE:  
* Install the **`js beautify`** plugin  
* Add **`.jsbeautifyrc`** file to the root of your project, to specify formatting rules.  
* By default, it formats every file on save! To turn this off, toggle **`files.autoSave`** in Vs Code preferences.  
  
### If using Sublime Text:  
* Install `htmlprettify` plugin: https://github.com/victorporof/Sublime-HTMLPrettify  
* Use the same **`.jsbeautifyrc`** file as your teammates use for Vs Code.  
* Sublime does not format on save by default. Toggle **`format_on_save`** in HTMLPrettify plugin options.  
  
### If using WebStorm:  
* `Webstorm > Preferences > Editor > Code Style > JavaScript` no manually editing a JSON file, use checkboxes/dropdowns  
* To auto-format on save, you must create a Macro, which is also different...  
    1. `Edit > Macros > Start Macro Recording`  
    2. Press `Esc`, to clear any selected text, which will affect your formatting  
    3. Press `Cmd + Opt + L` to format the current file  
    4. Select `File > Save All` in top bar. Do NOT just hit `Cmd + S`.  
    5. Click `Stop` in Macro notification on the bottom, to stop recording.  
    6. `Webstorm > Preferences > Keymap`  
        * Find your newly created Macro. Right click, and add key binding `Cmd + S`.  
        * Agree to un-bind that key from its other function (simple save-all).  
  
### If using something else:  
* Just make sure whatever settings you use matches your teammates' settings.  
  
### Otherwise, note:  
* This is a great online code beautifier: <br />https://www.10bestdesign.com/dirtymarkup/  
* Unlike others, this one actually maintains HTML tags hierarchy and indentation  
  
