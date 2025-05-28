# Remove specified Item =======================

# ---------------------------------------------
# The remove() method removes the specified item.
thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist) # Out: ['apple', 'cherry']

# ---------------------------------------------
# Remove the first occurrence of "banana":
thislist = ["apple", "banana", "cherry", "banana", "kiwi"]
thislist.remove("banana")
print(thislist) # Out: ['apple', 'cherry', 'banana', 'kiwi']

# ---------------------------------------------
# Remove Specified Index
thislist = ["apple", "banana", "cherry"]
thislist.pop(1)
print(thislist) # Out: ['apple', 'cherry']

# ---------------------------------------------
# If you do not specify the index, the pop() method removes the last item.
thislist = ["apple", "banana", "cherry"]
thislist.pop()
print(thislist) # Out: ['apple', 'banana']

# ---------------------------------------------
# The del keyword also removes the specified index:
thislist = ["apple", "banana", "cherry"]
del thislist[0]
print(thislist) # Out: ['banana', 'cherry']

# ---------------------------------------------
# The del keyword can also delete the list completely.
thislist = ["apple", "banana", "cherry"]
del thislist
print(thislist) 
#this will cause an error because you have succsesfully deleted "thislist".

""" Out: 
Traceback (most recent call last):
  File "demo_list_del2.py", line 3, in <module>
    print(thislist) #this will cause an error because you have succsesfully deleted "thislist".
NameError: name 'thislist' is not defined
"""

# ---------------------------------------------
# Clear the List
thislist = ["apple", "banana", "cherry"]
thislist.clear()
print(thislist) # Out: []

