# Copy Dictionary =============================

# ---------------------------------------------
# Copy a Dictionary
# Make a copy of a dictionary with the copy() method:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = thisdict.copy()
print(mydict)

""" Out: 
{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
"""
# ---------------------------------------------
# Another way to make a copy is to use the built-in function dict().
# Make a copy of a dictionary with the dict() function:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = dict(thisdict)
print(mydict)

""" Out: 
{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
"""
