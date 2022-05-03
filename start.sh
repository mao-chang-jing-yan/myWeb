docker stop my_web_app
docker rm my_web_app
docker rmi my_web_app_container
docker build -t my_web_app_container .
docker run --name my_web_app -p 4200:4200 -d my_web_app_container
