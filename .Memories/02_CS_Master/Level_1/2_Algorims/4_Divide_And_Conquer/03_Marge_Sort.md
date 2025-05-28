# Divide & Conquer ###########################################
# Marge Sort #################################################

## Psuedo Code
mergeSort(arr, s, e)
  if (e > s)
    m = s + (e - s) / 2
    mergeSort(arr, s, m)
    mergeSort(arr, m+1, e)
    mergeSort(arr, s, e)

## Time Complexity  --> O(n log(n))
## Space Complexity --> O(n)
## In-place
## Stable
