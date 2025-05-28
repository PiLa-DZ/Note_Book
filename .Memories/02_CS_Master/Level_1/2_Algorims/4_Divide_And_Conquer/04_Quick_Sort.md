# Divide & Conquer ###########################################
# Quick Sort #################################################
  Step [1] --> Partition
    [1] Pick a number (pivot)
    [2] Put it in its right place
  Step [2] --> Sort left part
  Step [3] --> Sort right part

## Psuedo Code
QuickSort(arr, s, e)
  if (e > s)
    pivot = partition(arr, s, e)
    QuickSort(arr, s, pivot-1)
    QuickSort(arr, pivot+1, e)
