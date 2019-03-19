<script>window.scrollTo(0,document.body.scrollHeight);</script>

# docker compose  
https://docs.docker.com/engine/reference/builder/  
  
```bash  
# Build everything defined in the .yml file  
docker-compose build  
  
# Bring up the whole application defined in .yml file (all the individual services)  
docker-compose up -d  
  
# Bring up only one service defined in the .yml file  
docker-compose up -d rte  
  
# Or force a build during with the up command  
docker-compose up -d --build  
```  
  
#### Build current folder (Dockerfile), allow port 8080  
```bash  
version: '3'  
  
services:  
  servicename1:  
    image: localrepo/name1:0.0.1  
    build: .  
    ports:  
      - "8080:8080"  
```