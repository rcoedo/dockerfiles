NAME=samba
IMAGE=$(USER)/$(NAME)
PASSWORD=$(SMB_PASSWORD)
CONFIG=$(CONTAINER_CONFIG_ROOT)/$(NAME)

all: build

build: 
	sudo docker build --rm -t $(IMAGE) .

create:
	sudo docker run --privileged=true --restart=always --name $(NAME) -d -p 139:139 -p 445:445 -v $(CONFIG)/data:/mount $(IMAGE):latest -u "$(USER);$(SMB_PASSWORD)" -s "data;/mount;yes;no;no;$(USER)"

clean:
	sudo docker rm $(NAME)
	sudo docker rmi $(IMAGE)
