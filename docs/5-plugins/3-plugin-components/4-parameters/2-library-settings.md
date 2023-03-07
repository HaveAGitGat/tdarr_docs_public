---
sidebar_position: 2
---
# librarySettings

An object containing details of the library which the file was scanned in.


Example **librarySettings** object:
```js
{
    _id: '0foppn1Hf',
    name: 'Test',
    priority: 0,
    folder: 'C:/Transcode/Source Folder',
    foldersToIgnore: 'segments',
    folderWatchScanInterval: 30,
    scannerThreadCount: 2,
    cache: 'C:/Transcode/Cache Folder',
    output: 'C:/Transcode/Output Folder',
    folderToFolderConversion: false,
    folderToFolderConversionDeleteSource: false,
    copyIfConditionsMet: false,
    container: '.mkv',
    containerFilter: 'mkv,mp4,mov,m4v,mpg,mpeg,avi,flv,webm,wmv,vob,evo,iso,m2ts,ts,mp3,aac,m4a,wav,flac,ogg,pcm,aiff,aac,wma,alac',    
    createdAt: 1620557629117,
    folderWatching: false,
    useFsEvents: false,
    scheduledScanFindNew: false,
    processLibrary: true,
    scanOnStart: false,
    exifToolScan: true,
    mediaInfoScan: true,
    closedCaptionScan: false,
    scanButtons: true,
    scanFound: 'Files found:0',
    expanded: true,
    navItemSelected: 'navSourceFolder',
    pluginIDs: [ [Object], [Object] ],
    pluginCommunity: false,
    handbrake: true,
    ffmpeg: false,
    handbrakescan: true,
    ffmpegscan: false,
    preset: '--preset-import-file "C:/app/testpreset.json" -Z "My Preset"',
    decisionMaker: {
      settingsPlugin: true,
      settingsVideo: false,
      videoExcludeSwitch: true,
      video_codec_names_exclude: [Array],
      video_size_range_include: [Object],
      video_height_range_include: [Object],
      video_width_range_include: [Object],
      settingsAudio: false,
      audioExcludeSwitch: true,
      audio_codec_names_exclude: [Array],
      audio_size_range_include: [Object]
    },
    schedule: [...],
    totalHealthCheckCount: 22,
    totalTranscodeCount: 765,
    sizeDiff: 0.4010190861299634,
    holdNewFiles: false,
    holdFor: 3600,
    local: true,
    community: true,
    pluginStackOverview: false
}
```