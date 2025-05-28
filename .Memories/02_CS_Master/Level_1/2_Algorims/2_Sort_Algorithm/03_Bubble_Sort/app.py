# Algorithm ##################################################
def Bubble_Sort(arr):
    i = 0
    isSwapped = True
    while isSwapped :
        isSwapped = False
        for j in range(0, len(arr)-i-1):
            if arr[j] > arr[j+1] :
                temp      = arr[j]
                arr[j]    = arr[j+1]
                arr[j+1]  = temp
                isSwapped = True
        i += 1
    return arr

# Testing #######################################################
# i =  0  1  2  3  4  5   6   7   8
arr = [4,3,6,9,7,1,8,2,5]
arr = Bubble_Sort(arr)
print(arr)



