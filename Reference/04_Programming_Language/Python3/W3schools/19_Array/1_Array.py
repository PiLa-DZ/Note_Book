# Arrays ======================================
""" Note: Python does not have built-in support for Arrays, but Python Lists can be used instead.  """

""" Note: This page shows you how to use LISTS as ARRAYS, however, to work with arrays in Python you will have to import a library, like the NumPy library.  """

# ---------------------------------------------
# Create an array containing car names:

cars = ["Ford", "Volvo", "BMW"]

print(cars)

""" Out: 
['Ford', 'Volvo', 'BMW']
"""
# ---------------------------------------------
# What is an Array?
# An array is a special variable, which can hold more than one value at a time.

# If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
car1 = "Ford"
car2 = "Volvo"
car3 = "BMW"

# However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

# The solution is an array!

# An array can hold many values under a single name, and you can access the values by referring to an index number.

# ---------------------------------------------
# Access the Elements of an Array
# Get the value of the first array item:

cars = ["Ford", "Volvo", "BMW"]
x = cars[0]
print(x)

""" Out: 
Ford
"""
# ---------------------------------------------
# Modify the value of the first array item:

cars = ["Ford", "Volvo", "BMW"]
cars[0] = "Toyota"
print(cars)

""" Out: 
['Toyota', 'Volvo', 'BMW']
"""
# ---------------------------------------------
# The Length of an Array
# Return the number of elements in the cars array:

cars = ["Ford", "Volvo", "BMW"]
x = len(cars)
print(x)

""" Out: 
3
"""
""" Note: The length of an array is always one more than the highest array index.  """

# ---------------------------------------------
# Looping Array Elements
# Print each item in the cars array:

cars = ["Ford", "Volvo", "BMW"]
for x in cars:
  print(x)

""" Out: 
Ford
Volvo
BMW
"""
# ---------------------------------------------
# Adding Array Elements
# Add one more element to the cars array:

cars = ["Ford", "Volvo", "BMW"]
cars.append("Honda")
print(cars)

""" Out: 
['Ford', 'Volvo', 'BMW', 'Honda']
"""
# ---------------------------------------------
# Removing Array Elements
# Delete the second element of the cars array:

cars = ["Ford", "Volvo", "BMW"]
cars.pop(1)
print(cars)

""" Out: 
['Ford', 'BMW']
"""
# ---------------------------------------------
# Delete the element that has the value "Volvo":

cars = ["Ford", "Volvo", "BMW"]
cars.remove("Volvo")
print(cars)

""" Out: 
['Ford', 'BMW']
"""

# ---------------------------------------------

# ---------------------------------------------
""" Note: The list's remove() method only removes the first occurrence of the specified value.  """
# ---------------------------------------------

# ---------------------------------------------
