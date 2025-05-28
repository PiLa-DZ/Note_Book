# Algorithm ##################################################
def Linear_Search(arr, elm):
    for i in range(len(arr)):
        if elm == arr[i] : return i
    return -1


# Testing #######################################################
arr = [3, 4, 5, 2, 6, 44, 1, 9]
print(Linear_Search(arr, 4))

