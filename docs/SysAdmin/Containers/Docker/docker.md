<script>window.scrollTo(0,document.body.scrollHeight);</script>

# Dockerfiles and Docker Compose  
  
## Commands:  
  
* **`docker container ls`** see list of running containers  
* **`docker stats`** see memory/cpu % of each container  
  
* **`docker build`** runs **`docker-compose.yml`** in the same folder  
* **`docker-compose up`** runs **`docker-compose.yml`** in the same folder  
  
* **`docker stop $(docker ps -a -q)`** stop all (or specify container ID)  
* **`docker rm $(docker ps -a -q)`** remove all (or specify container ID)  
  
* **`docker rmi $(docker images -a -q)`** remove all images (or specify image ID)  
* **`docker images -f "dangling=true" -q`** list all dangling (untagged) images  
* **`docker rmi $(docker images -f "dangling=true" -q)`** remove all dangling (untagged) images  
  
* **``**  
  
$(docker ps -a) can not be done over SSH, because it will be executed in the local terminal.  
[coderwall.com/.../stop-remove-all-docker-containers](https://coderwall.com/p/ewk0mq/stop-remove-all-docker-containers)  
  
