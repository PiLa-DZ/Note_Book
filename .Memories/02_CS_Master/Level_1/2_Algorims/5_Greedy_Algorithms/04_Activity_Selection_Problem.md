# Greedy Algorithms ##########################################
# Activity selection problem #################################
  - Given "n" activities whith their start and finish times
  - Select the maximum number of activities that can be performed by a single person

## Example
Start   = [12, 10, 20]
Finish  = [25, 20, 30]
Sort activities by finish time in ascending order
Start   = [10, 12, 20]
Finish  = [20, 25, 30]
Select first activity
go through other activities
    if start time is greater than or equal finish time of current activity
        Select it
  

