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

# VCS --> Version control system

#####################################################################################################
# How_git_works_ ####################################################################################

Git Repository

Staging Area
	Git Repository Files
		Deleted		|| D
		Modified	|| M
	Working Directory Files
		New File	|| A
		Deleted		|| D
		Modified	|| M

Working Directory
	Git Repository Files
		Not Editing Files
		Editing Files
	Untracked Files
	Ignore Files



