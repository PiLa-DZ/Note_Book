# Loop Lists ==================================

# ---------------------------------------------
# Loop Through a List
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)

""" Out:
apple
banana
cherry
"""

# ---------------------------------------------
# Loop Through the Index Numbers
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])

""" Out:
apple
banana
cherry
"""

# ---------------------------------------------
# Using a While Loop
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1

""" Out:
apple
banana
cherry
"""

# ---------------------------------------------
# Looping Using List Comprehension
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist]

""" Out:
apple
banana
cherry
"""

