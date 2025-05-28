# Functions ===================================

# ---------------------------------------------
# Creating a Function

def my_function():
  print("Hello from a function") 

# ---------------------------------------------
# Calling a Function

def my_function():
  print("Hello from a function")

my_function()

""" Out: 
Hello from a function
"""
# ---------------------------------------------
# Arguments

def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")
my_function("Linus")

""" Out: 
Emil Refsnes
Tobias Refsnes
Linus Refsnes
"""

""" Note: Arguments are often shortened to args in Python documentations.  """

# ---------------------------------------------
# Number of Arguments
# This function expects 2 arguments, and gets 2 arguments:

def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Emil", "Refsnes")

""" Out: 
Emil Refsnes
"""
# ---------------------------------------------
# This function expects 2 arguments, but gets only 1:

def my_function(fname, lname):
  print(fname + " " + lname)

my_function("Emil")

""" Out: 
Traceback (most recent call last):
  File "demo_function_args_error.py", line 4, in <module>
    my_function("Emil")
TypeError: my_function() missing 1 required positional argument: 'lname'
"""
# ---------------------------------------------
# Arbitrary Arguments, *args
# If the number of arguments is unknown, add a * before the parameter name:

def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus")

""" Out: 
The youngest child is Linus
"""

""" Arbitrary Arguments are often shortened to *args in Python documentations.  """

# ---------------------------------------------
# Keyword Arguments
def my_function(child3, child2, child1):
  print("The youngest child is " + child3)

my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")

""" Out: 
The youngest child is Linus
"""

""" Note: The phrase Keyword Arguments are often shortened to kwargs in Python documentations.  """

# ---------------------------------------------
# Arbitrary Keyword Arguments, **kwargs
# If the number of keyword arguments is unknown, add a double ** before the parameter name:

def my_function(**kid):
  print("His last name is " + kid["lname"])

my_function(fname = "Tobias", lname = "Refsnes")

""" Out: 
His last name is Refsnes
"""

""" Arbitrary Kword Arguments are often shortened to **kwargs in Python documentations.  """

# ---------------------------------------------
# Default Parameter Value

def my_function(country = "Norway"):
  print("I am from " + country)

my_function("Sweden")
my_function("India")
my_function()
my_function("Brazil")

""" Out: 
I am from Sweden
I am from India
I am from Norway
I am from Brazil
"""
# ---------------------------------------------
# Passing a List as an Argument

def my_function(food):
  for x in food:
    print(x)

fruits = ["apple", "banana", "cherry"]

my_function(fruits)

""" Out: 
apple
banana
cherry
"""
# ---------------------------------------------
# Return Values

def my_function(x):
  return 5 * x

print(my_function(3))
print(my_function(5))
print(my_function(9))

""" Out: 
15
25
45
"""
# ---------------------------------------------
# The pass Statement

def myfunction():
  pass

# having an empty function definition like this, would raise an error without the pass statement

""" Out: 
"""
# ---------------------------------------------
# Positional-Only Arguments

def my_function(x, /):
  print(x)

my_function(3)

""" Out: 
3
"""
# ---------------------------------------------
# Without the , / you are actually allowed to use keyword arguments even if the function expects positional arguments:

def my_function(x):
  print(x)

my_function(x = 3)

""" Out: 
3
"""
# ---------------------------------------------
# But when adding the , / you will get an error if you try to send a keyword argument:

def my_function(x, /):
  print(x)

my_function(x = 3)

""" Out: 
Traceback (most recent call last):
  File "./prog.py", line 4, in <module>
TypeError: my_function() got some positional-only arguments passed as keyword arguments: 'x'
"""
# ---------------------------------------------
# Keyword-Only Arguments

def my_function(*, x):
  print(x)

my_function(x = 3)

""" Out: 
3
"""

# ---------------------------------------------
# Without the *, you are allowed to use positionale arguments even if the function expects keyword arguments:

def my_function(x):
  print(x)

my_function(3)

""" Out: 
3
"""
# ---------------------------------------------
# But when adding the *, / you will get an error if you try to send a positional argument:

def my_function(*, x):
  print(x)

my_function(3)

""" Out: 
Traceback (most recent call last):
  File "./prog.py", line 4, in <module>
TypeError: my_function() takes 0 positional arguments but 1 was given
"""
# ---------------------------------------------
# Combine Positional-Only and Keyword-Only

def my_function(a, b, /, *, c, d):
  print(a + b + c + d)

my_function(5, 6, c = 7, d = 8)

""" Out: 
26
"""
# ---------------------------------------------
# Recursion

def tri_recursion(k):
  if(k > 0):
    result = k + tri_recursion(k - 1)
    print(result)
  else:
    result = 0
  return result

print("\n\nRecursion Example Results")
tri_recursion(6)

""" Out: 
Recursion Example Results
1
3
6
10
15
21
"""

