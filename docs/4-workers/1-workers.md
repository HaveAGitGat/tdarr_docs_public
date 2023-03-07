---
sidebar_position: 1
---

# Types

There are 4 types of worker


### Transcode CPU
Only carries out CPU based transcoding tasks. Will check the FFmpeg/HandBrake arguments and if they include GPU terms such as `nvenc`, `cuda`, `vaapi` etc then the worker **won't** carry out the task.

### Transcode GPU
Only carries out GPU based transcoding tasks. Will check the FFmpeg/HandBrake arguments and if they include GPU terms such as `nvenc`, `cuda`, `vaapi` etc then the worker **will** carry out the task.

:::tip
GPU workers will do CPU tasks if `Allow GPU workers to do CPU tasks` is enabled in the Node Options panel.
:::

### Health Check CPU

Does quick and thorough health checks using CPU.

### Health Check GPU

Does thorough health checks using GPU.



### Info
Use the Worker limit control buttons on each node to startup and maintain the specified number of Workers. Workers which are toggled 'Off' will finish their current item before closing down.

If you cancel an item, the Worker will move onto the next item in the queue.

:::caution
Important: Workers will not process items unless they are within the scheduled times set in the library settings and **Process Library** is set to **ON** in the library settings.
:::


All newly scanned files will be placed in the transcode and health check queues.

Files in the queues will be sent to available Workers. For transcodes, if files already meet the requirements they will be marked as 'Not required' in 'Transcode: Success/Not required' tab. If files don't meet the requirements they will be transcoded. If transcoding is successful files will be marked as 'Transcode success' in the 'Transcode: Success/Not required' tab.

If transcoding fails or is cancelled then files will be marked accordingly in the 'Transcode: Error/Cancelled' tab.

The end goal of Tdarr is to be able to run it on your library and all items come out as 'Transcode:Not required', meaning nothing needed to be transcoded/remuxed etc.