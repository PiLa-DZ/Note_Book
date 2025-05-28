# Add Set Items ===============================

""" Note: Once a set is created, you cannot change its items, but you can add new items.  """

# ---------------------------------------------
# Add an item to a set, using the add() method:

thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
print(thisset)

""" Out: 
{'cherry', 'apple', 'orange', 'banana'}
"""
# ---------------------------------------------
# Add elements from tropical into thisset:

thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}
thisset.update(tropical)
print(thisset)

""" Out: 
{'apple', 'mango', 'cherry', 'pineapple', 'banana', 'papaya'}
"""
# ---------------------------------------------
# Add Any Iterable
# Add elements of a list to at set:

thisset = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]
thisset.update(mylist)
print(thisset)

""" Out: 
{'banana', 'cherry', 'apple', 'orange', 'kiwi'}
"""
