# List Comprehension ==========================

# ---------------------------------------------
# List Comprehension 
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)

print(newlist) # Out: ['apple', 'banana', 'mango']

# ---------------------------------------------
# With list comprehension you can do all that with only one line of code:
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if "a" in x]

print(newlist) # Out: ['apple', 'banana', 'mango']

# ---------------------------------------------
# The Syntax
# Psudo Code
newlist = [expression for item in iterable if condition == True]
# The return value is a new list, leaving the old list unchanged.

# ---------------------------------------------
# Condition
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if x != "apple"]
print(newlist) # Out: ['banana', 'cherry', 'kiwi', 'mango']

# ---------------------------------------------
# The condition is optional and can be omitted:
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits]
print(newlist) # Out: ['apple', 'banana', 'cherry', 'kiwi', 'mango']

# ---------------------------------------------
# Iterable
newlist = [x for x in range(10)]
print(newlist) 

""" Out:
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
"""

# ---------------------------------------------
# Same example, but with a condition:
newlist = [x for x in range(10) if x < 5]
print(newlist)

""" Out:
[0, 1, 2, 3, 4]
"""

# ---------------------------------------------
# Expression
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x.upper() for x in fruits]
print(newlist)

""" Out: 
['APPLE', 'BANANA', 'CHERRY', 'KIWI', 'MANGO']
"""

# ---------------------------------------------
# You can set the outcome to whatever you like:
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = ['hello' for x in fruits]
print(newlist)

""" Out: 
['hello', 'hello', 'hello', 'hello', 'hello']
"""

# ---------------------------------------------
# Return "orange" instead of "banana":
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x if x != "banana" else "orange" for x in fruits]
print(newlist)

""" Out:
['apple', 'orange', 'cherry', 'kiwi', 'mango']
"""

