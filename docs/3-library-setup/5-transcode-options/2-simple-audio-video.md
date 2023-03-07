---
sidebar_position: 2
---

# Simple Video/Audio rules
These options provide a basic interface for adding some simple transcode rules for video/audio files.

When using FFmpeg, you need to separate the input and output parameters with `<io>`. FFmpeg Examples:

```
-r 1<io>-r 24
<io>-sn -c:v copy -c:a copy
<io>-c:v lib265 -crf 23 -ac 6 -c:a aac -preset veryfast
<io>-map 0 -c copy -c:v libx265 -c:a aac
-c:v h264_cuvid<io>-c:v hevc_nvenc -preset slow -c:a copy
```

Please see the following for help with creating FFmpeg commands:
https://opensource.com/article/17/6/ffmpeg-convert-media-file-formats


HandBrake examples:

```
-e x264 -q 20 -B
-Z "Very Fast 1080p30"
-Z "Fast 1080p30" -e nvenc_h265
-Z "Very Fast 1080p30" --all-subtitles --all-audio
-Z "Very Fast 480p30"
--preset-import-file "C:/Users/HaveAGitGat/Desktop/testpreset.json" -Z "My Preset"
```

You can learn more about HandBrake presets here:

https://handbrake.fr/docs/en/latest/technical/official-presets.html


Tdarr transcodes conditionally, so, for example, if you're transcoding into hevc, add a rule to the "Don't transcode videos in these codecs:" box to omit files already in hevc. Else Tdarr will loop over your files infinitely.