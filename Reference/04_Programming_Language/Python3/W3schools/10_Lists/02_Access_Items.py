# Access Items ================================
""" Note: The first item has index 0.  """

# ---------------------------------------------
thislist = ["apple", "banana", "cherry"]
print(thislist[1]) # Out: banana

# ---------------------------------------------
# Negative Indexing
thislist = ["apple", "banana", "cherry"]
print(thislist[-1]) # cherry

# ---------------------------------------------
# Range of Indexes
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5]) # Out: ['cherry', 'orange', 'kiwi']

# This will return the items from position 2 to 5.
# Remember that the first item is position 0,
# and note that the item in position 5 is NOT included

# ---------------------------------------------
# This example returns the items from the beginning to, but NOT including, "kiwi":
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[:4])

# ---------------------------------------------
# This example returns the items from "cherry" to the end:
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:])

# ---------------------------------------------
# Range of Negative indexes
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1]) # Out: ['orange', 'kiwi', 'melon']

# Negative indexing means starting from the end of the list.
# This example returns the items from index -4 (included) to index -1 (excluded)
# Remember that the last item has the index -1,

# ---------------------------------------------
# Check if Item Exists
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
  print("Yes, 'apple' is in the fruits list") # Out: Yes, 'apple' is in the fruits list

