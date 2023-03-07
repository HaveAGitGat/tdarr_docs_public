---
sidebar_position: 2
---

# Source Options

### Folder watch
Have Tdarr automatically detect when files are added or removed in the library


### Process Library
Have Tdarr workers process files in this library. If OFF, files will be removed from the queues on the 'Tdarr' tab.


### Scan on start
Have Tdarr scan this library when the application starts up. Will also cause an hourly 'Scan (Find New)' to take place.


### Scanners
Have Tdarr check if the files contain closed captions. Will show up in the 'Search' tab results column 'Closed Captions'.


### File filter
File paths containing the entered input will be ignored. Separate with a comma. e.g.:

grab,.index,User/AppData,-trailer,.mp4

### Folder watch scan interval
Enter the interval you'd like Tdarr to check the library for changes in seconds (if Folder Watch enabled). Default is 30 seconds


### Folder watch: Use file system events
By default, Tdarr's folder watcher uses polling to check for file changes (i.e. it will do a full scan of all files in the source folder to check for changes which can be disk intensive). To reduce disk activity, the folder watcher can use file system events to automatically be notified of changes. This is much less intense on the disk drive but may not work in all situations, for example, network/remote folders.

### Run an hourly Scan (Find new)
Use if having trouble with folder watcher. For example, if the folder is not detecting new files or deletions.

### File scanner threads
Set the number of file scanner threads. Useful for increasing the library scanning speed when using high R/W data devices such as SSDs.

### Hold files after scanning?
Enable\\disable and set the time in seconds for a file to remain in the 'Hold' section at the bottom of the Tdarr tab. Tdarr will scan the file and then prevent it from being processed for the specified amount of time.

This is useful if you have other applications which are processing/manipulating your files and you don't want Tdarr to do anything with the files for a while.
