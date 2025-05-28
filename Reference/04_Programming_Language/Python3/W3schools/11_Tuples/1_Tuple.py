# Tuples ======================================

# ---------------------------------------------
thistuple = ("apple", "banana", "cherry")
print(thistuple)

""" Out: 
('apple', 'banana', 'cherry')
"""
# ---------------------------------------------
# Tuples allow duplicate values:
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)

""" Out: 
('apple', 'banana', 'cherry', 'apple', 'cherry')
"""
# ---------------------------------------------
# Tuple Length
thistuple = tuple(("apple", "banana", "cherry"))
print(len(thistuple))

""" Out: 
3
"""
# ---------------------------------------------
# Create Tuple With One Item
thistuple = ("apple",)
print(type(thistuple))

#NOT a tuple
thistuple = ("apple")
print(type(thistuple))

""" Out: 
<class 'tuple'>
<class 'str'>
"""
# ---------------------------------------------
# Tuple Items - Data Types
tuple1 = ("apple", "banana", "cherry")
tuple2 = (1, 5, 7, 9, 3)
tuple3 = (True, False, False)

print(tuple1)
print(tuple2)
print(tuple3)

""" Out: 
('apple', 'banana', 'cherry')
(1, 5, 7, 9, 3)
(True, False, False)
"""
# ---------------------------------------------
# A tuple with strings, integers and boolean values:
tuple1 = ("abc", 34, True, 40, "male")
print(tuple1)

""" Out: 
('abc', 34, True, 40, 'male')
"""
# ---------------------------------------------
# type()

# From Python's perspective, tuples are defined as objects with the data type 'tuple':
# Pseudo Code
<class 'tuple'> 

# ---------------------------------------------
# What is the data type of a tuple?
mytuple = ("apple", "banana", "cherry")
print(type(mytuple))

""" Out: 
<class 'tuple'>
"""
# ---------------------------------------------
# The tuple() Constructor
thistuple = tuple(("apple", "banana", "cherry"))
print(thistuple)

""" Out: 
('apple', 'banana', 'cherry')
"""

