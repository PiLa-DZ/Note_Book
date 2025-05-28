# Iterators ===================================

# ---------------------------------------------
# Iterator vs Iterable
# Return an iterator from a tuple, and print each value:

mytuple = ("apple", "banana", "cherry")
myit = iter(mytuple)

print(next(myit))
print(next(myit))
print(next(myit))

""" Out: 
apple
banana
cherry
"""
# ---------------------------------------------
# Strings are also iterable objects, containing a sequence of characters:

mystr = "banana"
myit = iter(mystr)

print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))
print(next(myit))

""" Out: 
b
a
n
a
n
a
"""
# ---------------------------------------------
# Looping Through an Iterator
# Iterate the values of a tuple:

mytuple = ("apple", "banana", "cherry")

for x in mytuple:
  print(x)

""" Out: 
apple
banana
cherry
"""
# ---------------------------------------------
# Iterate the characters of a string:

mystr = "banana"

for x in mystr:
  print(x)

""" Out: 
b
a
n
a
n
a
"""
# ---------------------------------------------
# Create an Iterator
# Create an iterator that returns numbers, starting with 1, and each sequence will increase by one (returning 1,2,3,4,5 etc.):

class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    x = self.a
    self.a += 1
    return x

myclass = MyNumbers()
myiter = iter(myclass)

print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))
print(next(myiter))

""" Out: 
1
2
3
4
5
"""
# ---------------------------------------------
# StopIteration
# Stop after 20 iterations:

class MyNumbers:
  def __iter__(self):
    self.a = 1
    return self

  def __next__(self):
    if self.a <= 20:
      x = self.a
      self.a += 1
      return x
    else:
      raise StopIteration

myclass = MyNumbers()
myiter = iter(myclass)

for x in myiter:
  print(x)

""" Out: 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
"""
