# Binary Search ##############################################

## Pseudo Code
  Go to middle
      if middle == target : return index
      if middle  > target : search in left side
      if middle  < target : search in right side

## Analysis
  [ Worst Case ]
      Search for first or last element
      O(lg(n))
  [ Best Case ]
      Search for middle element
      O(1)

