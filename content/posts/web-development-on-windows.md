---
title: Modern Web Development on Windows
date: 2018-08-20 00:00:00 -0400
notes:
- Dev
draft: true
---

Web development on Windows can be quite pleasant now thanks to Windows Subsystem Linux, which gives us typical Mac users a super familiar command line for our work. However, it takes some work to make the development experience actually *nice*.

Here's how I went about it.

## Install Windows Subsystem Linux (WSL)

Install Windows Subsystem Linux by following the directions here: [Install the Linux Subsystem on Windows 10 | Microsoft Docs](https://msdn.microsoft.com/en-au/commandline/wsl/install_guide)

## Fix the Godawful Terminal

The Windows terminal is absolutely hideous. Let’s fix that shit.

First, let’s install Hyper.js. It is a much better looking modern terminal emulator.

Once Hyper is installed, let’s edit the config to make Bash its default. As web developers, all my work is going to be done under WSL, so why not make it the default?

```
if [ -t 1 ]; then
exec zsh
fi
```

Second, I like ZSH a whole lot better than bash, so let’s install ZSH and Oh My ZSH.

Now that we have a familiar shell, I hate the font. I like Fira Code. Download Fira Code and install it into Windows and then set the default font in Hyper.

Finally, I personally like dark colors for my terminal and development. Hyper Snazzy looks pretty damn good to me.

Lastly, the only hideous thing is the directory listings. Add the following shit to the bottom of your .zshrc.

```
# Change ls colors
LS_COLORS="ow=01;36;40" && export LS_COLORS

# Make cd use the ls colors
zstyle ':completion:*' list-colors "${(@s.:.)LS_COLORS}"
autoload -Uz compinit
compinit
```

## Development Setup

Most of this shit is the easy part because we can use `apt` to install our packages. It's a package manager a lot like Homebrew for Mac.

Install Git
```
sudo apt-get install git
```

Install NVM & Node
```

```

We're starting to do some static sites, so I'll set up Hugo.
```

```

For WordPress sites, ...?

For code editing, you can't go wrong with VS Code. You can check out my VS Code settings here. Most notably, I set Fira Code as my font of choice and we set VS code's integrated terminal to use WSL bash (which launches ZSH for us based on the above settings).

# A Note on Directories
The directories in WSL confused the shit out of me, but I finally figured it out. Here's how I believe it should be used.

For your code and projects, use `/mnt/c/Users/<username>`. This directory is directly accessible in Windows so you can use different Windows code editors, etc.

All your dotfiles like `.zshrc`, etc will be in `~`, which is not really all that editable in Windows.

I also ran into an issue logging into AWS because of permissions on my .pem file. This was because I had the file in /mnt/c/... and that uses Windows permissions and doesn't respect `chmod` so much. Instead, I just moved my .pem file over to my `~` directory and did `chmod`. That worked like a charm.
