---
sidebar_position: 1
---

# Run and Compose


### Run

If using Docker, please still read the previous page of instructions as the configurations will be the same except you'll be setting the variables through env vars instead of the Config.json files (except for the pathTranslators as those can't be set through env vars).


There are amd64 containers (most users will need these) and armv7/armv8 containers (for Raspberry Pi, Apple M1 etc):

```
ghcr.io/haveagitgat/tdarr
ghcr.io/haveagitgat/tdarr_node
```

The 'tdarr' container contains Tdarr_Server and a Tdarr_Node

Set internalNode=true to enable the Node in the Server container.

The 'tdarr_node' container contains a Tdarr_Node

:::info
For the examples, if on Windows replace the \ at the end of each line with a ^
:::

:::caution
If running on Raspberry Pi, you may need to add `--privileged`
:::

The following shows an example Docker run command for the 'tdarr' container:

```
docker run -ti \
    -v /docker/tdarr/server:/app/server \
    -v /docker/tdarr/configs:/app/configs \
    -v /docker/tdarr/logs:/app/logs \
    -v /media:/media \
    -v /transcode_cache:/temp \
    -e "serverIP=0.0.0.0" \
    -e "serverPort=8266" \
    -e "webUIPort=8265" \
    -e "internalNode=true" \
    -e "nodeName=MyInternalNode" \
    --network bridge \
    -p 8265:8265 \
    -p 8266:8266 \
    -e "TZ=Europe/London" \
    -e PUID=1000 \
    -e PGID=1000 \
    -e "NVIDIA_DRIVER_CAPABILITIES=all" \
    -e "NVIDIA_VISIBLE_DEVICES=all" \
    --gpus=all \
    --device=/dev/dri:/dev/dri \
    --log-opt max-size=10m \
    --log-opt max-file=5 \
    ghcr.io/haveagitgat/tdarr
```

:::info
As of 2.00.17, nodeIP and nodePort variables are no longer needed.
:::

Where setting internalNode=true/false enables or disables the Tdarr Node running in the Server container.

The following shows an example Docker run command for the 'tdarr_node' container (includes extra options for enabling GPUs):

```
docker run -ti \
    -v /docker/tdarr/configs:/app/configs \
    -v /docker/tdarr/logs:/app/logs \
    -v /media:/media \
    -v /transcode_cache:/temp \
    -e "nodeName=MyFirstTdarrNode" \
    -e "serverIP=0.0.0.0" \
    -e "serverPort=8266" \
    --network bridge \
    -p 8268:8268 \
    -e "TZ=Europe/London" \
    -e PUID=1000 \
    -e PGID=1000 \
    -e "NVIDIA_DRIVER_CAPABILITIES=all" \
    -e "NVIDIA_VISIBLE_DEVICES=all" \
    --gpus=all \
    --device=/dev/dri:/dev/dri \
    --log-opt max-size=10m \
    --log-opt max-file=5 \
    ghcr.io/haveagitgat/tdarr_node
```

The Server data (database, samples, plugins etc) is now stored in '/app/server'.

As mentioned above, both the Server and the Node need to have access to the same media and transcode cache paths.

To make configuration easier and to set pathTranslators (if required), you can map the configs folder on both the Server and Node:

```
-v /tdarr_configs:/app/configs \
```

When viewing '/tdarr_configs', on the host machine, you'll be able to see the Server and Node configuration files:

```
Tdarr_Node_Config.json
Tdarr_Server_Config.json
```

Note: Env vars take precedence over the JSON configs. Also, the following folders are chowned on start-up:

```
/home/Tdarr
/temp
/logs
/app
```


Please use the Docker config tool if you need help configuring the Docker run command. If you are new to Docker, have a look at the Docker Guide on the left

### Compose

The following shows a docker-compose example

```
version: "3.4"
services:
  tdarr:
    container_name: tdarr
    image: ghcr.io/haveagitgat/tdarr:latest
    restart: unless-stopped
    network_mode: bridge
    ports:
      - 8265:8265 # webUI port
      - 8266:8266 # server port
      - 8267:8267 # Internal node port
      - 8268:8268 # Example extra node port
    environment:
      - TZ=Europe/London
      - PUID=${PUID}
      - PGID=${PGID}
      - UMASK_SET=002
      - serverIP=0.0.0.0
      - serverPort=8266
      - webUIPort=8265
      - internalNode=true
      - nodeName=MyInternalNode
    volumes:
      - /docker/tdarr/server:/app/server
      - /docker/tdarr/configs:/app/configs
      - /docker/tdarr/logs:/app/logs
      - /media:/media
      - /transcode_cache:/temp


# node example
  tdarr-node:
    container_name: tdarr-node
    image: ghcr.io/haveagitgat/tdarr_node:latest
    restart: unless-stopped
    network_mode: service:tdarr
    environment:
      - TZ=Europe/London
      - PUID=${PUID}
      - PGID=${PGID}
      - UMASK_SET=002
      - nodeName=MainNode
      - serverIP=0.0.0.0
      - serverPort=8266
    volumes:
      - /docker/tdarr/configs:/app/configs
      - /docker/tdarr/logs:/app/logs
      - /media:/media
      - /transcode_cache:/temp
```
