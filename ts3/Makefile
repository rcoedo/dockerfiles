NAME=ts3
IMAGE=$(USER)/$(NAME)
CONFIG=$(CONTAINER_CONFIG_ROOT)/$(NAME)

all: build

build: 
	sudo docker build --rm -t $(IMAGE) .

create:
	sudo docker run --privileged=true --restart=always --name $(NAME) -d -p 9987:9987/udp -p 30033:30033 -p 10011:10011 -v $(CONFIG):/teamspeak3 $(IMAGE):latest

clean:
	sudo docker rm $(NAME)
	sudo docker rmi $(IMAGE)
