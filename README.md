<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/ufQq1Nv.png">
        <source media="(prefers-color-scheme: light)" srcset="https://i.imgur.com/JKk30GC.png">
        <img src="https://i.imgur.com/JKk30GC.png" width="350">
    </picture>
</p>

> ### sentinel _noun_
> _sen·​ti·​nel   sen-tə-nəl_   
> _especially_ : a soldier standing guard at a point of passage (such as a gate)

## About
A free, open-source Windows, macOS, and Linux application that allows you to efficiently view, manage, and export sentry and dashcam footage from your Tesla vehicle. It does require you to have access to the USB drive containing the footage, whether that be directly plugged into your computer or using a more complicated setup with a network share such as [TeslaUSB](https://github.com/cimryan/teslausb) or other similar setups.

## Preview
_insert screenshot_

## Contribute
Sentinel is written in the Angular framework and uses Tauri to wrap it into a desktop application with access to native APIs. Tauri is a more modern approach than Electron as it uses Rust and a custom web renderer that is lighter weight and more performant than Chromium that Electron uses.

### Prerequisites
#### Tauri Setup
There are a few things that you must do to prepare your environment for Tauri. Follow the official [Tauri Prerequisites guide](https://tauri.app/v1/guides/getting-started/prerequisites) for your particular operating system. This will install Rust and other various dependencies required by Tauri.

On VS Code, you should install the offical [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) and the [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) extensions.

#### Angular Setup
It is recommended to install the Angular CLI globally on your system. This can be done via `npm install -g @angular/cli` in your terminal. 

On VS Code, you should install the [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template) extension.

### Running Locally

_fill out later_


## Disclaimer
This product is not in any way affiliated with the Tesla brand. This application does not require an internet connection, nor does it send any of your data anywhere. An internet connection may be used to notify of a newer version and download said version with user permission.

## License
sentinel is licensed under the [*GNU General Public License v3.0*](https://choosealicense.com/licenses/lgpl-3.0/). Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

For the betterment of the community, we would prefer you contribute directly to this project, but you are allowed to use your own fork as long as it is public like this project is. 

<p align="center">___</p>
<p align="center">
    <img src="https://avatars3.githubusercontent.com/u/39174758?s=400&u=9a2d33f5f3fbdde99fe5de2f5f127063282127cb&v=4" height="100" style="border-radius: 16px"><br>
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://ar.bitrary.dev/assets/arbitrary-white.png">
        <source media="(prefers-color-scheme: light)" srcset="https://ar.bitrary.dev/assets/arbitrary-dark.png">
        <img src="https://ar.bitrary.dev/assets/arbitrary-dark.png" height="16px" style="margin-top: 16px">
    </picture>
</p>
