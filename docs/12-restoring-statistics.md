---
sidebar_position: 12
---

# Restoring statistics

This guide is primarily for a bug in 2.00.17 affecting the following stats:

- Number of transcodes
- Space saved
- Number of health checks

Please update to 2.00.18 before following this guide.

### Step 1 

The stats bug began on `14:00 18/April/2022 UTC` so, while Tdarr is running, check your transcode and health check output tables
and make a quick guesstimate on how many transcodes and health checks have taken place since the bug began and you upgrading to 2.00.18.

### Step 2

Next, visit the backups tab and check where your Backups are stored. For example:

`/app/server/Tdarr/Backups`

Stop Tdarr_Server and navigate to the backups folder in a folder browser.

Find a backup from before the 19th April 2022, for example: Backup-18-April-2022-00-00-00.zip

Unzip it and in the extracted folder, open StatisticsJSONDB.txt and find the following 3 items and note them down:

    "totalTranscodeCount": 1000,
    "totalHealthCheckCount": 1000,
    "sizeDiff": 2.0002973843365907669,

Your values for each will be different to the example. `sizeDiff` is the amount of space saved in GB.


### Step 3

Next, navigate to the StatiticsJSONDB folder in your server data, for example:

`/app/server/Tdarr/DB2/StatisticsJSONDB`


Using a text editor, open up the JSON file in that folder and update the aforementioned values in there with values you noted before. Be careful not to remove the double quotes or commas.

    "totalTranscodeCount": 1,
    "totalHealthCheckCount": 1,
    "sizeDiff": 0.2,

 Add on the guesstimate values you made earlier so that the stats are roughly up to date.

 You can repeat this process for each of the libraries in the LibrarySettingsJSONDB files/folders.

:::caution
Take note that in in the backup LibrarySettingsJSONDB, all the library data is in single file, whereas in the server data, each library has its own file.
:::

 Save all the files and start up Tdarr_Server, your stats should all be up to date!

