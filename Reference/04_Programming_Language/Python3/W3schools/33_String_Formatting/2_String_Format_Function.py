# String Format Functions =====================

# ---------------------------------------------
# String format()
# Add a placeholder where you want to display the price:

price = 49
txt = "The price is {} dollars"
print(txt.format(price))

""" Out: 
The price is 49 dollars
"""
# ---------------------------------------------
# Format the price to be displayed as a number with two decimals:

price = 49
txt = "The price is {:.2f} dollars"
print(txt.format(price))

""" Out: 
The price is 49.00 dollars
"""
# ---------------------------------------------
# Multiple Values
# If you want to use more values, just add more values to the format() method:


print(txt.format(price, itemno, count))

# ---------------------------------------------
# And add more placeholders:

quantity = 3
itemno = 567
price = 49
myorder = "I want {} pieces of item number {} for {:.2f} dollars."
print(myorder.format(quantity, itemno, price))

""" Out: 
I want 3 pieces of item number 567 for 49.00 dollars.
"""
# ---------------------------------------------
# Index Numbers

quantity = 3
itemno = 567
price = 49
myorder = "I want {0} pieces of item number {1} for {2:.2f} dollars."
print(myorder.format(quantity, itemno, price))

""" Out: 
I want 3 pieces of item number 567 for 49.00 dollars.
"""
# ---------------------------------------------
# Also, if you want to refer to the same value more than once, use the index number:

age = 36
name = "John"
txt = "His name is {1}. {1} is {0} years old."
print(txt.format(age, name))

""" Out: 
His name is John. John is 36 years old.
"""
# ---------------------------------------------
# Named Indexes

myorder = "I have a {carname}, it is a {model}."
print(myorder.format(carname = "Ford", model = "Mustang"))

""" Out: 
I have a Ford, it is a Mustang.
"""
