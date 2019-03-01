#### Common Commands:  
  
**`mkdir -p`** recursively create directory  
**`ls -a`** show hidden files  
**`ls -a ~ | grep "^.n"`** find files in current folder that start with ".n"  
  
**`ps cax | grep node`** or **`ps aux | grep node`** find running processes matching "node"  
  
**`fg`** resume suspended process, after accidentally doing `Ctrl X`  
<br /><br />  
  
  
  
#### Files and Folders:  
  
**`cat file.js`** to view file contents, without bothering to open in a text editor  
  
or use **`rsub`** to [open the remote file](../ide/edit-over-SSH.md) in your local editor like Sublime/VsCode  
  
**`sudo echo "export PATH=\"$PATH:/usr/local/bin\"" >> /etc/profile`** write to bottom of file  
  
**`vim`** is a built-in and usually default text editor. [Nice Editor](../cli/ne.md) is much nicer!  
<br /><br />  
  
#### Permissions:  
  
**`chmod -R 600 ~/.ssh/YOUR-FILE`** you'll need to apply this to any newly created SSH key file before GIT can use it  
  
**`chown $USER -R /www`** or whatever folder or file you want to take back ownership of, if you run into write permission issues  
​  
#### Advanced Commands:  
  
<br /><br />  
  
  
