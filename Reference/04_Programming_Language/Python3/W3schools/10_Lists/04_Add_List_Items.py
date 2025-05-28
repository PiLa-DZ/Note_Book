# Add List Items ==============================

# ---------------------------------------------
# append Items
thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist) # Out: ['apple', 'banana', 'cherry', 'orange']

# ---------------------------------------------
# Insert Items
thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange")
print(thislist) # Out: ['apple', 'orange', 'banana', 'cherry']

# ---------------------------------------------
""" Note: As a result of the examples above, the lists will now contain 4 items.  """

# ---------------------------------------------
# Extend List
thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
print(thislist) # Out: ['apple', 'banana', 'cherry', 'mango', 'pineapple', 'papaya']

# ---------------------------------------------
# Add Any Iterable
thislist = ["apple", "banana", "cherry"]
thistuple = ("kiwi", "orange")
thislist.extend(thistuple)
print(thislist) # Out: ['apple', 'banana', 'cherry', 'kiwi', 'orange']

