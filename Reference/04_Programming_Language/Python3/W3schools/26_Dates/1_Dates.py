# Dates and Times =============================

# ---------------------------------------------
# Import the datetime module and display the current date:

import datetime
x = datetime.datetime.now()
print(x)

""" Out: 
2024-07-12 18:01:07.376839
"""
# ---------------------------------------------
# Return the year and name of weekday:

import datetime
x = datetime.datetime.now()
print(x.year)
print(x.strftime("%A"))

""" Out: 
2024
Friday
"""
# ---------------------------------------------
# Creating Date Objects

import datetime
x = datetime.datetime(2020, 5, 17)
print(x)

""" Out: 
2020-05-17 00:00:00
"""
# ---------------------------------------------
# The strftime() Method

import datetime
x = datetime.datetime(2018, 6, 1)
print(x.strftime("%B"))

""" Out: 
June
"""
