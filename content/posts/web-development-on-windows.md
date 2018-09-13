---
title: Modern Web Development on Windows
date: 2018-09-13
notes:
- Dev
---

**NOTE: This is kind of a work in progress.**

Web development on Windows can be quite pleasant now thanks to Windows Subsystem Linux, which gives us typical Mac users a super familiar command line for our work. However, it takes some work to make the development experience actually *nice*.

Here's how I went about it.

## Install Windows Subsystem Linux (WSL)

Install Windows Subsystem Linux by following the directions here: [Install the Linux Subsystem on Windows 10 | Microsoft Docs](https://msdn.microsoft.com/en-au/commandline/wsl/install_guide)

Make sure to launch your distro's Windows app before proceeding as there's some setup it has to do on first run.

## Fix the Godawful Terminal

The Windows terminal is absolutely hideous. Let’s fix that shit.

### Install Hyper.js

First, let’s install [Hyper.js](https://hyper.is/). It is a much better looking modern terminal emulator.

Once Hyper is installed, let’s edit the config to make Bash its default.

Under Hyper preferences (CTRL + ,), set shell to:

```shell
shell: 'C:\\Windows\\System32\\bash.exe'
```

### Install ZSH

```shell
sudo apt-get install zsh
vim ~/.bashrc
```

Add the following to run ZSH when Bash starts:

```shell
if [ -t 1 ]; then
exec zsh
fi
```

Relaunch Hyper and choose option 2.

### Install Oh My ZSH
Run the following:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### Get a Decent Font

Now that we have a familiar shell, I hate the font. I like [Fira Code](https://github.com/tonsky/FiraCode). Download Fira Code and install it into Windows and then set the default font in Hyper (CTRL + ,).

Finally, I personally like dark colors for my terminal and development. Hyper Snazzy looks pretty damn good to me.

Lastly, the only hideous thing is the directory listings. Add the following shit to the bottom of your `.zshrc` file.

```shell
# Change ls colors
LS_COLORS="ow=01;36;40" && export LS_COLORS

# Make cd use the ls colors
zstyle ':completion:*' list-colors "${(@s.:.)LS_COLORS}"
autoload -Uz compinit
compinit
```

Relaunch Hyper. Directories are now pretty.

## Development Setup

### Install Git

```shell
sudo apt-get install git
```

## Editor

For code editing, you can't go wrong with [Visual Studio Code](https://code.visualstudio.com/). I set Fira Code as my font of choice and we set VS code's integrated terminal to use WSL bash instead of PowerShell. In `settings.json`, that looks like this:

```shell
"terminal.integrated.shell.windows": "C:\\Windows\\System32\\bash.exe",
```

# A Note on Directories
The directories in WSL confused the shit out of me, but I finally figured it out. Here's how I believe it should be used.

For your code and projects, use `/mnt/c/Users/<username>`. This directory is directly accessible in Windows so you can use different Windows code editors, etc.

All your dotfiles like `.zshrc`, etc will be in `~`, which is not really all that editable in Windows.

I also ran into an issue logging into AWS because of permissions on my .pem file. This was because I had the file in /mnt/c/... and that uses Windows permissions and doesn't respect `chmod` so much. Instead, I just moved my .pem file over to my `~` directory and did `chmod`. That worked like a charm.
