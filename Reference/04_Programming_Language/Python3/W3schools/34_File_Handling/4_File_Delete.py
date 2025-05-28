# File Delete =================================

""" Note: You can only remove empty folders.  """

# ---------------------------------------------
# Remove the file "demofile.txt":

import os
os.remove("demofile.txt") 

# ---------------------------------------------
# Check if File exist:
# Check if file exists, then delete it:

import os
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
else:
  print("The file does not exist") 

# ---------------------------------------------
# Delete Folder
# Remove the folder "myfolder":

import os
os.rmdir("myfolder") 

""" Note: You can only remove empty folders.  """
