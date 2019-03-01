# How To:  
### Edit remote files over SSH connection  
...not in the terminal, but using your favorite local IDE!  
<br /><br />  
  
#### On server,  
Install rsub:  
```  
wget -O /usr/local/bin/rsub \https://raw.github.com/aurora/rmate/master/rmate  
chmod a+x /usr/local/bin/rsub  
```  
#### On local,  
For _SublimeText3_, or _Textmate_, install **`rsub`** package.  
Or on _VsCode_, install **`remote-vscode`** package.  
Add proxy:  
```  
echo "RemoteForward 52698 localhost:52698" >> ~/.ssh/config  
```  
#### Now you can connect to the server and edit any file:  
```  
ssh user@hostname  
rsub ~/.profile  
```  
<br /><br />  
  
## Emacs text editor  
in addition to simply editing the file, it can act as the connection agent, and the remote filebrowser too ~~ so you can connect, browse, open, and edit files all in Emacs!