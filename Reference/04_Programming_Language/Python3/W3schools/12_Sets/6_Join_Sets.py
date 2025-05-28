# Join Sets ===================================

# ---------------------------------------------
# Join set1 and set2 into a new set:

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = set1.union(set2)
print(set3)

""" Out: 
{3, 2, 'b', 'a', 1, 'c'}
"""
# ---------------------------------------------
# Use | to join two sets:

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = set1 | set2
print(set3)

""" Out: 
{3, 'a', 'c', 2, 1, 'b'}
"""
# ---------------------------------------------
# Join Multiple Sets
# Join multiple sets with the union() method:

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}
myset = set1.union(set2, set3, set4)
print(myset)

""" Out: 
{2, 'b', 1, John, banana, 'c', Elena, 'a', cherry, 3, apple}
"""
# ---------------------------------------------
# Use | to join two sets:

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}
myset = set1 | set2 | set3 |set4
print(myset)

""" Out: 
{3, apple, John, 1, cherry, 'a', 'c', banana, 'b', Elena, 2}
"""
# ---------------------------------------------
# Join a Set and a Tuple
# Join a set with a tuple:

x = {"a", "b", "c"}
y = (1, 2, 3)
z = x.union(y)
print(z)

""" Out: 
{3, 'b', 2, 'c', 1, 'a'}
"""

""" Note: The  | operator only allows you to join sets with sets, and not with other data types like you can with the  union() method.  """

# ---------------------------------------------
# Update
# The update() method inserts the items in set2 into set1:

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set1.update(set2)
print(set1)

""" Out: 
{'b', 3, 2, 1, 'c', 'a'}
"""

""" Note: Both union() and update() will exclude any duplicate items.  """

# ---------------------------------------------
# Intersection
# Join set1 and set2, but keep only the duplicates:

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1.intersection(set2)
print(set3)

""" Out: 
{'apple'}
"""
# ---------------------------------------------
# Use & to join two sets:

set1 = {"apple", "banana" , "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1 & set2
print(set3)

""" Out: 
{'apple'}
"""
""" Note: The & operator only allows you to join sets with sets, and not with other data types like you can with the intersection() method.  """

# ---------------------------------------------
# Keep the items that exist in both set1, and set2:

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set1.intersection_update(set2)
print(set1)

""" Out: 
{'apple'}
"""
# ---------------------------------------------
# Join sets that contains the values True, False, 1, and 0, and see what is considered as duplicates:

set1 = {"apple", 1, "banana", 0, "cherry"}
set2 = {False, "google", "microsoft", "apple", True}
set3 = set1.intersection(set2)
print(set3)

""" Out: 
{False, True, 'apple'}
"""
# ---------------------------------------------
# Keep all items from set1 that are not in set2:

set1 = {"apple", "banana" , "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1.difference(set2)
print(set3)

""" Out: 
{'banana', 'cherry'}
"""
# ---------------------------------------------
# Use - to join two sets:

set1 = {"apple", "banana" , "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1 - set2
print(set3)

""" Out: 
{'banana', 'cherry'}
"""

""" Note: The - operator only allows you to join sets with sets, and not with other data types like you can with the difference() method.  """

# ---------------------------------------------
# Use the difference_update() method to keep the items that are not present in both sets:

set1 = {"apple", "banana" , "cherry"}
set2 = {"google", "microsoft", "apple"}
set1.difference_update(set2)
print(set1)

""" Out: 
{'banana', 'cherry'}
"""
# ---------------------------------------------
# Symmetric Differences
# Keep the items that are not present in both sets:

set1 = {"apple", "banana" , "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1.symmetric_difference(set2)
print(set3)

""" Out: 
{'google', 'banana', 'microsoft', 'cherry'}
"""

# ---------------------------------------------
# Use ^ to join two sets:

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}
set3 = set1 ^ set2
print(set3)

""" Out: 
{'google', 'banana', 'microsoft', 'cherry'}
"""

""" Note: The ^ operator only allows you to join sets with sets, and not with other data types like you can with the symmetric_difference() method.  """

# ---------------------------------------------
# Use the symmetric_difference_update() method to keep the items that are not present in both sets:

set1 = {"apple", "banana" , "cherry"}
set2 = {"google", "microsoft", "apple"}
set1.symmetric_difference_update(set2)
print(set1)

""" Out: 
{'google', 'banana', 'microsoft', 'cherry'}
"""

