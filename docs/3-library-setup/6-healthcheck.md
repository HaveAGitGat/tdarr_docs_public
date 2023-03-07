---
sidebar_position: 6
---

# Health check

There are 2 health check types:

#### Quick
Uses HandBrake to check file headers, available for CPU workers only. The following command will be used:

```
--scan
```

#### Thorough
Goes through each frame of the file with FFmpeg, available for CPU/GPU workers.

The following command will be used depending on what Node Hardware type is set in the Node Options on the Tdarr tab.

##### Any
```
-stats -v error -hwaccel nvdec -hwaccel_output_format cuda
```

##### nvenc
```
-stats -v error -hwaccel nvdec -hwaccel_output_format cuda
```

##### vaapi
```
-stats -v error -hwaccel vaapi -hwaccel_output_format vaapi
```

##### qsv
```
-stats -v error -hwaccel vaapi -hwaccel_output_format vaapi
```
