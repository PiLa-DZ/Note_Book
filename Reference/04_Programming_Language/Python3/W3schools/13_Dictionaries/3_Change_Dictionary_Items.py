# Change Dictionary Items =====================

# ---------------------------------------------
# Change Values
# Change the "year" to 2018:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["year"] = 2018
print(thisdict)

""" Out: 
{'brand': 'Ford', 'model': 'Mustang', 'year': 2018}
"""
# ---------------------------------------------
# Update Dictionary
# Update the "year" of the car by using the update() method:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"year": 2020})
print(thisdict)

""" Out: 
{'brand': 'Ford', 'model': 'Mustang', 'year': 2020}
"""
