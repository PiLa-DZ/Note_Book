# Classes and Objects =========================

# ---------------------------------------------
# Create a Class

class MyClass:
  x = 5

print(MyClass)

""" Out: 
<class '__main__.MyClass'>
"""
# ---------------------------------------------
# Create Object

class MyClass:
  x = 5

p1 = MyClass()
print(p1.x)

""" Out: 
5
"""
# ---------------------------------------------
# The __init__() Function
# Create a class named Person, use the __init__() function to assign values for name and age:

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)

""" Out: 
John
36
"""

""" Note: The __init__() function is called automatically every time the class is being used to create a new object.  """

# ---------------------------------------------
# The __str__() Function
# The string representation of an object WITHOUT the __str__() function:

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1)

""" Out: 
<__main__.Person object at 0x15039e602100>
"""
# ---------------------------------------------
# The string representation of an object WITH the __str__() function:

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def __str__(self):
    return f"{self.name}({self.age})"    

p1 = Person("John", 36)

print(p1)

""" Out: 
John(36)
"""
# ---------------------------------------------
# Object Methods
# Insert a function that prints a greeting, and execute it on the p1 object:

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()

""" Out: 
Hello my name is John
"""

""" Note: The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.  """

# ---------------------------------------------
# The self Parameter
# Use the words mysillyobject and abc instead of self:

class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc()

""" Out: 
Hello my name is John
"""
# ---------------------------------------------
# Modify Object Properties
# Set the age of p1 to 40:

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)

p1.age = 40

print(p1.age)

""" Out: 
40
"""
# ---------------------------------------------
# Delete Object Properties
# Delete the age property from the p1 object:

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)

del p1.age

print(p1.age)

""" Out: 
Traceback (most recent call last):
  File "demo_class7.py", line 13, in <module>
    print(p1.age)
AttributeError: 'Person' object has no attribute 'age'
"""
# ---------------------------------------------
# Delete Objects
# Delete the p1 object:

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)

del p1

print(p1)

""" Out: 
Traceback (most recent call last):
  File "demo_class8.py", line 13, in <module>
    print(p1)
NameError: 'p1' is not defined
"""
# ---------------------------------------------
# The pass Statement
class Person:
  pass

# having an empty class definition like this, would raise an error without the pass statement

""" Out: 
"""
