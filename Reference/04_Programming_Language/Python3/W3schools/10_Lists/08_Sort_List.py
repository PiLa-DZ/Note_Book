# Sort Lists ==================================

# ---------------------------------------------
# Sort List Alphanumerically

thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort()
print(thislist)

""" Out: 
['banana', 'kiwi', 'mango', 'orange', 'pineapple']
"""
# ---------------------------------------------
# Sort the list numerically:
thislist = [100, 50, 65, 82, 23]
thislist.sort()
print(thislist)

""" Out: 
[23, 50, 65, 82, 100]
"""
# ---------------------------------------------
# Sort Descending
thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort(reverse = True)
print(thislist) 

""" Out: 
['pineapple', 'orange', 'mango', 'kiwi', 'banana']
"""
# ---------------------------------------------
# Sort the list descending:
thislist = [100, 50, 65, 82, 23]
thislist.sort(reverse = True)
print(thislist)

""" Out: 
[100, 82, 65, 50, 23]
"""
# ---------------------------------------------
# Customize Sort Function
 def myfunc(n):
  return abs(n - 50)

thislist = [100, 50, 65, 82, 23]
thislist.sort(key = myfunc)
print(thislist) 

""" Out: 
[50, 65, 23, 82, 100]
"""
# ---------------------------------------------
# Case Insensitive Sort
thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.sort()
print(thislist)

""" Out: 
['Kiwi', 'Orange', 'banana', 'cherry']
"""
# ---------------------------------------------
# Perform a case-insensitive sort of the list:
thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.sort(key = str.lower)
print(thislist) 

""" Out: 
['banana', 'cherry', 'Kiwi', 'Orange']
"""
# ---------------------------------------------
# Reverse Order
thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.reverse()
print(thislist)

""" Out: 
['cherry', 'Kiwi', 'Orange', 'banana']
"""

