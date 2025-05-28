# Bubble Sort ################################################

## Pseudo Code
for i = 0 to n
  for j = 0 to n-i
    if arr[j] > arr[j+1]
      swap

## Analysis
  O(n^2)


# Bubble Sort Version 2 ######################################

## Pseudo Code
isSwapped = true
i = 0
while isSwapped
  isSwapped = false
  for j = 0 to n - i
    if arr[j] > arr[j+1]
      swap
      isSwapped
  i++

## Analysis
  [ Worst Case ]
    Sorred in reversed order
    O(n^2)
  [ Best Case ]
    Sorted in correct order
    O(n)

## Time Complexity --> O(n^2)

## Space Complecity --> O(1)

## In-place

## Stable

