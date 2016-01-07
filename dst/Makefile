NAME=dst
IMAGE=$(USER)/$(NAME)
CONFIG=$(CONTAINER_CONFIG_ROOT)/$(NAME)

all: build

build:
	sudo docker build --rm -t $(IMAGE) .

world:
	sudo docker run --privileged=true --restart=always --name $(NAME) -itd -h $(NAME) -v $(CONFIG)/world:/home/steam/.klei/DoNotStarveTogether -p 10999:10999/udp -p 11200:11200/udp -p 11200:11200 --env-file="./env/world" $(IMAGE):latest

caves:
	sudo docker run --privileged=true --restart=always --name $(NAME)-caves -itd -h $(NAME)-caves -v $(CONFIG)/caves:/home/steam/.klei/DoNotStarveTogether -p 11000:11000/udp --env-file="./env/caves" --link $(NAME):world $(IMAGE):latest

clean:
	sudo docker rm $(NAME)
	sudo docker rmi $(IMAGE)
