#! /bin/bash

echo "Enter any key to continue!"

while [ true ] ; do
  read -t 3 -n 1
  if [ $? = 0 ] ; then
    echo " The While is Stoped"
    exit;
  else
    echo "Still Waiting you !!!"
  fi
done
