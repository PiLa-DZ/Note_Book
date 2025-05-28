# Modules =====================================

# ---------------------------------------------
# What is a Module?
# Consider a module to be the same as a code library.
# A file containing a set of functions you want to include in your application.

# ---------------------------------------------
# Create a Module

# To create a module just save the code you want in a file with the file extension .py:
# Example
# Get your own Python Server

# Save this code in a file named mymodule.py
def greeting(name):
  print("Hello, " + name)

# ---------------------------------------------
# Use a Module
# Import the module named mymodule, and call the greeting function:

import mymodule

mymodule.greeting("Jonathan")

""" Out: 
Hello, Jonathan
"""
# ---------------------------------------------

# ---------------------------------------------
""" Note: When using a function from a module, use the syntax: module_name.function_name.  """
# ---------------------------------------------

# ---------------------------------------------
# Variables in Module
# Save this code in the file mymodule.py
person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
} 

# Import the module named mymodule, and access the person1 dictionary:
import mymodule

a = mymodule.person1["age"]
print(a)

""" Out: 
36
"""
# ---------------------------------------------
# Naming a Module
# Create an alias for mymodule called mx:

import mymodule as mx

a = mx.person1["age"]
print(a)

""" Out: 
36
"""
# ---------------------------------------------
# Built-in Modules
# Import and use the platform module:

import platform

x = platform.system()
print(x)

""" Out: 
Windows
"""
# ---------------------------------------------
# Using the dir() Function
# List all the defined names belonging to the platform module:

import platform

x = dir(platform)
print(x)

""" Out: 
['DEV_NULL', '_UNIXCONFDIR', 'WIN32_CLIENT_RELEASES', 'WIN32_SERVER_RELEASES', '__builtins__', '__cached__', '__copyright__', '__doc__', '__file__', '__loader__', '__name__', '__package __', '__spec__', '__version__', '_default_architecture', '_dist_try_harder', '_follow_symlinks', '_ironpython26_sys_version_parser', '_ironpython_sys_version_parser', '_java_getprop', '_libc_search', '_linux_distribution', '_lsb_release_version', '_mac_ver_xml', '_node', '_norm_version', '_perse_release_file', '_platform', '_platform_cache', '_pypy_sys_version_parser', '_release_filename', '_release_version', '_supported_dists', '_sys_version', '_sys_version_cache', '_sys_version_parser', '_syscmd_file', '_syscmd_uname', '_syscmd_ver', '_uname_cache', '_ver_output', 'architecture', 'collections', 'dist', 'java_ver', 'libc_ver', 'linux_distribution', 'mac_ver', 'machine', 'node', 'os', 'platform', 'popen', 'processor', 'python_branch', 'python_build', 'python_compiler', 'python_implementation', 'python_revision', 'python_version', 'python_version_tuple', 're', 'release', 'subprocess', 'sys', 'system', 'system_aliases', 'uname', 'uname_result', 'version', 'warnings', 'win32_ver']
"""
# ---------------------------------------------

# ---------------------------------------------
""" Note: The dir() function can be used on all modules, also the ones you create yourself.  """
# ---------------------------------------------

# ---------------------------------------------
# Import From Module
# The module named mymodule has one function and one dictionary:
def greeting(name):
  print("Hello, " + name)

person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}

# Import only the person1 dictionary from the module:

from mymodule import person1

print(person1["age"])

""" Out: 
36
"""
""" Note: When importing using the from keyword, do not use the module name when referring to elements in the module. Example: person1["age"], not mymodule.person1["age"] """

