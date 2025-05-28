# Information_ 
# Add_Files_ 
# Restor_Files_
# Remove_Files_
# Ignore_Files_
# Branch_
# Merge_Rebase_Squash_
# Stash_
# More_Undo_Move_Rename_

#####################################################################################################
# Information_ ######################################################################################

# List what is happened between "Working Directory" and "Staging Area"
	$ git status							# Long status
	$ git status -s							# Short status

# List "Stagitg Area" Files
	$ git ls-files							# List "Staging Area" files

# List "Git Repositorys"
	$ git log
	$ git log --oneline
	$ git log --oneline --reverse
	$ git log --oneline --first-parent
	$ git log --oneline	--graph
	$ git log --oneline	--graph --all
	$ git log --oneline	--stat
	$ git log --oneline	-p

# List one "Git Repository" Files
	$ git ls-tree "ID_"						# List oen "Snap Area"
	$ git ls-tree HEAD~"Num_"				# List one "Snap Area"

# List Branch Switching History
	$ git reflog						

# Compare between "Work Area" and "Stag Area" files
	$ git diff								

# Compare between "Stag Area" and "Snap Area" files
	$ git diff --staged

# Compare between "Snap Area" and older "Snap Area"
	$ git show "ID_"						# Show "Snap Area" diff
	$ git show HEAD~"Num_"					# Show "Snap Area" diff
	$ git show HEAD~"Num_":"File_"			# Show exact file

# Compare between 2 "Snap Area"
	$ git diff "ID_" "ID_"
	$ git diff "ID_".."ID_"

# Compare between 2 "Branchs"
	$ git diff "Branch_1_" "Branch_2_"
	$ git diff "Branch_1_".."Branch_2_"

# ???_
	$ git difftool
	# Default diff.tool
		$ git config --global diff.tool vscode


#####################################################################################################
# Add_Files_ ########################################################################################

# Add from "Workig Directory" to "Staging Area"
	$ git add .								# Add all files

# Add from "Workig Directory" to "Git Repository"
	# Note: This commands not work with "Untracked Files"
		$ git commit -am "Message_"
		$ git commit -a							# Write message in default editor

# Add from "Staging Area" to "Git Repository"
	$ git commit -m "Message_"
	$ git commit							# Write message in default editor


#####################################################################################################
# Restor_Files_ #####################################################################################

# Restore From "Staging Area" to "Working Directory"
	$ git restore .

# Restore From "Git Repository" to "Working Directory"
	$ git restore --source="ID_" .			
	$ git restore --source=HEAD~"Num_" .


#####################################################################################################
# Remove_Files_ #####################################################################################

# Remove from "Working Directory"
	$ git clean -f							# Remove all Untracked Files
	$ git clean -d							# Remove all Untracked Directory
	$ git clean -fd							# Remove all Untracked Files and Directory

# Remove from "Working Directory" and "Staging Area"
	$ git rm "File_"

# Remove from "Staging Area"
	$ git rm -r --cached "PATH_"


#####################################################################################################
# Ignore_Files_ #####################################################################################

$ vi .gitignore
	# Start text
		"Dire_1_"/
		"Dire_2_"/
		"File_1_"
	# End text
$ git add .gitignore
$ git commit -m "Message_"


#####################################################################################################
# Branch_ ###########################################################################################

# You can see all Branch in --> .git/refs/heads/

$ git branch						# List Branch

$ git branch		"Name_"			# New Branch

$ git branch	-M	"Name_"			# Rename Branch

$ git checkout		"Name_"			# Open Branch
$ git checkout	-b	"Name_"			# New Branch & Open it
$ git switch		"Name_"			# Open Branch
$ git switch	-c	"Name_"			# New Branch & Open it

$ git branch	-d	"Name_"			# Delete Branch


#####################################################################################################
# Merge_Rebase_Squash_ ##############################################################################

$ git merge			"Name_"			# Merge current Branch with other Branch

# You have to learn about --> Merge conflict


$ git rebase		"Name_"			# It's very hard to understand

# You have to learn about --> $ git rebase -i
	# git rebase -interactive

# You have to learn about --> Rebast conflict

$ git commit --amend				# Edit last commit
$ git reset --soft "ID_"			# Delete one commit
$ git reset --hard "ID_"			# Delete from current commit to ID commit


#####################################################################################################
# Stash_ ############################################################################################

$ git stash							# New Stash
$ git stash push -m "Message_"		# New Stash

$ git stash list					# List Stash

$ git stash apply					# Recovery last Stash index 0
$ git stash apply "Index_"			# Recovery Stash 
$ git stash apply stash@{"Index_"}	# Recovery Stash
$ git stash pop "Index_"			# Recovery Stash and Delete it
$ git stash pop stash@{"Index_"}	# Recovery Stash and Delete it

$ git stash dorp "Index_"			# Delete Stash by index
$ git stash clear					# Delete All Stash


#####################################################################################################
# More_Undo_Move_Rename_ ############################################################################

$ git init								# Create new git workflow

$ git restore --staged "File_"				# Undo files from "Staging Area"

# Move files in "Working Directory" and "Staging Area"
	$ git mv "File_1_" "File_2_"	

# Rename files in "Working Directory" and "Staging Area"
	$ git mv "Name_1" "Name_2"		











