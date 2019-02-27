## Config  
#### Install ssh key on new device  
```  
echo "{paste your ssh key contents}" >> ~/.ssh/newssh  
chmod -R 600 ~/.ssh/newssh  
```  
  
#### then, every time the CLI starts:  
```  
eval "$(ssh-agent -s)"  
ssh-add ~/.ssh/newssh  
Set a value in global config  
git config --global color.ui true  
git config --global user.name Paul\ Shorey  
git config --global user.email pshorey@beyond.ai  
git config --global push.default simple  
git config --global core.editor=ne  
git config --global submodule.recurse=true  
```  
Without `--global`, it edits local `./.git/config` file.  
  
  
## Best Practices  
**`git pull `** actually does git fetch;  
**`git merge`** actually, should do **`git pull --rebase`** which does not leave so many "merge" commits when working with others  
  
​