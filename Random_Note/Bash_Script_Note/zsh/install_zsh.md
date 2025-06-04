
```Bash
# Install zsh
    sudo pacman -S zsh zsh-completions
    which $SHELL

# Change Your Default Shell 
    chsh -s $(which zsh)
    reboot

# Hide Hostname
    nvim .zshrc
        export DEFAULT_USER=$USER
    source .zshrc

```

# Install Oh-my-zsh framework
```Bash
# https://github.com/ohmyzsh/ohmyzsh
sudo pacman -S curl wget git
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

upgrade_oh_my_zsh

# Change Theme
nvim .zshrc
    # Choose One
    ZSH_THEME="agnoster"
    ZSH_THEME="gnzh"
    ZSH_THEME="random"
    ZSH_THEME_RANDOM_CANDIDATES=(
      "gnzh"
      "agnoster"
    )


# Add Plugins
nvim .zshrc
    plugins=(
        Plugin_Name
    )
source .zshrc

# Add "Syntax Highlighting" Plugin
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
nvim .zshrc
    plugins=(
        zsh-syntax-highlighting
    )
source .zshrc

# Add "Auto Suggestions" Plugin
git clone https://github.com/zsh-users/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
nvim .zshrc
    plugins=(
        zsh-autosuggestions
    )
source .zshrc



```

# All my config
```Bash
ZSH_THEME="agnoster"
plugins=(
  git
  bundler
  dotenv
  macos
  rake
  rbenv
  ruby
  zsh-syntax-highlighting
  zsh-autosuggestions
)
export DEFAULT_USER=$USER
export EDITOR="nvim"
function y() {
	local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
	yazi "$@" --cwd-file="$tmp"
	IFS= read -r -d '' cwd < "$tmp"
	[ -n "$cwd" ] && [ "$cwd" != "$PWD" ] && builtin cd -- "$cwd"
	rm -f -- "$tmp"
}
```
