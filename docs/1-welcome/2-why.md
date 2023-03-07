---
sidebar_position: 2
---

# Why choose Tdarr?


### Distributed
Tdarr works in a distributed manner where you can use multiple devices to process your library together. It does this using 'Tdarr Nodes' which connect with a central server and pick up tasks so you can put all your spare devices to use.

Each Node can run multiple 'Tdarr Workers' in parallel to maximize the hardware usage % on that Node. For example, a single FFmpeg worker running on a 64 core CPU may only hit ~30% utilization. Running multiple Workers in parallel allows the CPU to hit 100% utilization, allowing you to process your library more quickly.


Terms:
```
Server: Central process which all Nodes connect with

Node: Processes running same/other devices which collect tasks from the Server

Worker: A process on the Node which executes collected tasks in parallel with other workers

```

### Optimized
Tdarr is capable of processing large media libraries due to its high performance, multi-threaded files scanners and distributed architecture.


### Cross-platform
Tdarr has packages for the following platforms:

```
win32_x64
linux_x64
linux_arm
linux_arm64
darwin_x64 (macOS)
darwin_arm64 (macOS)
```

You can use Nodes on different platforms together. For example, you could have Tdarr Server running on a Linux x64 server with Nodes running on macOS and Windows.


### Controlled
Tdarr gives you incredible control over how your media is processed

Workers: Different worker types for CPU and GPU tasks

Libraries: Set up multiple libraries, each with different transcode rules

Plugins: Use advanced community plugins or make your own. Plugins are written in JavaScript (one of the easier programming languages out there to get into).








