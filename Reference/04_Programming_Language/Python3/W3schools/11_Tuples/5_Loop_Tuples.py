# Loop Tuple ==================================

# ---------------------------------------------
# You can loop through the tuple items by using a for loop.

thistuple = ("apple", "banana", "cherry")
for x in thistuple:
  print(x)

""" Out: 
apple
banana
cherry 
"""
# ---------------------------------------------
# Loop Through the Index Numbers

thistuple = ("apple", "banana", "cherry")
for i in range(len(thistuple)):
  print(thistuple[i])

""" Out: 
apple
banana
cherry
"""
# ---------------------------------------------
# Using a While Loop

thistuple = ("apple", "banana", "cherry")
i = 0
while i < len(thistuple):
  print(thistuple[i])
  i = i + 1

""" Out: 
apple
banana
cherry
"""
