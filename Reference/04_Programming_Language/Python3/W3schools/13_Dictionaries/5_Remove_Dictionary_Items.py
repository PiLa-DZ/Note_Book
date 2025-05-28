# Remove Dictionary Items =====================

# ---------------------------------------------
# Removing Items
# The pop() method removes the item with the specified key name:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.pop("model")
print(thisdict)

""" Out: 
{'brand': 'Ford', 'year': 1964}
"""
# ---------------------------------------------
# The popitem() method removes the last inserted item (in versions before 3.7, a random item is removed instead):

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.popitem()
print(thisdict)

""" Out: 
{'brand': 'Ford', 'model': 'Mustang'}
"""
# ---------------------------------------------
# The del keyword removes the item with the specified key name:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
del thisdict["model"]
print(thisdict)

""" Out: 
{'brand': 'Ford', 'year': 1964}
"""
# ---------------------------------------------
# The del keyword can also delete the dictionary completely:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
del thisdict
print(thisdict) #this will cause an error because "thisdict" no longer exists.

""" Out: 
Traceback (most recent call last):
  File "demo_dictionary_del3.py", line 7, in <module>
    print(thisdict) #this will cause an error because "thisdict" no longer exists.
NameError: name 'thisdict' is not defined
"""
# ---------------------------------------------
# The clear() method empties the dictionary:

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.clear()
print(thisdict)

""" Out: 
{}
"""
