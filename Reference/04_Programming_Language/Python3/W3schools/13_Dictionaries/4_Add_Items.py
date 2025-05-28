# Add Dictionary Items ========================

# ---------------------------------------------
# Adding Items
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["color"] = "red"
print(thisdict)

""" Out: 
{'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}
"""
# ---------------------------------------------
# Update Dictionary
# Add a color item to the dictionary by using the update() method:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"color": "red"})
print(thisdict)

""" Out: 
{'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}
"""
