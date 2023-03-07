---
sidebar_position: 3
---

# Volume Mapping

Let's take a look at the default docker run command:

:::info
If on Windows replace the \ at the end of each line with ^
:::

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
    --network bridge \
    -p 8265:8265 \
    -p 8266:8266 \
    -e "TZ=Europe/London" \
    -e PUID=1000 \
    -e PGID=1000 \
    --log-opt max-size=10m \
    --log-opt max-file=5 \
    ghcr.io/haveagitgat/tdarr
```

Each line that begins with -v is a volume mapping. A volume on the host machine (on the left) is mapped to a volume inside the container (on the right).

You need to change the host mappings to suit your host machine. If your media is in multiple locations, you can add as many volume mappings you wish.

For example:

```
docker run -ti \
    -v /home/Tdarr/server:/app/server \
    -v /home/Tdarr/configs:/app/configs \
    -v /home/Tdarr/logs:/app/logs \
    -v /media:/media \
    -v /home/Movies:/home/Tdarr/Media/Movies \
    -v /home/TVShows:/home/Tdarr/Media/TVShows \
    -v /transcode_cache:/temp \
    -e "serverIP=0.0.0.0" \
    -e "serverPort=8266" \
    -e "webUIPort=8265" \
    -network bridge \
    -p 8265:8265 \
    -p 8266:8266 \
    -e "TZ=Europe/London" \
    -e PUID=1000 \
    -e PGID=1000 \
    --log-opt max-size=10m \
    --log-opt max-file=5 \
    ghcr.io/haveagitgat/tdarr
```

So now when you're using Tdarr, in the source folder if you put the following:

```
/home/Tdarr/Media/Movies
```
It will point to the files in `/home/Movies`

The following line relates to where Tdarr stores various files such as plugins, backups and samples:

```
-v /home/h/Desktop/server:/app/server \
```

Change the left side only. For example:
```
-v /home/h/Documents/Tdarr:/app/server \
```
