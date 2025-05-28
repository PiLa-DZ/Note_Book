# RegExp ======================================

# ---------------------------------------------
# RegEx Module

import re

# ---------------------------------------------
# Search the string to see if it starts with "The" and ends with "Spain":

import re

#Check if the string starts with "The" and ends with "Spain":

txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)

if x:
  print("YES! We have a match!")
else:
  print("No match")

""" Out: 
YES! We have a match!
"""
