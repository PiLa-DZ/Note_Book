#! /bin/bash

a=1
b=2

echo "hi"
echo "hi"
echo "hi"

set -x # Start Debug
echo "$a $b"
echo "Hello World!"
set +x # End Debug

if [[ a < b ]]; then
  echo "a < b : Yes"
fi



# Debug All
#--> #! /bin/bash -x
# or
#--> $ bash -x ./app.sh
