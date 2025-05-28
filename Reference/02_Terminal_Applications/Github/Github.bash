# How to create ssh on ubuntu

	$ cd ~/.ssh

	ssh-keygen -t rsa -b 4096 -C "example@example.com"

	$ eval $(ssh-agent -s)

	$ ssh-add ~/.ssh/"File_key_name_"

	# Create config file
		vi ~/.ssh/config
			# Start text
				Host github.com-"Your_Github_Account_"
  			HostName github.com
  			User git
  			IdentityFile ~/.ssh/"File_key_name_"
  		# End text

  # Test Your Coniction
  	ssh -T git@github.com-"Your_Github_Account_"
	# Repo for test
	git clone git@github.com:testkv9/test_one_.git
  # List ssh added
  	ssh-add -l

	$ pbcopy < "PATH"  |--> $ vi ~/.ssh/"File_key_name_".pub


###############################################################
# Create or old Repository in github
	# go to github Repository and copy the URL
	$ git clone "URL_"
	# Edit your project and commit it
	$ git remote -v		# List remote Repository
	$ git push origin main

###############################################################
# Create new or old Repository in local computer
	# Create empty Repository in github
	# go to github Repository and copy the URL
	$ git remote -v		# List remote Repository
	$ git remote add origin "URL_"
	$ git push origin main

###############################################################
# We also have --> git pull
	# You have to undo last commits
		$ git pull origin main
	# You have also learn about --> git fetch
	
###############################################################

# VCS --> Version Control Services

###############################################################

# You have to learn more about --> Github Organizations





