NAME=dns
IMAGE=$(USER)/$(NAME)
CONFIG=$(CONTAINER_CONFIG_ROOT)/$(NAME)

all: build

build: 
	sudo docker build --rm -t $(IMAGE) .

create:
	sudo docker run --privileged=true --restart=always --name $(NAME) -d -h $(NAME) -v $(CONFIG):/data -p 53:53/udp -p 10000:10000 $(IMAGE):latest

clean:
	sudo docker rm $(NAME)
	sudo docker rmi $(IMAGE)
