# Divide & Conquer ###########################################
# Calculate Power ############################################
## Pow(X,N)
#### Psuedo Code
if n = 1
  return x
if n is even
  return pow(x, n/2) * pow(x, n/2)
if n is odd
  return pow(x, n/2) * pow(x, n/2) * x

#### Analysis
T(n) = 2T(n/2) + 1 = O(n)

## Pow(X,N) Version 2
#### Psuedo Code
if n = 1
  return x
res = pow(x, n/2)
if n is even
  return res * res
if n is odd
  return res * res * x

#### Analysis
T(n) = T(n/2) + 1 = O(lg(n))

