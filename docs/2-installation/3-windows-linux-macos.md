---
sidebar_position: 3
---

# Windows, Linux and macOS


### Download links
Download the relevant Tdarr_Updater:

##### [Tdarr_Updater win32_x64](https://f000.backblazeb2.com/file/tdarrs/versions/2.00.15/win32_x64/Tdarr_Updater.zip)
##### [Tdarr_Updater linux_x64](https://f000.backblazeb2.com/file/tdarrs/versions/2.00.15/linux_x64/Tdarr_Updater.zip)
##### [Tdarr_Updater linux_arm](https://f000.backblazeb2.com/file/tdarrs/versions/2.00.15/linux_arm/Tdarr_Updater.zip)
##### [Tdarr_Updater linux_arm64](https://f000.backblazeb2.com/file/tdarrs/versions/2.00.15/linux_arm64/Tdarr_Updater.zip)
##### [Tdarr_Updater darwin_x64 (macOS)](https://f000.backblazeb2.com/file/tdarrs/versions/2.00.15/darwin_x64/Tdarr_Updater.zip)
##### [Tdarr_Updater darwin_arm64 (macOS)](https://f000.backblazeb2.com/file/tdarrs/versions/2.00.15/darwin_arm64/Tdarr_Updater.zip)

:::info
Instead of using the Updater, you can download Tdarr_Server and Tdarr_Node directly [here](https://f000.backblazeb2.com/file/tdarrs/versions.json)
:::

Unzip it.

If on Linux/macOS it's best to run the packages from a terminal so you can see the output. Windows will run them from a terminal automatically.

Run `/Tdarr_Updater` (if on Linux/macOS you may need to give the file execution permissions by running `chmod +x Tdarr_Updater`)

2 Modules will be downloaded by the updater

### Run

Execute the following binaries the following from a terminal

```
/Tdarr_Server/Tdarr_Server
/Tdarr_Node/Tdarr_Node
```

You should be able to see these tests run in the logs:

```
[INFO] Tdarr_Server - Binary test 1: handbrakePath working
[INFO] Tdarr_Server - Binary test 2: ffmpegPath working
[INFO] Tdarr_Server - Binary test 3: mkvpropeditPath working

[INFO] Tdarr_Server - Scanner test 1: FFprobe working
[INFO] Tdarr_Server - Scanner test 2: Exiftool working
[INFO] Tdarr_Server - Scanner test 3: Mediainfo working
[INFO] Tdarr_Server - Scanner test 4: CCExtractor working
[INFO] Tdarr_Node - Binary test 1: handbrakePath working
[INFO] Tdarr_Node - Binary test 2: ffmpegPath working
[INFO] Tdarr_Node - Binary test 3: mkvpropeditPath working
```
You can now visit  http://localhost:8265/ in a browser and use the application. See below for further configuration.

### Configs

If handbrakePath or ffmpegPath aren't working, you'll need to set the paths manually in /configs/Tdarr_Server_Config.json and /configs/Tdarr_Node_Config.json

Close both down once init has finished (no new info is coming up on the screen).

Open `/configs/Tdarr_Server_Config.json`:

```json
{
  "serverPort": "8266",
  "webUIPort": "8265",
  "serverIP": "0.0.0.0",
  "handbrakePath": "",
  "ffmpegPath": ""
}
```

Change the serverPort and webUIPort if desired.

Most Tdarr packages come with FFmpeg and Handbrake but if required (i.e. if the binary tests above don't work), add a handbrakePath and ffmpegPath.

:::warning
If using backslashes in paths, make sure to use double backlashes **\\\\** or the JSON will be **corrupt**
:::


```json
{
  "ffmpegPath": "C:\\ffmpeg\\ffmpeg.exe"
}
```
or

```json
{
  "ffmpegPath": "C:/ffmpeg/ffmpeg.exe"
}
```

Open /configs/Tdarr_Node_Config.json:
```json
{
  "nodeName": "QUkJYfSSD",
  "serverIP": "0.0.0.0",
  "serverPort": "8266",
  "handbrakePath": "",
  "ffmpegPath": "",
  "pathTranslators": [
    {
      "server": "",
      "node": ""
    }
  ]
}
```
If running the Node and Server on the same machine leave the IPs as-is else set the machine IPs.

If required, set handbrakePath and ffmpegPath. If running a Node on a different machine to the Server, make sure to specify the serverIP address.

If running on Linux x64 and wanting to use CCExtractor, make sure to install `libtesseract-dev`.

You can run 2 Nodes on the same machine but make sure they have different config folders else they'll interfere with one-another.

### Path translators


:::caution
Make sure the Node and Server machines have the same media library and transcode cache locations. In other words, the cache and library must be shared between the Node and Server.
For example, W:\media on the Server should point to the same location as W:\media on the Node machine.
:::

![Docusaurus](/img/docs/paths_example.jpg)

If you are running the Server on Linux/macOS system and the Node on a Windows system (or vice versa), you can use the path translators feature (similar to Docker). For example:

```json
{
  "pathTranslators": [
    {
      "server": "/media",
      "node": "W:/media"
    },
    {
      "server": "/tcache",
      "node": "W:/tcache"
    }
  ]
}
```

In the above scenario, the source and cache folders both point to the same respective locations on the Server and Node. Let's take the following file sitting on the Server:
```json
{
  "file": "/media/Sample1.mp4"
}
```

When a Node requests an item from the Server, the above file path will be translated on the Node to:
```json
{
  "file": "W:/media/Sample1.mp4"
}
```
The Node will then create a new cache file when transcoding the file:
```json
{
  "file": "W:/tcache/Sample1-TdarrCacheFile-afjlsdfl.mp4"
}
```
When the Node finishes transcoding the file, the cache file path will be translated and sent back to the Server
```json
{
  "file": "/tcache/Sample1-TdarrCacheFile-afjlsdfl.mp4"
}
```
The Server will then handle what needs to be done with the file next.

With the configs done, you can run the following from a terminal:

```
/Tdarr_Server/Tdarr_Server
/Tdarr_Node/Tdarr_Node
```
Visit http://localhost:8265/ (unless you changed the WebUI port) and the Tdarr UI should be visible. The connected Node should appear on the 'Tdarr' tab.
