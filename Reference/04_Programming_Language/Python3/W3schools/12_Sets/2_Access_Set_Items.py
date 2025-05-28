# Access Set Items ============================

# ---------------------------------------------
# Access Items
# Loop through the set, and print the values:

thisset = {"apple", "banana", "cherry"}
for x in thisset:
  print(x)

""" Out: 
cherry
banana
apple
"""
# ---------------------------------------------
# Check if "banana" is present in the set:

thisset = {"apple", "banana", "cherry"}
print("banana" in thisset)

""" Out: 
True
"""
# ---------------------------------------------
# Check if "banana" is NOT present in the set:

thisset = {"apple", "banana", "cherry"}
print("banana" not in thisset)

""" Out: 
False
"""
