---
sidebar_position: 1
---
# details()

A function which returns an object containing plugin details

```js
const details = () => {
  return {
    id: 'Tdarr_Plugin_aaaa_Pre_Proc_Example',
    // An id for the plugin, must be the same as the filename
    Stage: 'Pre-processing', 
    // Pre-processing or Post-processing. Determines when the plugin will be executed.
    Name: 'No title meta data ',
    // A friendly name for the plugin
    Type: 'Video',
    // Video, Audio, Subtitle, Any. A summary of the type of work the plugin does.
    Operation: 'Transcode',
    // Transcode, Filter. The operation the plugin performs.
    Description: 'This plugin removes metadata (if a title exists). The output container is the same as the original. \n\n',
    // A description of the plugin which will be shown in the UI.
    Version: '1.00',
    // Plugin version.
    Tags: 'ffmpeg,h265', 
    // h265,hevc,h264,nvenc h265,nvenc h264,video only,audio only,subtitle only,handbrake,ffmpeg,radarr,sonarr,pre-processing,post-processing,configurable. Provide tags to categorise your plugin in the plugin browser.
    Inputs: [
      // (Optional) Inputs you'd like the user to enter to allow your plugin to be easily configurable from the UI.
      // See the Inputs section for more info
    ],
  };
};

```