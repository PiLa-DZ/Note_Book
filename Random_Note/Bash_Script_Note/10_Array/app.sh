#! /bin/bash

arr=('one' 'two' 'three' 'four' 'five')

unset arr[1] # Delete Item

arr[0]="zero"

echo ${arr[@]} # Print all array
echo ${!arr[@]} # Print Indexes
echo ${#arr[@]} # Print Length
