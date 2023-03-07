---
sidebar_position: 3
---

# HandBrake Presets


This applies when using HandBrake presets (either in plugins or simple audio/video arguments) across multiple devices.

Let's say you have the following HandBrake command, with the HandBrake preset JSON file located in `Y:/media/testpreset.json` on the server:

```
--preset-import-file "Y:/media/testpreset.json" -Z "My Preset"
```

The path translators mentioned in the installation steps also apply to HandBrake presets. For example, let's say the following pathTranslator has been added to a Linux Node:

```
    {
      "server": "Y:/media/",
      "node": "/share/media"
    }
```

When the Node receives the command from the server, it will be translated to the following:

```
--preset-import-file "/share/media/testpreset.json" -Z "My Preset"
```

In this example you'd need to make sure the Node can access the preset JSON file at `/share/media/testpreset.json`


