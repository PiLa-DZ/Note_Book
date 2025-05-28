# Dynamic Programming ########################################
# Fibonacci Series ###########################################

## Memoization Way
  ## Psuedo Code
  arr[max]
  fib(n)
    if n == 1 or n == 2 : return 1
    if arr[n] is null   : arr[n] = fib(n-1) + fib(n-2)
    return arr[n]

## Tabulation Way
  ## Psuedo Code
  arr[max]
  fib(n)
    arr[1] = 1
    arr[2] = 2
    for i = 3 to n
      arr[i] = arr[i-1] + arr[i-2]
    return arr[n]

  
