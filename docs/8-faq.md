---
sidebar_position: 8
---

# FAQ

### Do I need to run the Server and Nodes on the same operating system?

No, you can mix up which operating systems and architectures the Tdarr Server and Nodes run on.

### Do I need a GPU to use Tdarr?

No, you can transcode using only a CPU. This is typically slower but results in smaller file sizes and better quality.

### What's the reason for needing path translators? Why can't the Server send the files directly to the Node?

From a network transfer point of view, using a system where all the Tdarr devices can access the same network shares is far more efficient and will save a lot of time when processing large libraries. More info [here](https://github.com/HaveAGitGat/Tdarr/issues/286#issuecomment-767598515)

### Only one of my Nodes has a GPU, can I still do GPU transcoding?

Yes, make sure to add GPU and CPU plugins to your plugin stack. On the GPU node, only launch GPU workers (make sure **Allow GPU workers to do CPU tasks** is set to OFF in the Node Options). On the other Nodes, only launch CPU workers. The workers will check through all the plugins and only do the ones that they can handle, so a CPU Worker will not try to run the GPU plugin.

### What's the best number of Workers to run?

This depends on the hardware you're using but it's typically around 3.

### What's the purpose of health checks?

Health check workers check the media files for signs of corruption. If running **Quick** health checks, only the file headers are checked, whereas **Thorough** health checks go through the whole file frame by frame. You can set the health check type in the library settings.