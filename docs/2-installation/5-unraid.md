---
sidebar_position: 5
---

# Unraid

Read the above Docker instructions to get an understanding of the setup.


Use the Unraid CA store templates or configure the container settings based on the Docker configs above.

Enabling hardware transcoding/nvenc with tdarr:

Add the following settings your to docker config:

```
Extra Parameters = --runtime=nvidia
NVIDIA_VISIBLE_DEVICES = GPU-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NVIDIA_DRIVER_CAPABILITIES = all
```