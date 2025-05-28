# Unpack Tuples ===============================

# ---------------------------------------------
# When we create a tuple, we normally assign values to it. This is called "packing" a tuple:
fruits = ("apple", "banana", "cherry")
print(fruits)

""" Out: 
('apple', 'banana', 'cherry')
"""
# ---------------------------------------------
# But, in Python, we are also allowed to extract the values back into variables. This is called "unpacking":
fruits = ("apple", "banana", "cherry")
(green, yellow, red) = fruits
print(green)
print(yellow)
print(red)

""" Out: 
apple
banana
cherry
"""

""" Note: The number of variables must match the number of values in the tuple, if not, you must use an asterisk to collect the remaining values as a list.  """

# ---------------------------------------------
# Using Asterisk*
# Assign the rest of the values as a list called "red":

fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
(green, yellow, *red) = fruits
print(green)
print(yellow)
print(red)

""" Out: 
apple
banana
['cherry', 'strawberry', 'raspberry']
"""
# ---------------------------------------------
# Add a list of values the "tropic" variable:

fruits = ("apple", "mango", "papaya", "pineapple", "cherry")
(green, *tropic, red) = fruits
print(green)
print(tropic)
print(red)

""" Out: 
apple
['mango', 'papaya', 'pineapple']
cherry
"""
