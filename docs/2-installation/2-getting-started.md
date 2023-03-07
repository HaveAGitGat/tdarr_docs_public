---
sidebar_position: 2
---

# Getting Started

Getting Started
Tdarr V2 is a cross-platform, distributed transcoding system that is broken up into multiple modules. Getting multiple machines working together across a local network requires some configuration.
![Banner](/img/docs/banner.jpg)


You can run Tdarr using only a single machine. Using extra Tdarr Nodes on multiple machines to increase transcoding resources is optional.

If you're coming from V1, unfortunately, V2 uses a new database and there have been a lot of changes so you'll need to start fresh.


The following table describes the purpose of each module:

| Module  | Description                                                                                                       |
|---------|-------------------------------------------------------------------------------------------------------------------|
| Updater | Module used to update the other modules                                                                           |
| Server  | The core of Tdarr. All modules connect with it. Does not do any encoding. As of v2.00.08 it contains Tdarr_WebUI. |
| Node    | Module used for encoding. Can be run on same machine as Server or remotely.                                       |


Regardless of whether you run Tdarr on Windows, Linux or macOS or Docker, the application will have the following folder structure:

```md title="/app"
.
├──configs
    ├──Tdarr_Node_Config.json
    ├──Tdarr_Server_Config.json
    ├──Tdarr_Updater_Config.json
├──logs
├──server
    ├──Tdarr
├──Tdarr_Node
    ├──Tdarr_Node.exe
├──Tdarr_Server
    ├──Tdarr_Server.exe
├──Tdarr_Updater.exe
```


The folders are all relative to where Tdarr_Updater is launched. So keep Tdarr_Updater in its own folder if you want to keep everything together.

To run Tdarr, **you'll need the Server and a Node (one or multiple)**.