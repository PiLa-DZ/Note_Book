#! /bin/bash

arr=("$@")

echo $0 $1 $2 $3
echo $@
echo ${arr[1]} ${arr[3]}

# Array Length
echo $#
