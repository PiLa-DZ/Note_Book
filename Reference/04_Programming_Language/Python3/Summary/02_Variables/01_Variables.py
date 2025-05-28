# ---------------------------------------------
x, y, z = 1, 2, 3
print(x, y, z)

# ---------------------------------------------
x = y = z = 4
print(x, y, z)

# ---------------------------------------------
x = 5

# Get type of x
print(type(x))

# Convert to float
x = float(x)

# Convert to int
x = int(x)

# Convert to string
x = str(x)

# Convert to boolean
x = bool(x)

# ---------------------------------------------
# Unpack a Collection -------------------------
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x, y, z)

# ---------------------------------------------
# Global Variable -----------------------------
def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x) 
