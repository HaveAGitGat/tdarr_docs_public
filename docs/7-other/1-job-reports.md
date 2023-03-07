---
sidebar_position: 1
---

# Job Reports

Tdarr job reports contain detailed logs of what happens when a Tdarr Node/Worker picks up a file to process from the Server. The icon for loading a job report can be found in several locations and looks like the following:

<img src="/img/docs/job-report-icon.png" width="200" />


It can be accessed from the following locations:

```
Tdarr tab -> Nodes section -> On Worker currently processing item
Tdarr tab -> Staging section -> Report column
Tdarr tab -> Status section -> Each of 7 status tables -> Report column

Search tab -> Report column
```

To copy or download the report, use the following buttons:

<img src="/img/docs/job-report-copy.png" width="400" />


Note that you can see the job report history on the left-hand side for both health check and transcode tasks. Make sure to select the correct one when sharing the report.


<img src="/img/docs/job-report-history.png" width="400" />

If someone sends you a job report, you can see the formatted output by visiting the Report Viewer at [http://localhost:8265/#/tools/report-viewer](http://localhost:8265/#/tools/report-viewer).


By default, the job report will only contain the last 200 lines of output from FFmpeg or HandBrake. To have the job report save all output, enable `Log full FFmpeg/HandBrake output` at `Tdarr tab -> Staging section`.
