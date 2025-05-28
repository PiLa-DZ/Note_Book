# Update Tuples ===============================

# ---------------------------------------------
# Convert the tuple into a list to be able to change it:
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x) 

""" Out: 
("apple", "kiwi", "cherry")
"""
# ---------------------------------------------
# Add Items
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.append("orange")
thistuple = tuple(y)

print(thistuple)

""" Out: 
('apple', 'banana', 'cherry', 'orange')
"""
# ---------------------------------------------
# Create a new tuple with the value "orange", and add that tuple:
thistuple = ("apple", "banana", "cherry")
y = ("orange",)
thistuple += y

print(thistuple)

""" Out: 
('apple', 'banana', 'cherry', 'orange')
"""
# ---------------------------------------------
""" Note: When creating a tuple with only one item, remember to include a comma after the item, otherwise it will not be identified as a tuple. """

# ---------------------------------------------
# Remove Items
""" Note: You cannot remove items in a tuple.  """

# Convert the tuple into a list, remove "apple", and convert it back into a tuple:
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.remove("apple")
thistuple = tuple(y)

""" Out: 
('banana', 'cherry')
"""
# ---------------------------------------------
# The del keyword can delete the tuple completely:
thistuple = ("apple", "banana", "cherry")
del thistuple
print(thistuple) #this will raise an error because the tuple no longer exists 

""" Out: 
Traceback (most recent call last):
  File "demo_tuple_del.py", line 3, in <module>
    print(thistuple) #this will raise an error because the tuple no longer exists
NameError: name 'thistuple' is not defined
"""

