# Algorithm ##################################################
def Binary_Search(arr, elm):
    start = 0
    end   = len(arr) - 1
    middle = 0

    while end >= start:
        middle = int(start + (end - start) / 2)
        if   arr[middle] == elm : return middle
        elif arr[middle]  > elm : end = middle - 1
        else                    : start = middle + 1 

    return - 1

# Testing #######################################################
# i =  0  1  2  3  4  5   6   7   8
arr = [1, 2, 4, 6, 7, 9, 11, 33, 57]
print(Binary_Search(arr, 33))


