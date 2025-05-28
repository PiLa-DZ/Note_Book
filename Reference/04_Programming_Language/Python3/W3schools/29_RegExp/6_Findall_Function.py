# Findall Function ============================

# ---------------------------------------------
# Print a list of all matches:

import re

#Return a list containing every occurrence of "ai":

txt = "The rain in Spain"
x = re.findall("ai", txt)
print(x)

""" Out: 
['ai', 'ai']
"""
# ---------------------------------------------
# Return an empty list if no match was found:

import re

txt = "The rain in Spain"

#Check if "Portugal" is in the string:

x = re.findall("Portugal", txt)
print(x)

if (x):
  print("Yes, there is at least one match!")
else:
  print("No match")

""" Out: 
[]
No match
"""
# ---------------------------------------------
# The search() Function

import re

txt = "The rain in Spain"
x = re.search("\s", txt)

print("The first white-space character is located in position:", x.start()) 

""" Out: 
The first white-space character is located in position: 3
"""
# ---------------------------------------------
# Make a search that returns no match:

import re

txt = "The rain in Spain"
x = re.search("Portugal", txt)
print(x)

""" Out: 
None
"""
# ---------------------------------------------
# The split() Function
# Split at each white-space character:

import re

#Split the string at every white-space character:

txt = "The rain in Spain"
x = re.split("\s", txt)
print(x)

""" Out: 
['The', 'rain', 'in', 'Spain']
"""
# ---------------------------------------------
# Split the string only at the first occurrence:

import re

#Split the string at the first white-space character:

txt = "The rain in Spain"
x = re.split("\s", txt, 1)
print(x)

""" Out: 
['The', 'rain in Spain']
"""
# ---------------------------------------------
# The sub() Function
# Replace every white-space character with the number 9:

import re

#Replace all white-space characters with the digit "9":

txt = "The rain in Spain"
x = re.sub("\s", "9", txt)
print(x)

""" Out: 
The9rain9in9Spain
"""
# ---------------------------------------------
# Replace the first 2 occurrences:

import re

#Replace the first two occurrences of a white-space character with the digit 9:

txt = "The rain in Spain"
x = re.sub("\s", "9", txt, 2)
print(x)

""" Out: 
The9rain9in Spain
"""
# ---------------------------------------------
# Match Object

""" Note: If there is no match, the value None will be returned, instead of the Match Object.  """

# Do a search that will return a Match Object:

import re

#The search() function returns a Match object:

txt = "The rain in Spain"
x = re.search("ai", txt)
print(x)

""" Out: 
<_sre.SRE_Match object; span=(5, 7), match='ai'>
"""
# ---------------------------------------------
# The regular expression looks for any words that starts with an upper case "S":

import re

#Search for an upper case "S" character in the beginning of a word, and print its position:

txt = "The rain in Spain"
x = re.search(r"\bS\w+", txt)
print(x.span())

""" Out: 
(12, 17)
"""
# ---------------------------------------------
# Print the string passed into the function:

import re

#The string property returns the search string:

txt = "The rain in Spain"
x = re.search(r"\bS\w+", txt)
print(x.string)

""" Out: 
The rain in Spain
"""
# ---------------------------------------------
# The regular expression looks for any words that starts with an upper case "S":

import re

#Search for an upper case "S" character in the beginning of a word, and print the word:

txt = "The rain in Spain"
x = re.search(r"\bS\w+", txt)
print(x.group())

""" Out: 
Spain
"""
""" Note: If there is no match, the value None will be returned, instead of the Match Object.  """
