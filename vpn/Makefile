NAME=vpn
IMAGE=$(USER)/$(NAME)
CONFIG=$(CONTAINER_CONFIG_ROOT)/$(NAME)

all: build

build:
	sudo docker build --rm -t $(IMAGE) .

# Initialize vpn config
init:
	sudo docker run --privileged=true -v $(CONFIG):/etc/openvpn --rm $(IMAGE):latest ovpn_genconfig -u udp://$(VPN_URL)
	sudo docker run --privileged=true -v $(CONFIG):/etc/openvpn --rm -it $(IMAGE):latest ovpn_initpki

# Create a server container
create:
	sudo docker run --privileged=true --restart=always --name $(NAME) -d -h $(NAME) -v $(CONFIG):/etc/openvpn -p 1194:1194/udp --cap-add=NET_ADMIN $(IMAGE):latest

# Create a certificate. CLIENT=clientname
certificate:
	sudo docker run --privileged=true -v $(CONFIG):/etc/openvpn --rm -it $(IMAGE):latest easyrsa build-client-full $(client) nopass

# Get a certificate. CLIENT=clientname
get:
	sudo docker run --privileged=true -v $(CONFIG):/etc/openvpn --rm $(IMAGE):latest ovpn_getclient $(client) > $(client).ovpn

clean:
	sudo docker rm $(NAME)
	sudo docker rmi $(IMAGE)
