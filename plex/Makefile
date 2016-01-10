NAME=plex
IMAGE=$(USER)/$(NAME)
CONFIG=$(CONTAINER_CONFIG_ROOT)/$(NAME)

all: build

build: 
	sudo docker build --rm -t $(IMAGE) .

create:
	sudo docker run --privileged=true --restart=always --name $(NAME) -d -h $(NAME) -v $(CONFIG)/config:/config -v $(CONFIG)/media:/data -p 32400:32400 $(IMAGE):latest

clean:
	sudo docker rm $(NAME)
	sudo docker rmi $(IMAGE)
