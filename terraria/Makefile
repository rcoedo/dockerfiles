NAME=terraria
IMAGE=$(USER)/$(NAME)
CONFIG=$(CONTAINER_CONFIG_ROOT)/$(NAME)

WORLD="$(USER).wld"

all: build

build:
	sudo docker build --rm -t $(IMAGE) .

create:
	sudo docker run --privileged=true --restart=always --name $(NAME) -d -h $(NAME) -v $(CONFIG):/config \
		-p 7777:7777 -p 7878:7878 \
		-v $(CONFIG)/worlds:/opt/tshock/worlds \
		-v $(CONFIG)/logs:/opt/tshock/logs \
		-v $(CONFIG)/config:/opt/tshock/config \
		$(IMAGE):latest \
		-configpath /opt/tshock/config \
		-logpath /opt/tshock/logs \
		-worldpath /opt/tshock/worlds \
		-world /opt/tshock/worlds/$(world) \
		-autocreate 3 2> /dev/null

clean:
	sudo docker rm $(NAME)
	sudo docker rmi $(IMAGE)
