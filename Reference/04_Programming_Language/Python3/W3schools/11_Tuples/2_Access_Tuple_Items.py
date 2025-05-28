# Access Tuple Items ==========================
""" Note: The first item has index 0. """

# ---------------------------------------------
Print the second item in the tuple:
thistuple = ("apple", "banana", "cherry")
print(thistuple[1])

""" Out: 
banana
"""
# ---------------------------------------------
# Negative Indeing
thistuple = ("apple", "banana", "cherry")
print(thistuple[-1])

""" Out: 
cherry
"""
# ---------------------------------------------
# Range of Indexes
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:5])
#This will return the items from position 2 to 5.
#Remember that the first item is position 0,
#and note that the item in position 5 is NOT included

""" Out: 
('cherry', 'orange', 'kiwi')
"""
# ---------------------------------------------
# This example returns the items from the beginning to, but NOT included, "kiwi":
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[:4])

""" Out: 
('apple', 'banana', 'cherry', 'orange')
"""
# ---------------------------------------------
# This example returns the items from "cherry" and to the end:
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:])

""" Out: 
('cherry', 'orange', 'kiwi', 'melon', 'mango')
"""
# ---------------------------------------------
# Range of Negative Indexes
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[-4:-1])
# Negative indexing means starting from the end of the tuple.
# This example returns the items from index -4 (included) to index -1 (excluded)
# Remember that the last item has the index -1,

""" Out: 
('orange', 'kiwi', 'melon')
"""
# ---------------------------------------------
# Check if Item Exists
thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple")

""" Out: 
Yes, 'apple' is in the fruits tuple
"""

