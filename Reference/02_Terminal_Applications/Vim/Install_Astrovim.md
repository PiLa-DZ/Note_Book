# ###############################################################################
# Step 1 ########################################################################

# Install neovim -->
	$ sudo apt install neovim


# ###############################################################################
# Step 2 ########################################################################

# Update neovim -->
	# Import unstable version of NeoVim PPA
	$ sudo add-apt-repository ppa:neovim-ppa/unstable -y
	$ sudo apt install neovim


# ###############################################################################
# Step 3 ########################################################################

# Make a backup of your current nvim folder
	$ mv ~/.config/nvim ~/.config/nvim.bak


# ###############################################################################
# Step 4 ########################################################################

# Clean neovim folders (Optional but recommended)
	$ mv ~/.local/share/nvim ~/.local/share/nvim.bak
	$ mv ~/.local/state/nvim ~/.local/state/nvim.bak
	$ mv ~/.cache/nvim ~/.cache/nvim.bak


# ###############################################################################
# Step 5 ########################################################################

# Clone the repository
	$ git clone --depth 1 https://github.com/AstroNvim/template ~/.config/nvim
	# remove template's git connection to set up your own later
	$ rm -rf ~/.config/nvim/.git
	$ nvim

# ###############################################################################
# Step 6 ########################################################################

# To copy and past from AstroVim install xclip, xsel, or pbcopy/pbpaste.
	$ sudo apt install xclip
	$ sudo apt install xset






