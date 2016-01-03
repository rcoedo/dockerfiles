NAME=dst
IMAGE=$(USER)/$(NAME)
CONFIG=$(CONTAINER_CONFIG_ROOT)/$(NAME)

all: build

build:
	sudo docker build --rm -t $(IMAGE) .

create:
	sudo docker run --privileged=true --restart=always --name $(NAME) -itd -h $(NAME) -v $(CONFIG)/klei:/home/steam/.klei/DoNotStarveTogether -p 10999:10999/udp --env-file=".env" $(IMAGE):latest

clean:
	sudo docker rm $(NAME)
	sudo docker rmi $(IMAGE)
