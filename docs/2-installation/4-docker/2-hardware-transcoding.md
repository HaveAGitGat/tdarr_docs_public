---
sidebar_position: 2
---

# Hardware Transcoding

Tdarr containers support NVENC and VAAPI hardware transcoding.

If using NVENC on an Ubuntu or Debian host, make sure to install the [NVIDIA container toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html) on the host.

You can quickly verify that you have your host system set up correctly by running the following Docker run commands. Check the transcode processes finish successfully.

### FFmpeg NVENC
```
docker run \
    -e "NVIDIA_DRIVER_CAPABILITIES=all" \
    -e "NVIDIA_VISIBLE_DEVICES=all" \
    --gpus=all \
    ghcr.io/haveagitgat/tdarr_node:latest \
    /bin/bash \
    -c 'curl \
            -o /tmp/sample.mkv \
            -l https://samples.tdarr.io/api/v1/samples/sample__1080__libx264__aac__30s__video.mkv; \
        ffmpeg \
            -i /tmp/sample.mkv \
            -c:v:0 hevc_nvenc \
            /tmp/sample-out.mkv'
```

### FFmpeg VAAPI
```
docker run \
    --device=/dev/dri:/dev/dri \
    ghcr.io/haveagitgat/tdarr_node:latest \
    /bin/bash \
    -c 'curl \
            -o /tmp/sample.mkv \
            -l https://samples.tdarr.io/api/v1/samples/sample__1080__libx264__aac__30s__video.mkv; \
        ffmpeg \
            -hwaccel vaapi -hwaccel_device /dev/dri/renderD128 \
            -hwaccel_output_format vaapi \
            -i /tmp/sample.mkv \
            -c:v:0 hevc_vaapi \
            /tmp/sample-out.mkv'
```

### HandBrake NVENC
```
docker run \
    -e "NVIDIA_DRIVER_CAPABILITIES=all" \
    -e "NVIDIA_VISIBLE_DEVICES=all" \
    --gpus=all \
    ghcr.io/haveagitgat/tdarr_node:latest \
    /bin/bash \
    -c 'curl \
            -o /tmp/sample.mkv \
            -l https://samples.tdarr.io/api/v1/samples/sample__1080__libx264__aac__30s__video.mkv; \
        HandBrakeCLI \
            -i "/tmp/sample.mkv" \
            -o "/tmp/sample-out.mkv" \
            -Z "H.265 MKV 2160p60" \
            -e nvenc_h265'
```