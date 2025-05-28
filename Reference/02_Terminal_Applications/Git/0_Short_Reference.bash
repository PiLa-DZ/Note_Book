# Information_ ######################################################################################
status -s
ls-files
reflog						
ls-tree "ID_"	| HEAD~"Num_"
log				| --oneline			| --reverse				| --first-parent	| --graph					
				| --all				| --stat				| -p
diff			| --staged			| "ID_" "ID_"			| "ID_".."ID_"		| "Branch_1_" "Branch_2_"
show "ID_"		| HEAD~"Num_"		| HEAD~"Num_":"File_"
# Add_Files_ ########################################################################################
add .								# Add all files
commit -am "Message_"
commit -m "Message_"
# Restor_Files_ #####################################################################################
restore .
restore --source="ID_" .			
# Remove_Files_ #####################################################################################
clean -fd							# Remove all Untracked Files and Directory
rm -r --cached "PATH_"
# Ignore_Files_ #####################################################################################
gitignore
# Branch_ ###########################################################################################
branch								# List Branch
branch			"Name_"				# New Branch
branch	-M		"Name_"				# Rename Branch
switch			"Name_"				# Open Branch
switch	-c		"Name_"				# New Branch & Open it
branch	-d		"Name_"				# Delete Branch
# Merge_Rebase_Squash_ ##############################################################################
merge				"Name_"			# Merge current Branch with other Branch
rebase			"Name_"				# It's very hard to understand
rebase	-i		"Name_"				# It's very hard to understand
commit	--amend						# Edit last commit
reset		--soft	"ID_"			# Delete one commit
reset		--hard	"ID_"			# Delete from current commit to ID commit
# Stash_ ############################################################################################
stash push -m "Message_"			# New Stash
stash list							# List Stash
stash apply "Index_"				# Recovery Stash 
stash pop "Index_"					# Recovery Stash and Delete it
stash dorp "Index_"					# Delete Stash by index
stash clear							# Delete All Stash
# More_Undo_Move_Rename_ ############################################################################
init								# Create new git workflow
restore --staged "File_"			# Undo files from "Staging Area"
mv "File_1_" "File_2_"				# Move files in "Working Directory" and "Staging Area"
mv "Name_1" "Name_2"				# Rename files in "Working Directory" and "Staging Area"
