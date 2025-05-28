# Loop Dictionary =============================

# ---------------------------------------------
# Loop Through a Dictionary
# Print all key names in the dictionary, one by one:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x in thisdict:
  print(x)

""" Out: 
brand
model
year
"""
# ---------------------------------------------
# Print all values in the dictionary, one by one:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x in thisdict:
  print(thisdict[x])

""" Out: 
Ford
Mustang
1964
"""
# ---------------------------------------------
# You can also use the values() method to return values of a dictionary:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x in thisdict.values():
  print(x)

""" Out: 
Ford
Mustang
1964
"""
# ---------------------------------------------
# You can use the keys() method to return the keys of a dictionary:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x in thisdict.keys():
  print(x)

""" Out: 
brand
model
year 
"""
# ---------------------------------------------
# Loop through both keys and values, by using the items() method:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x, y in thisdict.items():
  print(x, y)

""" Out: 
brand Ford
model Mustang
year 1964
"""
