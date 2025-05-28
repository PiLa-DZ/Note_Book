# String Formatting ===========================

# ---------------------------------------------
# F-Strings

txt = f"The price is 49 dollars"
print(txt)

""" Out: 
The price is 49 dollars
"""
# ---------------------------------------------
# Placeholders and Modifiers
# Add a placeholder for the price variable:

price = 59
txt = f"The price is {price} dollars"
print(txt)

""" Out: 
The price is 59 dollars
"""
# ---------------------------------------------
# Display the price with 2 decimals:

price = 59
txt = f"The price is {price:.2f} dollars"
print(txt)

""" Out: 
The price is 59.00 dollars
"""
# ---------------------------------------------
# Display the value 95 with 2 decimals:

txt = f"The price is {95:.2f} dollars"
print(txt)

""" Out: 
The price is 95.00 dollars
"""
# ---------------------------------------------
# Perform Operations in F-Strings
# Perform a math operation in the placeholder, and return the result:

txt = f"The price is {20 * 59} dollars"
print(txt)

""" Out: 
The price is 1180 dollars
"""
# ---------------------------------------------
# Add taxes before displaying the price:

price = 59
tax = 0.25
txt = f"The price is {price + (price * tax)} dollars"
print(txt)

""" Out: 
The price is 73.75 dollars
"""
# ---------------------------------------------
# Return "Expensive" if the price is over 50, otherwise return "Cheap":

price = 49
txt = f"It is very {'Expensive' if price>50 else 'Cheap'}"

print(txt)

""" Out: 
It is very Cheap
"""
# ---------------------------------------------
# Execute Functions in F-Strings
# Use the string method upper()to convert a value into upper case letters: 

fruit = "apples"
txt = f"I love {fruit.upper()}"
print(txt)

""" Out: 
I love APPLES
"""
# ---------------------------------------------
# Create a function that converts feet into meters:

def myconverter(x):
  return x * 0.3048

txt = f"The plane is flying at a {myconverter(30000)} meter altitude"
print(txt)

""" Out: 
The plane is flying at a 9144.0 meter altitude
"""
# ---------------------------------------------
# More Modifiers
# Use a comma as a thousand separator:

price = 59000
txt = f"The price is {price:,} dollars"
print(txt)

""" Out: 
The price is 59,000 dollars
"""
