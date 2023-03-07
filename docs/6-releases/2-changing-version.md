---
sidebar_position: 2
---

# Changing version


### Upgrading and downgrading Tdarr

There are various ways to upgrade and downgrade depending on how you're running Tdarr.

To upgrade to latest, use the `latest` docker image tag. For the native packages, run Tdarr_Updater or download directly from [here](https://f000.backblazeb2.com/file/tdarrs/versions.json).


For other versions:


For docker, set the specific Tdarr tag you require in your Docker run command or compose file, for example:

`docker run ghcr.io/haveagitgat/tdarr:2.00.19`

For the Windows, macOS and Linux native packages, you can set the `requiredVersion` in `Tdarr_Updater_Config` in the `/configs` folder and rerun the updater.

```json
{
  "platform_arch": "default",
  "modules": {
    "Tdarr_Node": {
      "enabled": true,
      "requiredVersion": "2.00.19",
      "currentVersion": "2.00.07"
    },
    "Tdarr_Server": {
      "enabled": true,
      "requiredVersion": "2.00.19",
      "currentVersion": "2.00.07"
    }
  }
}
```

Alternatively, you can download the required package directly from [this](https://f000.backblazeb2.com/file/tdarrs/versions.json) link:



## Pre-releases

Before going into the 'latest' Docker image or Tdarr package, updates are put into pre-release.

### Docker

Available images:

```
# Tdarr Server

# docker.io acc
docker.io/haveagitgat/tdarr_acc:dev
docker.io/haveagitgat/tdarr_acc:{version}
docker.io/haveagitgat/tdarr_acc:latest
          
# ghcr.io acc
ghcr.io/haveagitgat/tdarr_acc:dev
ghcr.io/haveagitgat/tdarr_acc:{version}
ghcr.io/haveagitgat/tdarr_acc:latest
          
# Tdarr Node

# docker.io acc
docker.io/haveagitgat/tdarr_node_acc:dev
docker.io/haveagitgat/tdarr_node_acc:{version}
docker.io/haveagitgat/tdarr_node_acc:latest
          
# ghcr.io acc
ghcr.io/haveagitgat/tdarr_node_acc:dev
ghcr.io/haveagitgat/tdarr_node_acc:{version}
ghcr.io/haveagitgat/tdarr_node_acc:latest
          

To use a pre-release in Docker, you need to specify the specific version you'd like to use in the Docker run command or Docker compose file for the acceptance containers:

Use latest:
ghcr.io/haveagitgat/tdarr_acc:latest
ghcr.io/haveagitgat/tdarr_node_acc:latest

Use specific version:
ghcr.io/haveagitgat/tdarr_acc:2.00.12
ghcr.io/haveagitgat/tdarr_node_acc:2.00.12
```

### Using a native package pre-release

To use a pre-lease when running native Tdarr packages, you need to update the Tdarr_Updater_Config.json file (located in the 'configs' folder next to Tdarr_Updater) with the `requiredVersion` you'd like to use. Then save and run the Tdarr_Updater. For example, say the pre-release version is 2.00.12:

Before (using 'latest')
```json
{
  "platform_arch": "default",
  "modules": {
    "Tdarr_Node": {
      "enabled": true,
      "requiredVersion": "latest",
      "currentVersion": "2.00.07"
    },
    "Tdarr_Server": {
      "enabled": true,
      "requiredVersion": "latest",
      "currentVersion": "2.00.07"
    }
  }
}
```
After (using '2.00.12')
```json
{
  "platform_arch": "default",
  "modules": {
    "Tdarr_Node": {
      "enabled": true,
      "requiredVersion": "2.00.12",
      "currentVersion": "2.00.07"
    },
    "Tdarr_Server": {
      "enabled": true,
      "requiredVersion": "2.00.12",
      "currentVersion": "2.00.07"
    }
  }
}
```







## All images

```
# Tdarr Server

# docker.io acc
docker.io/haveagitgat/tdarr_acc:dev
docker.io/haveagitgat/tdarr_acc:{version}
docker.io/haveagitgat/tdarr_acc:latest
          
# ghcr.io acc
ghcr.io/haveagitgat/tdarr_acc:dev
ghcr.io/haveagitgat/tdarr_acc:{version}
ghcr.io/haveagitgat/tdarr_acc:latest
          
# docker.io prod
docker.io/haveagitgat/tdarr:{version}
docker.io/haveagitgat/tdarr:latest
          
# ghcr.io prod
ghcr.io/haveagitgat/tdarr:{version}
ghcr.io/haveagitgat/tdarr:latest
          
# Tdarr Node

# docker.io acc
docker.io/haveagitgat/tdarr_node_acc:dev
docker.io/haveagitgat/tdarr_node_acc:{version}
docker.io/haveagitgat/tdarr_node_acc:latest
          
# ghcr.io acc
ghcr.io/haveagitgat/tdarr_node_acc:dev
ghcr.io/haveagitgat/tdarr_node_acc:{version}
ghcr.io/haveagitgat/tdarr_node_acc:latest
```