#! /bin/bash

echo "Enter Hex Number:"
read Hex

echo -n "The dicimal value of $Hex is : "
echo "obase=10; ibase=16; $Hex" | bc

# Note: $ sudo pacman -S bc
