---
sidebar_position: 1
---
# Basics

Tdarr Plugins are single JavaScript files used to define rules for processing media files. Each plugin should have `details` and `plugin` exported functions.


Plugins go through a cyclic process until the new output file meets all conditions of the Plugins in the Plugin Stack. 

![Banner](/img/docs/example_plugin_stack_flow.png)


### Source
There are two sources for Plugins
#### Community
Plugins added the to Tdarr Community Plugins repo found at: https://github.com/HaveAGitGat/Tdarr_Plugins

Community Plugins are automatically downloaded and updated by Tdarr.
#### Local
Plugins found only on your local system

### Stage
There are two types of plugin Stage
#### Pre-processing
Plugins that run before your files are processed to determine what transcode arguments are used.
#### Post-processing
Plugins that run after your files have finished being processed by the 'Pre-processsing' plugins.


### Operation
There are two types of plugin Operation (applies to Pre-processing plugins)
#### Transcode
This plugin type (almost all of the Community Plugins) contains filter and transcode rules to determine what should be done with a file.
#### Filter
A simpler type of plugin that only contains filter logic (no transcode argument logic). If the `processFile` key is set as `false`, the Filter plugin will break out of the Plugin stack cycle, causing all subsequent plugins in the stack to be skipped.
