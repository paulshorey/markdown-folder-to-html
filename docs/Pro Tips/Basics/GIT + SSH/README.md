# Best Practices  
  
#### pull (update)  
When updating your local codebase, but a team mate changed some lines on the remote codebase, **`git pull`** actually does a **`merge`**. This leaves a mess of post-merge commit messages in your commit history.  
* Try doing **`git pull --rebase`** which does not leave so many "merge" commits when working with others.  
* **or**, try `git stash` first, then `git pull`, then `git stash pop` to avoid having a merge/commit message for each pull operation.  
  
#### rebase  
**`git rebase -i HEAD~3`** # 3, or however many commits you'd like to rename/squash  



# Automate
* ####Emacs has Magit, which is agreed to be the best set of GIT shortcuts  
* #### VsCode has GitLens, and a very handy Diff UI  
  
## I have some custom shortcuts  
#### include them, and other settings in `~/.profile` or `~/.zprofile`:  
```bash  
# GIT  
source ~/.aliases.sh;  
  
eval "$(ssh-agent -s)";  
ssh-add ~/.ssh/newssh;  
  
# EDITORS  
alias sublime='open -a /Applications/Sublime\ Text.app/Contents/MacOS/Sublime\ Text';  
alias vscode='open -a /Applications/Visual\ Studio\ Code.app/Contents/MacOS/Electron';  
alias webstorm='open -a /Applications/WebStorm.app/Contents/MacOS/webstorm';  
  
export EDITOR=ne  
  
# ETC  
```  
  
#### `~/.aliases.sh`:  
```bash  
#!/usr/bin/env bash  
  
# RESET TO HEAD  
function yx() {  
	# reset  
	echo resetting to HEAD;  
	git add .;  
	git reset HEAD -\-hard; # revert to remote  
	git pull;  
	# log  
	echo "\n\n";  
	echo "STATUS:";  
	git status;  
}  
  
# UNDO LAST COMMIT  
function yxx() {  
	echo resetting to previous commit;  
	git add .;  
	git reset HEAD^ -\-hard;  
	git pull;  
}  
function yz() {  
	git reset HEAD~1; # undo LOCAL commit which has not been pushed  
}  
  
# DELETE LOCAL  
function yd() {  
	# delete  
	echo DELETING LOCAL $1;  
	git branch -D $1;  
	# log  
	echo "\n\n";  
	echo "STATUS:";  
	git status;  
}  
  
# DELETE LOCAL AND REMOTE  
function ydd() {  
	echo DELETING REMOTE $1;  
	echo "\n\n";  
	# delete  
	if [ "$1" = "master" ]  
	then  
		echo cannot delete master;  
	elif [ "$1" = "dev" ]  
	then  
		echo CANNOT DELETE DEV;  
	else  
		git branch -D $1;  
		git push origin :$1;  
	fi;  
}  
  
# UPDATE  
function ya() {  
	echo PULLING $1;  
	echo "\n";  
	# update  
	git fetch;  
	if [ $1 ]  
	then  
		git checkout $1;  
		git pull;  
	else  
		git pull;  
	fi;  
	# log  
	echo "\n\n";  
	echo "STATUS:";  
	git status;  
}  
  
# UPDATE (WITH GIT STASH / POP) - USE WHEN COLLABORATION  
function yaa() {  
	echo STASHING AND PULLING $1;  
	echo "\n";  
	# update  
	git stash;  
	git pull;  
	git stash pop;  
	# log  
	echo "\n\n";  
	echo "STATUS:";  
	git status;  
}  
  
# FIX MARKDOWN for GitHub flavor  
 function ghmd() {  
 	perl -pi -e 's/[\s]*?\n/\ \ \n/g' *.md;  
 	perl -pi -e 's/[\s]*?\n/\ \ \n/g' */*.md;  
 	perl -pi -e 's/[\s]*?\n/\ \ \n/g' */*/*.md;  
 	perl -pi -e 's/[\s]*?\n/\ \ \n/g' */*/*/*.md;  
 }  
  
# SAVE (BUT FIRST RUN DOCS)  
function yds() {  
	# First, go through and fix markdown files to be GitHub compatible  
	ghmd;  
  
	# convert docs to html  
    npm run docs;  
  
    # save  
    ys $1;  
}  
  
# SAVE  
function ys() {  
	# First, go through and fix markdown files to be GitHub compatible  
	ghmd;  
  
	# branch=$(git symbolic-ref --short HEAD);  
	# if [ $branch = dev ]  
	# then  
	# 	echo cannot merge $branch;  
	# elif [ $1 = staging ] || [ $1 = master ]  
	# then  
	# 	echo cannot merge to $1;  
	# else  
		echo COMMITTING $1;  
		echo "\n\n";  
		# pull  
		git pull;  
		# git stash;  
		# git pull;  
		# git stash pop;  
		# save  
		git add .;  
		git commit -m $1;  
		# push  
		echo "\n\n";  
		echo PUSHING TO $branch;  
		git push;  
		# log  
		echo "\n\n";  
		echo "STATUS:";  
		git status;  
	# fi;  
}  
function yss() {  
	# First, go through and fix markdown files to be GitHub compatible  
	ghmd;  
  
	# branch=$(git symbolic-ref --short HEAD);  
	# if [ $branch = dev ]  
	# then  
	# 	echo cannot merge $branch;  
	# elif [ $1 = staging ] || [ $1 = master ]  
	# then  
	# 	echo cannot merge to $1;  
	# else  
		echo COMMITTING $1;  
		echo "\n\n";  
		# pull  
		git stash;  
		git pull;  
		git stash pop;  
		# save  
		git add .;  
		git commit -m $1;  
		# push  
		echo "\n\n";  
		echo PUSHING TO $branch;  
		git push;  
		# log  
		echo "\n\n";  
		echo "STATUS:";  
		git status;  
	# fi;  
}  
  
# MERGE  
function ym() {  
	branch=$(git symbolic-ref --short HEAD);  
	echo MERGING $branch TO $1;  
	echo "\n\n";  
  
	# if [ $branch = dev ]  
	# then  
	# 	echo cannot merge $branch;  
	# elif [ $1 = staging ] || [ $1 = master ]  
	# then  
	# 	echo cannot merge to $1;  
	# else  
		if [ $1 ]  
		then  
  
			git fetch;  
			git checkout $1;  
			git pull;  
  
			if [ $2 ]  
			then  
				2=merging$branch$2;  
			else  
				2=merging$branch;  
			fi;  
  
			echo $2;  
			git merge $branch -m $2;  
			git push;  
  
			# log  
			echo "\n\n";  
			echo "STATUS:";  
			git status;  
		fi;  
	# fi;  
}  
  
```