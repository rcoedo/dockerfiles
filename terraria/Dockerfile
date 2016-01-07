FROM mono:3.10.0

RUN apt-get -qq update && \
    apt-get -qqy install unzip

RUN curl -sL https://github.com/NyxStudios/TShock/releases/download/v4.3.12/tshock_4.3.12.zip > /tmp/tshock_4.3.12.zip && \
    unzip /tmp/tshock_4.3.12.zip -d /opt/tshock

EXPOSE 7777 7878
WORKDIR /opt/tshock
ENTRYPOINT ["mono", "--server", "--gc=sgen", "-O=all", "TerrariaServer.exe"]
CMD ["-world", "Terraria/Worlds/Default.wld", "-autocreate", "3"]
