# Windows Terminal (settings.json)

```json
// Docs - https://docs.microsoft.com/en-us/windows/terminal/
// This file was initially generated by Windows Terminal 1.4.3141.0
// It should still be usable in newer versions, but newer versions might have additional
// settings, help text, or changes that you will not see unless you clear this file
// and let us generate a new one for you.
// To view the default settings, hold "alt" while clicking on the "Settings" button.
// For documentation on these settings, see: https://aka.ms/terminal-documentation
{
  "$schema": "https://aka.ms/terminal-profiles-schema",
  "defaultProfile": "{71c54bbd-c2c6-5271-96e7-009a87ff44bf}",
  "theme": "dark",
  // "confirmCloseAllTabs": true,
  // "startOnUserLogin": false,
  // "launchMode": "fullscreen",
  // You can add more global application settings here.
  // To learn more about global settings, visit https://aka.ms/terminal-global-settings
  // If enabled, selections are automatically copied to your clipboard.
  "copyOnSelect": false,
  // If enabled, formatted data is also copied to your clipboard
  "copyFormatting": false,
  // A profile specifies a command to execute paired with information about how it should look and feel.
  // Each one of them will appear in the 'New Tab' dropdown,
  //   and can be invoked from the commandline with `wt.exe -p xxx`
  // To learn more about profiles, visit https://aka.ms/terminal-profile-settings
  "profiles": {
    "defaults": {
      // Put settings here that you want to apply to all profiles.
      "fontFace": "MesloLGS NF",
      // "fontFace": "Cascadia Code PL",
      "fontSize": 14,
      "fontWeight": "semi-light",
      "padding": "12, 12, 12, 12",
      "cursorShape": "vintage",
      "cursorColor": "#3bb143",
      "cursorHeight": 50
      // "useAcrylic": true,
      // "acrylicOpacity": 0.9
      // Powerline - https://docs.microsoft.com/en-us/windows/terminal/tutorials/powerline-setup
    },
    "list": [
      {
        // Git bash
        "guid": "{71c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "name": "Git Bash",
        "commandline": "\"%PROGRAMFILES%\\Git\\usr\\bin\\bash.exe\" -i -l",
        "icon": "C:\\Program Files\\Git\\mingw64\\share\\git\\git-for-windows.ico",
        "hidden": false,
        "colorScheme": "Treehouse",
        "selectionBackground": "#ffa0aa",
        "startingDirectory": "I:\\work"
      },
      {
        // Make changes here to the powershell.exe profile.
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "name": "Windows PowerShell",
        "commandline": "powershell.exe",
        "hidden": false,
        "colorScheme": "Treehouse",
        "selectionBackground": "#ffa0aa"
      },
      {
        // Make changes here to the cmd.exe profile.
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        "name": "Command Prompt",
        "commandline": "cmd.exe",
        "hidden": false
      },
      {
        "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
        "hidden": false,
        "name": "Azure Cloud Shell",
        "source": "Windows.Terminal.Azure"
      },
      {
        "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
        "hidden": false,
        "name": "Ubuntu",
        "source": "Windows.Terminal.Wsl",
        // "foreground": "#0c0c0c",
        // "background": "#ffccbb",
        // "colorScheme": "Tomorrow Night Burns",
        // "colorScheme": "Ubuntu",
        "colorScheme": "Treehouse",
        "selectionBackground": "#ffa0aa",
        // "startingDirectory": "\\\\wsl$\\Ubuntu\\home\\umesh\\work"
        "startingDirectory": "\\\\wsl$\\Ubuntu\\mnt"
      }
    ]
  },
  // Add custom color schemes to this array.
  // https://terminalsplash.com/
  "schemes": [
    {
      "name": "Treehouse",
      "black": "#321300",
      "red": "#b2270e",
      "green": "#44a900",
      "yellow": "#aa820c",
      "blue": "#58859a",
      "purple": "#97363d",
      "cyan": "#b25a1e",
      "white": "#786b53",
      "brightBlack": "#433626",
      "brightRed": "#ed5d20",
      "brightGreen": "#55f238",
      "brightYellow": "#f2b732",
      "brightBlue": "#85cfed",
      "brightPurple": "#e14c5a",
      "brightCyan": "#f07d14",
      "brightWhite": "#ffc800",
      "background": "#191919",
      "foreground": "#786b53"
    },
    {
      "name": "Twilight",
      "black": "#141414",
      "red": "#c06d44",
      "green": "#afb97a",
      "yellow": "#c2a86c",
      "blue": "#44474a",
      "purple": "#b4be7c",
      "cyan": "#778385",
      "white": "#ffffd4",
      "brightBlack": "#262626",
      "brightRed": "#de7c4c",
      "brightGreen": "#ccd88c",
      "brightYellow": "#e2c47e",
      "brightBlue": "#5a5e62",
      "brightPurple": "#d0dc8e",
      "brightCyan": "#8a989b",
      "brightWhite": "#ffffd4",
      "background": "#141414",
      "foreground": "#ffffd4"
    },
    {
      "name": "Ubuntu",
      "black": "#2e3436",
      "red": "#cc0000",
      "green": "#4e9a06",
      "yellow": "#c4a000",
      "blue": "#3465a4",
      "purple": "#75507b",
      "cyan": "#06989a",
      "white": "#d3d7cf",
      "brightBlack": "#555753",
      "brightRed": "#ef2929",
      "brightGreen": "#8ae234",
      "brightYellow": "#fce94f",
      "brightBlue": "#729fcf",
      "brightPurple": "#ad7fa8",
      "brightCyan": "#34e2e2",
      "brightWhite": "#eeeeec",
      "background": "#300a24",
      "foreground": "#eeeeec"
    },
    {
      "name": "Tomorrow Night Burns",
      "black": "#252525",
      "red": "#832e31",
      "green": "#a63c40",
      "yellow": "#d3494e",
      "blue": "#fc595f",
      "purple": "#df9395",
      "cyan": "#ba8586",
      "white": "#f5f5f5",
      "brightBlack": "#5d6f71",
      "brightRed": "#832e31",
      "brightGreen": "#a63c40",
      "brightYellow": "#d2494e",
      "brightBlue": "#fc595f",
      "brightPurple": "#df9395",
      "brightCyan": "#ba8586",
      "brightWhite": "#f5f5f5",
      "background": "#151515",
      "foreground": "#a1b0b8"
    }
  ],
  // Add custom actions and keybindings to this array.
  // To unbind a key combination from your defaults.json, set the command to "unbound".
  // To learn more about actions and keybindings, visit https://aka.ms/terminal-keybindings
  "actions": [
    // Copy and paste are bound to Ctrl+Shift+C and Ctrl+Shift+V in your defaults.json.
    // These two lines additionally bind them to Ctrl+C and Ctrl+V.
    // To learn more about selection, visit https://aka.ms/terminal-selection
    {
      "command": {
        "action": "copy",
        "singleLine": false
      },
      "keys": "ctrl+c"
    },
    {
      "command": "paste",
      "keys": "ctrl+v"
    },
    // Press Ctrl+Shift+F to open the search box
    {
      "command": "find",
      "keys": "ctrl+shift+f"
    },
    // Press Alt+Shift+D to open a new pane.
    // - "split": "auto" makes this pane open in the direction that provides the most surface area.
    // - "splitMode": "duplicate" makes the new pane use the focused pane's profile.
    // To learn more about panes, visit https://aka.ms/terminal-panes
    {
      "command": {
        "action": "splitPane",
        "split": "auto",
        "splitMode": "duplicate"
      },
      "keys": "alt+shift+d"
    },
    // -----------Custom keys by umesh--------------
    {
      "command": "find",
      "keys": "ctrl+f"
    },
    // Tabs
    {
      "command": "newTab",
      "keys": "ctrl+t"
    },
    {
      "command": "closeTab",
      "keys": "ctrl+shift+w"
    },
    {
      "command": "nextTab",
      "keys": "ctrl+pageup"
    },
    {
      "command": "prevTab",
      "keys": "ctrl+pagedown"
    },
    // Pane
    {
      "command": "closePane",
      "keys": "ctrl+w"
    },
    {
      "command": {
        "action": "splitPane",
        "split": "vertical",
        "splitMode": "duplicate"
      },
      "keys": "ctrl+\\"
    },
    {
      "command": {
        "action": "splitPane",
        "split": "horizontal",
        "splitMode": "duplicate"
      },
      "keys": "ctrl+="
    },
    // Fontsize/zooming
    {
      "command": {
        "action": "adjustFontSize",
        "delta": 1
      },
      "keys": "ctrl+numpad_plus"
    },
    {
      "command": {
        "action": "adjustFontSize",
        "delta": -1
      },
      "keys": "ctrl+numpad_minus"
    },
    {
      "command": "resetFontSize",
      "keys": "ctrl+numpad_0"
    }
  ]
}
```
