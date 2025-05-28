# Insertion Sort #############################################

## Psuedo Code 
for i = 1 to n
  k = arr[i]
  j = i-1
  while j >= 0 && arr[j] > k
    arr[j+1] = arr[j]
    j--
  arr[j+1] = k

## Analysis
  [ Worst Case ]
    reversely sorted
    O(n^2)
  [ Best Case ]
    sorted
    O(n)

## Time Complexity --> O(n^2)

## Space Complexity --> O(1)

## In-place

## Stable

