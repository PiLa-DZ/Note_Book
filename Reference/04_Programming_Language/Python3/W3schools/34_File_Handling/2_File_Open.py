# File Open ===================================

""" Note: You should always close your files, in some cases, due to buffering, changes made to a file may not show until you close the file.  """

# ---------------------------------------------
# Open a File on the Server
# Assume we have the following file, located in the same folder as Python:

# demofile.txt
Hello! Welcome to demofile.txt
This file is for testing purposes.
Good Luck!

# ---------------------------------------------

f = open("demofile.txt", "r")
print(f.read())

""" Out: 
Hello! Welcome to demofile.txt
This file is for testing purposes.
Good Luck!
"""
# ---------------------------------------------
# Open a file on a different location:

f = open("D:\\myfiles\welcome.txt", "r")

print(f.read())

""" Out: 
Welcome to this text file!
This file is located in a folder named "myfiles", on the D drive.
Good Luck!
"""
# ---------------------------------------------
# Read Only Parts of the File
# Return the 5 first characters of the file:

f = open("demofile.txt", "r")

print(f.read(5))

""" Out: 
Hello
"""
# ---------------------------------------------
# Read Lines
# Read one line of the file:

f = open("demofile.txt", "r")

print(f.readline())

""" Out: 
Hello! Welcome to demofile.txt
"""
# ---------------------------------------------
# Read two lines of the file:

f = open("demofile.txt", "r")

print(f.readline())
print(f.readline())

""" Out: 
Hello! Welcome to demofile.txt
This file is for testing purposes.
"""
# ---------------------------------------------
# Loop through the file line by line:

f = open("demofile.txt", "r")
for x in f:
  print(x)

""" Out: 
Hello! Welcome to demofile.txt
This file is for testing purposes.
Good Luck!
"""
# ---------------------------------------------
# Close Files
# Close the file when you are finish with it:

f = open("demofile.txt", "r")

print(f.readline())

f.close()

""" Out: 
Hello! Welcome to demofile.txt
"""
