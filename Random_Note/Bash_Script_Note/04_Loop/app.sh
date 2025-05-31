#! /bin/bash


# While
i=0
while ((i < 5))
do
  echo "$i"
  i=$(( i+1 ))
done

# Until
j=0
until ((j == 5))
do
  echo "$j"
  j=$(( j+1 ))
done

# For
for i in {0..20..2} # This is a comment
do

  if (($i == 2)); then
    continue 
  fi

  if (($i >= 10)); then
    break 
  fi

  echo "$i"

done

