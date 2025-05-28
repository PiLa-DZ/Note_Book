# Basic Commands

	# "Work Area" Commands
		$ git init									# Create new git workflow
		$ git status -s								# Show what is happened between "Work Area" and "Stag Area"
		
	# "Stag Area" Commands
		$ git ls-files								# List "Stag Area"
		$ git rm -r -cached "Dire_"					# Remove files from "Stag Atea"
		
	# "Snap Area" Commands
		$ git log --oneline							# List all "Snap Area"
		$ git ls-tree "ID_"							# List one "Snap Area"


# Save and Restore Files

	# "Work Area" --> "Stag Area" --- "Snap Area"
		$ git add .									# Add all files to "Stag Area"

	# "Work Area" --- "Stag Area" --> "Snap Area"
		$ git commit -m "Message_"					# Save All files to "Snap Area"

	# "Work Area" <------------------ "Snap Area"
		$ git restore --source="ID_" .				# Restore from one "Snap Area"


##########################################################################
# Git workflow life cycle                                                #
#     1 Working Area                                                     #
#     2 Staging Area                                                     #
#     3 Snapshot Area                                                    #
#                                                                        #
#     "Work Area" Sand to "Stag Area"                                    #
#     "Stag Area" Sand to "Snap Area"                                    #
#     "Snap Area" Sand to "Work Area"                                    #
#                                                                        #
#     "Work Area" ------> "Stag Area"                                    #
#     "Stag Area" ------> "Snap Area"                                    #
#     "Snap Area" ------> "Work Area"                                    #
#                                                                        #
##########################################################################
#                                                                        #
#  "Work Area"---------------->"Stag Area"                               #
#            ^                 /                                         #
#             \               /                                          #
#              \             /                                           #
#               \           /                                            #
#                \         /                                             #
#                 \       /                                              #
#                  \     /                                               #
#                   \   /                                                #
#                    \ v                                                 #
#                "Snap Area"                                             #
#                                                                        #
##########################################################################










