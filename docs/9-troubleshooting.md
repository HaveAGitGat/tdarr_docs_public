---
sidebar_position: 9
---

# Troubleshooting


### Tdarr_Node - Server not alive IP:xxx PORT:xxx

This is normally a firewall or networking issue.

First, navigate to the Tdarr Server `IP:PORT/api/v2/status` address in the browser and check it's running. E.g. `localhost:8266/api/v2/status`.
You should see some status details:

```
{
    "status":"good",
    "isProduction":true,
    "os":"win32",
    "version":"2.00.18",
    "uptime":346
}
```



Try putting the local IP address of the server when setting **serverIP** in the Node Config instead of using **localhost** or **0.0.0.0**.

 If the Server and Node are on different machines, it's normally a firewall port issue (common when running a Node on a Windows machine) so you need to allow communication through ports 8266 and 8267 (default Server and Node ports).

---
### Tdarr Node keeps registering

 This happens when the Node can contact the server but the server can't contact the Node. Make sure you've set the `serverIP` correctly in the `Config.json` files. Also make sure that your firewall is not blocking ports `8266` and `8267`(default Server and Node ports).


---
### Tdarr keeps crashing on Unraid

 Seems to be an issue with the Unraid cache/mover. Solution [here](https://forums.unraid.net/topic/84070-support-haveagitgat-tdarr-audiovideo-library-analytics-transcode-automation/?do=findComment&comment=1052460).

---
### I can't see the Tdarr UI in the browser, it just says Tdarr_Server

Tdarr Server runs on port 8266, the UI runs on port 8265.

---
### OpenEncodeSessionEx failed: out of memory

If using an NVIDIA GPU, the card has most likely hit the stream limit.

Limits per GPU [here](https://www.elpamsoft.com/?p=Plex-Hardware-Transcoding).


---
### CUDA_ERROR_NO_DEVICE: no CUDA-capable device

https://github.com/HaveAGitGat/Tdarr/issues/666#issuecomment-1269275184

https://github.com/HaveAGitGat/Tdarr/issues/666#issuecomment-1368171781


 