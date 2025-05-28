# Example 1 --------------------------------
 x = "Car"

def myfunc():
  print(x)		# Out: Car

myfunc() 

# ------------------------------------------

# Example 2 --------------------------------
x = "Car"

def myfunc():
  x = "Food"
  print(x)		# Out: Food

myfunc()

print(x)		# Out: Car

# ------------------------------------------

# Example 3 --------------------------------
# The global keyword

def myfunc():
  global x
  x = "Food"	# Out: Food

myfunc()

print(x)

# ------------------------------------------

# Example 4 --------------------------------
# The global keyword
x = "Car"

def myfunc():
  global x
  x = "Food"

myfunc()

print(x)		# Out: Food

# ------------------------------------------

