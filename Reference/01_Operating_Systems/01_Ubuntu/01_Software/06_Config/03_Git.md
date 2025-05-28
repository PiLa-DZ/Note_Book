#####################################################################################################
# Configiration_ ####################################################################################

# User Name & Email
	$ git config --global user.name "Nabil"
	$ git config --global user.email "Nabil@gmail.com"

# Default Editor
	$ git config --global core.editor "code --wait"			# Chane default editor
	$ git config --global core.editor "vim"					# Chane default editor

# List Config
	$ git config --global -e								# Open git config by default editor

# CR LF --> We have a different between windows and linux
	# In Windows
		$ git config --global core-autucrlf true
	# In Linux
		$ git config --global core.autucrlf input

# Default diff.tool
	$ git config --global diff.tool vscode
		
# You have to learn --> git alias config


