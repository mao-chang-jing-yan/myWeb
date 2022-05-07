clearNone(){
  if [ "$(docker images | grep 'none' |  awk '{print $3}')" = "" ]; then
      return
  fi
  if [ "$(docker ps -a  | grep "$(docker images | grep 'none' |  awk '{print $3}')" | awk '{print $1}')" = "" ]
    then
      docker rmi $(docker images | grep "none" | awk '{print $3}')
      return
    else
      docker stop  $(docker ps -a  | grep "$(docker images | grep 'none' |  awk '{print $3}')" | awk '{print $1}')
      docker rm  $(docker ps -a  | grep "$(docker images | grep 'none' |  awk '{print $3}')" | awk '{print $1}')
      docker rmi $(docker images | grep "none" | awk '{print $3}')
  fi
}


clearNone
docker stop my_web_app
docker rm my_web_app
docker rmi my_web_app_container
docker build -t my_web_app_container .
docker run --name my_web_app -p 4200:80 -d my_web_app_container
clearNone
