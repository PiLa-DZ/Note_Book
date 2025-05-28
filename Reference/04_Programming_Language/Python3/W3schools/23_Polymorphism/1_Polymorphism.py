# Polymorphism ================================

# ---------------------------------------------
# Function Polymorphism

x = "Hello World!"

print(len(x))

""" Out: 
12
"""
# ---------------------------------------------
# Tuple

mytuple = ("apple", "banana", "cherry")

print(len(mytuple))

""" Out: 
3
"""
# ---------------------------------------------
# Dictionary

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

print(len(thisdict))

""" Out: 
3
"""
# ---------------------------------------------
# Class Polymorphism
# Different classes with the same method:

class Car:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model

  def move(self):
    print("Drive!")

class Boat:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model

  def move(self):
    print("Sail!")

class Plane:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model

  def move(self):
    print("Fly!")

car1 = Car("Ford", "Mustang")       #Create a Car class
boat1 = Boat("Ibiza", "Touring 20") #Create a Boat class
plane1 = Plane("Boeing", "747")     #Create a Plane class

for x in (car1, boat1, plane1):
  x.move()

""" Out: 
Drive!
Sail!
Fly!
"""
# ---------------------------------------------
# Inheritance Class Polymorphism
# Create a class called Vehicle and make Car, Boat, Plane child classes of Vehicle:

class Vehicle:
  def __init__(self, brand, model):
    self.brand = brand
    self.model = model

  def move(self):
    print("Move!")

class Car(Vehicle):
  pass

class Boat(Vehicle):
  def move(self):
    print("Sail!")

class Plane(Vehicle):
  def move(self):
    print("Fly!")

car1 = Car("Ford", "Mustang") #Create a Car object
boat1 = Boat("Ibiza", "Touring 20") #Create a Boat object
plane1 = Plane("Boeing", "747") #Create a Plane object

for x in (car1, boat1, plane1):
  print(x.brand)
  print(x.model)
  x.move()

""" Out: 
 Ford
Mustang
Move!
Ibiza
Touring 20
Sail!
Boeing
747
Fly!
"""
