# Configs  
#### Install ssh key on new device  
```bash  
echo "{paste your ssh key contents}" >> ~/.ssh/newssh  
chmod -R 600 ~/.ssh/newssh  
```  
  
#### then, every time the CLI starts:  
```bash  
eval "$(ssh-agent -s)"  
ssh-add ~/.ssh/newssh  
```  
#### set `~/.gitconfig` variables:  
```bash  
git config --global color.ui true  
git config --global user.name Paul\ Shorey  
git config --global user.email pshorey@beyond.ai  
git config --global push.default simple  
git config --global core.editor=ne  
git config --global submodule.recurse=true  
```  
Without `--global`, it edits local `./.git/config` file.  