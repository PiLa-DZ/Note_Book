# Access Dictionary Items =====================

# ---------------------------------------------
# Accessing Items
# Get the value of the "model" key:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict["model"]
print(x)

""" Out: 
Mustang
"""
# ---------------------------------------------
# There is also a method called get() that will give you the same result:
# Get the value of the "model" key:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.get("model")
print(x)

""" Out: 
Mustang
"""
# ---------------------------------------------
# Get Keys
# Get a list of the keys:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.keys()
print(x)

""" Out: 
dict_keys(['brand', 'model', 'year'])
"""
# ---------------------------------------------
# The list of the keys is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the keys list.

car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}
x = car.keys()
print(x) #before the change
car["color"] = "white"
print(x) #after the change

""" Out: 
 dict_keys(['brand', 'model', 'year'])
dict_keys(['brand', 'model', 'year', 'color']) 
"""
# ---------------------------------------------
# Get Values
# Get a list of the values:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.values()
print(x)

""" Out: 
dict_values(['Ford', 'Mustang', 1964])
"""
# ---------------------------------------------
# The list of the values is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the values list.

car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}
x = car.values()
print(x) #before the change
car["year"] = 2020
print(x) #after the change

""" Out: 
dict_values(['Ford', 'Mustang', 1964])
dict_values(['Ford', 'Mustang', 2020])
"""
# ---------------------------------------------
# Add a new item to the original dictionary, and see that the values list gets updated as well:

car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}
x = car.values()
print(x) #before the change
car["color"] = "red"
print(x) #after the change

""" Out: 
dict_values(['Ford', 'Mustang', 1964])
dict_values(['Ford', 'Mustang', 1964, 'red'])
"""
# ---------------------------------------------
# Get Items
# Get a list of the key:value pairs

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.items()
print(x)

""" Out: 
dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])
"""
# ---------------------------------------------
# Make a change in the original dictionary, and see that the items list gets updated as well:

car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}
x = car.items()
print(x) #before the change
car["year"] = 2020
print(x) #after the change

""" Out: 
dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])
dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 2020)])
"""
# ---------------------------------------------
# Add a new item to the original dictionary, and see that the items list gets updated as well:

car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}
x = car.items()
print(x) #before the change
car["color"] = "red"
print(x) #after the change

""" Out: 
dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])
dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964), ('color', 'red')])
"""
# ---------------------------------------------
# Check if Key Exists
# Check if "model" is present in the dictionary:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
if "model" in thisdict:
  print("Yes, 'model' is one of the keys in the thisdict dictionary")

""" Out: 
Yes, 'model' is one of the keys in the thisdict dictionary
"""
