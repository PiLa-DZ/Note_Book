# ----------------------------------------
#You can use double or single quotes:
print("Hello") # Out: Hello
print('Hello') # Out: Hello

# ----------------------------------------
# Quotes Inside Quotes
print("It's alright")			# Out: It's alright
print("He is called 'Johnny'")	# Out: He is called 'Johnny'
print('He is called "Johnny"')	# Out: He is called "Johnny" 

# ----------------------------------------
# Assign String to a Variable
a = "Hello"
print(a) # Out: Hello

# ----------------------------------------
# Multiline Strings
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)

""" Out:
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. 
"""

# ----------------------------------------
# Or three single quotes:
a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''
print(a)

""" Out:
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. 
"""

""" Note: in the result, the line breaks are inserted at the same position as in the code. """

# ----------------------------------------
# Strings are Arrays
a = "Hello, World!"
print(a[1]) # Out: e

# ----------------------------------------
# Looping Through a String
for x in "banana":
  print(x) 

""" Out:
b
a
n
a
n
a
"""

# ----------------------------------------
# String Length
a = "Hello, World!"
print(len(a)) # Out: 13

# ----------------------------------------
# Check String
txt = "The best things in life are free!"
print("free" in txt) # Out: True

# ----------------------------------------
# Use it in an if statement:
txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.") # Out: Yes, 'free' is present. 


# ----------------------------------------
# Check if NOT
txt = "The best things in life are free!"
print("expensive" not in txt) # Out True

# ----------------------------------------
# Use it in an if statement:
txt = "The best things in life are free!"
if "expensive" not in txt:
  print("No, 'expensive' is NOT present.") # Out: No, 'expensive' is NOT present. 

