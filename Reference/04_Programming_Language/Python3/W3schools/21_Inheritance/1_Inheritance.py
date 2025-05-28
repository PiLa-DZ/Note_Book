# Inheritance =================================

# ---------------------------------------------
# Create a Parent Class
# Create a class named Person, with firstname and lastname properties, and a printname method:

class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

#Use the Person class to create an object, and then execute the printname method:

x = Person("John", "Doe")
x.printname()

""" Out: 
John Doe
"""
# ---------------------------------------------
# Create a Child Class
# Create a class named Student, which will inherit the properties and methods from the Person class:
class Student(Person):
  pass 

""" Note: Use the pass keyword when you do not want to add any other properties or methods to the class.  """

# ---------------------------------------------
# Use the Student class to create an object, and then execute the printname method:

class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  pass

x = Student("Mike", "Olsen")
x.printname()

""" Out: 
Mike Olsen
"""
# ---------------------------------------------
# Add the __init__() Function

""" Note: The __init__() function is called automatically every time the class is being used to create a new object. """
# ---------------------------------------------
# Add the __init__() function to the Student class:

class Student(Person):
  def __init__(self, fname, lname):
    #add properties etc.

""" Note: The child's __init__() function overrides the inheritance of the parent's __init__() function.  """ 

# ---------------------------------------------
# To keep the inheritance of the parent's __init__() function, add a call to the parent's __init__() function:

class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname):
    Person.__init__(self, fname, lname)

x = Student("Mike", "Olsen")
x.printname()

""" Out: 
Mike Olsen
"""
# ---------------------------------------------
# Use the super() Function

class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)

x = Student("Mike", "Olsen")
x.printname()

""" Out: 
Mike Olsen
"""
# ---------------------------------------------
# Add Properties
# Add a property called graduationyear to the Student class:

class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)
    self.graduationyear = 2019

x = Student("Mike", "Olsen")
print(x.graduationyear)

""" Out: 
2019
"""
# ---------------------------------------------
# Add a year parameter, and pass the correct year when creating objects:

class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

x = Student("Mike", "Olsen", 2019)
print(x.graduationyear)

""" Out: 
2019
"""
# ---------------------------------------------
# Add Methods
# Add a method called welcome to the Student class:

class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname, year):
    super().__init__(fname, lname)
    self.graduationyear = year

  def welcome(self):
    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)

x = Student("Mike", "Olsen", 2019)
x.welcome()

""" Out: 
Welcome Mike Olsen to the class of 2019
"""
