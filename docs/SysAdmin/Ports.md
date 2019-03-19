<script>window.scrollTo(0,document.body.scrollHeight);</script>  
  
**Servers usually serve incoming visitor web traffic on port 80. So, http://google.com is the same as http://google.com:80**  
<br />  
  
**However**, on your local Macbook, ports below **1000** are blocked. So, running a Node webserver on port **80** will not work. The browser url will try to go to port 80, but that request will not find its way to your system process.  
<br />  
  
**That's ok, we can run our server on port 1080 instead.**  
<br />  
  
But if we want to run the server at just `http://localhost`, not `http://localhost:1080`? Then we have to redirect all incoming requests from port 80 to port 1080:  
  
```  
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 1080  
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 1443  
ufw allow 80/tcp  
ufw allow 443/tcp  
```  
  
