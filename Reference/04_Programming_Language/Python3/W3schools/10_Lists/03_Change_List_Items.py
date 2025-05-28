# Change List Items ===========================

# ---------------------------------------------
# Change the second item:
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist) # Out: ['apple', 'blackcurrant', 'cherry']

# ---------------------------------------------
# Change a Range of Item Values

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist) # Out: ['apple', 'blackcurrant', 'watermelon', 'orange', 'kiwi', 'mango']

# ---------------------------------------------
# hange the second value by replacing it with two new values:
thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist) # Out: ['apple', 'blackcurrant', 'watermelon', 'cherry']

# ---------------------------------------------
""" Note: The length of the list will change when the number of items inserted does not match the number of items replaced. """
thislist = ["apple", "banana", "cherry"]
thislist[1:3] = ["watermelon"]
print(thislist) # Out: ['apple', 'watermelon']

# ---------------------------------------------
# Insert Items

thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist) # Out: ['apple', 'banana', 'watermelon', 'cherry']

""" Note: As a result of the example above, the list will now contain 4 items.  """

