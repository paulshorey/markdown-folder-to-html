<script>window.scrollTo(0,document.body.scrollHeight);</script>  
  
### Continuous Integration the quick and easy way...  
Assuming your codebase is in /www/$(hostname)  
  
#### Optionally, install Yarn. Othwerwise continue and use NPM:  
```  
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add  
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list  
sudo apt-get update && sudo apt-get install yarn  
```  
#### /etc/crontab:  
```  
@reboot root bash /www/$(hostname)/_cron/deploy.sh  
```  
#### /www/ps-api/_cron/deploy.sh:  
```  
eval "$(ssh-agent -s)"  
ssh-add ~/.ssh/gitlab  
  
cd /www/$(hostname)  
git reset HEAD -\-hard;  
git pull  
npm install  
```  
#### /www/ps-api/_deploy.js  
```  
var fs = require('fs');  
var express = require('express');  
var http = require('http');  
var app = express();  
  
app.set('port', 9999);  
  
app.post('/_deploy', function(req, res) {  
  
    // done  
    res.status(200).json({  
        message: 'Github Hook received!'  
    });  
  
    // apply  
    var spawn = require('child_process').spawn,  
        deploy = spawn('sh', ['_deploy.sh']);  
  
});  
  
http.createServer(app).listen(app.get('port'), function() {  
    console.log('Express server listening on port ' + app.get('port'));  
});  
```  
#### So,  
your _deploy.js Node script will be listening to port http://YOUR-DOMAIN:9999/_deploy  
  
#### Then,  
your GitHub (or GitLab, or CMS) account will make a POST request to this url, which will trigger this script to run, which will trigger the "deploy.sh" script to run, which will GIT reset and pull the entire directory from your latest change in your repository.  
