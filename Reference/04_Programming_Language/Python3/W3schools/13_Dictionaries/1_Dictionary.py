# Dictionaries ================================
""" Note: As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.  """

# ---------------------------------------------
# Create and print a dictionary:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)

""" Out: 
{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
"""
# ---------------------------------------------
# Dictionary Items
# Print the "brand" value of the dictionary:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])

""" Out: 
Ford
"""
# ---------------------------------------------
# Ordered or Unordered?

""" As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.  """

# ---------------------------------------------
# Duplicates Not Allowed
# Duplicate values will overwrite existing values:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020
}
print(thisdict)

""" Out: 
{'brand': 'Ford', 'model': 'Mustang', 'year': 2020}
"""
# ---------------------------------------------
# Dictionary Length
# To determine how many items a dictionary has, use the len() function:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020
}
print(len(thisdict))

""" Out: 
3
"""
# ---------------------------------------------
# Dictionary Items - Data Types
# String, int, boolean, and list data types:

thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
print(thisdict)

""" Out: 
{'brand': 'Ford', 'electric': False, 'year': 1964, 'colors': ['red', 'white', 'blue']}
"""
# ---------------------------------------------
"""
type()
From Python's perspective, dictionaries are defined as objects with the data type 'dict':
<class 'dict'> 
"""
# ---------------------------------------------
# Print the data type of a dictionary:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(type(thisdict))

""" Out: 
<class 'dict'>
"""
# ---------------------------------------------
# The dict() Constructor
# Using the dict() method to make a dictionary:

thisdict = dict(name = "John", age = 36, country = "Norway")
print(thisdict) 

""" Out: 
{'name': 'John', 'age': 36, 'country': 'Norway'}
"""
