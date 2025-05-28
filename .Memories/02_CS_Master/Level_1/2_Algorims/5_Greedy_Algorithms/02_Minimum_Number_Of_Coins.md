# Greedy Algorithms ##########################################
# Minimum number of coins ####################################
  - Given a value of "n"
  - We have coins type of (1, 5, 10, 25, 50, 100)
  - What is minimum number of coins needs to get "n"

## Example
  - n = 173
    173 > 100 --> n = 73, c = 1
    73  >  50 --> n = 23, c = 2
    23  >  10 --> n = 13, c = 3
    13  >  10 --> n =  3, c = 4
     3  >   1 --> n =  2, c = 5
     2  >   1 --> n =  1, c = 6
     1  >   1 --> n =  0, c = 7

## Example Version 2
  c = c + (n/100)
  n = n % 100
  c = c + (n/50)
  n = n % 50
  c = c + (n/25)
  n = n % 25
  ...
