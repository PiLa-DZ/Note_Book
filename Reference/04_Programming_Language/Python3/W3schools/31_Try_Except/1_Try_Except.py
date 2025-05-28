# Try Except ==================================

# The try block lets you test a block of code for errors.

# The except block lets you handle the error.

# The else block lets you execute code when there is no error.

# The finally block lets you execute code, regardless of the result of the try- and except blocks.

# ---------------------------------------------
# Exception Handling
# The try block will generate an exception, because x is not defined:

#The try block will generate an error, because x is not defined:

try:
  print(x)
except:
  print("An exception occurred")

""" Out: 
An exception occurred
"""
# ---------------------------------------------
# This statement will raise an error, because x is not defined:

#This will raise an exception, because x is not defined:

print(x)

""" Out: 
Traceback (most recent call last):
  File "demo_try_except_error.py", line 3, in <module>
    print(x)
NameError: name 'x' is not defined
"""
# ---------------------------------------------
# Many Exceptions
# Print one message if the try block raises a NameError and another for other errors:

#The try block will generate a NameError, because x is not defined:

try:
  print(x)
except NameError:
  print("Variable x is not defined")
except:
  print("Something else went wrong")

""" Out: 
Variable x is not defined
"""
# ---------------------------------------------
# Else
# In this example, the try block does not generate any error:

#The try block does not raise any errors, so the else block is executed:

try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")

""" Out: 
Hello
Nothing went wrong
"""
# ---------------------------------------------
# Finally

#The finally block gets executed no matter if the try block raises any errors or not:

try:
  print(x)
except:
  print("Something went wrong")
finally:
  print("The 'try except' is finished")

""" Out: 
Something went wrong
The 'try except' is finished
"""
# ---------------------------------------------
# Try to open and write to a file that is not writable:

#The try block will raise an error when trying to write to a read-only file:

try:
  f = open("demofile.txt")
  try:
    f.write("Lorum Ipsum")
  except:
    print("Something went wrong when writing to the file")
  finally:
    f.close()
except:
  print("Something went wrong when opening the file")  

""" Out: 
Something went wrong when writing to the file
"""
# ---------------------------------------------
# Raise an exception
# Raise an error and stop the program if x is lower than 0:

x = -1

if x < 0:
  raise Exception("Sorry, no numbers below zero")

""" Out: 
Traceback (most recent call last):
  File "demo_ref_keyword_raise.py", line 4, in <module>
    raise Exception("Sorry, no numbers below zero")
Exception: Sorry, no numbers below zero
"""
# ---------------------------------------------
# Raise a TypeError if x is not an integer:

x = "hello"

if not type(x) is int:
  raise TypeError("Only integers are allowed")

""" Out: 
Traceback (most recent call last):
  File "demo_ref_keyword_raise2.py", line 4, in <module>
    raise TypeError("Only integers are allowed")
TypeError: Only integers are allowed
"""
