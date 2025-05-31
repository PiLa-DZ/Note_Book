#! /bin/bash

# Read only variable
declare -r nabil="a"

echo $nabil

nabil="b" # You can't chane that

echo $nabil

# To print all variables
# $ declare -p
