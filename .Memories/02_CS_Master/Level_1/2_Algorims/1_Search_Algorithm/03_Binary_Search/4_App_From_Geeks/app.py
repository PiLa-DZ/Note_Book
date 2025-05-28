def binarySearch(arr, elm):
    start = 0
    end = len(arr)-1
    while start <= end:
        mid = start + (end - start) // 2
        if      arr[mid] == elm : return  mid
        elif    arr[mid]  < elm : start = mid + 1
        else                    : end   = mid - 1
    return -1

arr = [2, 3, 4, 10, 40]
print("Resuult: ", binarySearch(arr, 10))
