# Remove Set Items ============================

# ---------------------------------------------
# Remove "banana" by using the remove() method:

thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset)

""" Out: 
{'cherry', 'apple'}
"""

""" Note: If the item to remove does not exist, remove() will raise an error.  """

# ---------------------------------------------
# Remove "banana" by using the discard() method:

thisset = {"apple", "banana", "cherry"}
thisset.discard("banana")
print(thisset)

""" Out: 
{'apple', 'cherry'}
"""

""" Note: If the item to remove does not exist, discard() will NOT raise an error.  """

# ---------------------------------------------
# Remove a random item by using the pop() method:

thisset = {"apple", "banana", "cherry"}
x = thisset.pop()
print(x) #removed item
print(thisset) #the set after removal

""" Out: 
banana
{'apple', 'cherry'}
"""

""" Note: Sets are unordered, so when using the pop() method, you do not know which item that gets removed.  """

# ---------------------------------------------
# The clear() method empties the set:

thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset)

""" Out: 
set()
"""
# ---------------------------------------------
# The del keyword will delete the set completely:

thisset = {"apple", "banana", "cherry"}
del thisset
print(thisset) #this will raise an error because the set no longer exists

""" Out: 
Traceback (most recent call last):
  File "demo_set_del.py", line 5, in <module>
    print(thisset) #this will raise an error because the set no longer exists
NameError: name 'thisset' is not defined
"""
