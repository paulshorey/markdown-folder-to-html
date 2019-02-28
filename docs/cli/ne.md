# EDITOR=ne  
A "nice editor" for command line and GIT commits. By far the most intuitive CLI editor to use, supports some basic features and bindings. `Ctr S` to save. `Ctr Q` to quit. `Esc Esc` for dropdown UI, right in the terminal.  
  
#### Make Default:  
```  
echo "export EDITOR=ne" >> ~/.zprofile  
```  
  
#### Documentation:  
[http://paulshorey.com/files/docs_ne.pdf](http://paulshorey.com/files/docs_ne.pdf)  
  
## Keyboard Shortcuts:  
(including the custom ~/.ne/.keys configuration below)  
  
> **^s**, **^q** - save, quit  
> **^z**, **^x**, **^c**, **^v**  - undo, cut, copy, paste  
> **^y**  - delete current line  
> **^u**  - paste deleted line  
>  
> **^d** - delete line  
> **^w**, **^e** - start of, end of line  
  
## Custom Key Bindings:  
1. hit: **`^k`**  
2. type: **`kc`**  
3. hit **`key`** to see its hex code and currently bound command  
4. **`echo 'KEY {CODE} {ACTION}' >> ~/.ne/.keys`**  
  
> **`fn + a`**  
> To convert any key (`delete`) to fn-key (`fn + delete`), just add a prefix `0x` before the key code.  
> Key code for `delete` is `115`. So, key code for `fn + delete` would be `0x115`.  
  
**Documentation:** http://www.emerson.emory.edu/services/editors/ne/Key_Bindings.html  
**Defaults:** https://github.com/vigna/ne/blob/master/doc/default.keys​  
  
## Sample ~/.ne/.keys file:  
  
    # [delete]  
    KEY     0x7f    Backspace  
    # [ctrl]+[z]  
    KEY     0x1a    Undo  
    # [ctrl]+[r]  
    KEY     0x12    Redo  
  
    # [ctrl]+[d](delete line)  
    KEY     0x04    DL  
    # [ctrl]+[w]=(start of line)  
    KEY     0x17    SOL  
    # [ctrl]+[e]=(end of line)  
    KEY     0x05    EOL  
