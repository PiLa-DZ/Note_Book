#! /bin/bash

if ((1 != 1)); then echo "true"; fi

# if (true && true)
if [ 1 -eq 1 ] && [ 1 -eq 1 ]; then echo "Yes"; fi
if [[ 1 -eq 1 && 1 -eq 1 ]]; then echo "Yes"; fi
if [ 1 -eq 1 -a 1 -eq 1 ]; then echo "Yes"; fi

# if (true || true)
if [ 1 -eq 2 ] || [ 1 -eq 1 ]; then echo "Yes"; fi
if [[ 1 -eq 2 || 1 -eq 1 ]]; then echo "Yes"; fi
if [ 1 -eq 2 -o 1 -eq 1 ]; then echo "Yes"; fi

echo "Start ================="
# Start
if ((1 == 2)); then
  echo "1 == 1"
elif ((1 < 2)); then
  echo "1 < 2"
else
  echo "No"
fi

# Equal
echo "Equal ================="
if [ 1 -eq 2 ]; then echo 'Yes'; else echo 'No'; fi

if ((1 == 2)); then echo 'Yes'; else echo 'No'; fi

# Not Equal
echo "Not Equal ============="
if [ 1 -ne 2 ]; then echo 'Yes'; else echo 'No'; fi

# Greater Than
echo "Greater Than =========="
if [ 1 -gt 2 ]; then echo 'Yes'; else echo 'No'; fi

if ((1 > 2)); then echo 'Yes'; else echo 'No'; fi

# Less Than
echo "Less Than ============="
if [ 1 -lt 2 ]; then echo 'Yes'; else echo 'No'; fi

if ((1 < 2)); then echo 'Yes'; else echo 'No'; fi

# Case
echo "Case =================="
case 4 in
1)
  echo "1"
  ;;
2)
  echo "2"
  ;;
3)
  echo "3"
  ;;
*)
  echo "I Don't Know!"
  ;;
esac
