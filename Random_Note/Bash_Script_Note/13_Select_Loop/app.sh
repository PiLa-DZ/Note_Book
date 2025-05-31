#! /bin/bash

select colors in Red Blue White Black
do 
  case $colors in
    Red )
      echo "Your Color is : Red" ;;
    Blue )
      echo "Your Color is : Blue" ;;
    White )
      echo "Your Color is : White" ;;
    Black )
      echo "Your Color is : Black" ;;
    * )
      echo "Please Select From 1 To 4" ;;
  esac
done
