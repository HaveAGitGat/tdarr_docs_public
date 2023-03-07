---
sidebar_position: 3
---
# plugin()

A function which contains transcode and filter logic which will be executed by a Tdarr Worker.

```js
// See the parameters section for more info on what data is passed here
const plugin = (file, librarySettings, inputs, otherArguments) => {
  // Plugin inputs are checked and loaded
  inputs = loadDefaultValues(inputs, details);
  // Only 'require' dependencies within this function or other functions. Do not require in the top scope.
  const importFresh = require('import-fresh');

  // Must return this object at some point in the function else plugin will fail.
  const response = {
    processFile: false, // If set to false, the file will be skipped. Set to true to have the file transcoded.
    preset: '', // HandBrake/FFmpeg CLI arguments you'd like to use.
    // For FFmpeg, the input arguments come first followed by <io>, followed by the output argument.
    // Examples
    // HandBrake
    // '-Z "Very Fast 1080p30"'
    // FFmpeg
    // '-sn <io> -map_metadata -1 -c:v copy -c:a copy'
    container: '.mp4', // The container of the transcoded output file.
    handBrakeMode: false, // Set whether to use HandBrake or FFmpeg for transcoding
    FFmpegMode: false,
    infoLog: '', // This will be shown when the user clicks the 'i' (info) button on a file in the output queue if
    // it has been skipped.
    // Give reasons why it has been skipped ('File has no title metadata, File meets conditions!')

    // Optional (include together)
    file,
    removeFromDB: false, // Tell Tdarr to remove file from database if true
    updateDB: false, // Change file object above and update database if true
  };

  console.log(inputs.language); // eng if user entered 'eng' in input box in Tdarr plugin UI
  console.log(inputs.channels); // 2 if user entered '2' in input box in Tdarr plugin UI

  // Here we specify that we want the output file container to be the same as the current container.
  response.container = `.${file.container}`;

  // We will use FFmpeg for this procedure.
  response.FFmpegMode = true;

  // Check if file has title metadata
  if (file.meta.Title != undefined) {
    // if so, remove it

    response.infoLog += ' File has title metadata';
    response.preset = ',-map_metadata -1 -c:v copy -c:a copy';
    response.processFile = true;
    return response;
  }
  response.infoLog += ' File has no title metadata';

  response.infoLog += ' File meets conditions!';
  return response;
};

```