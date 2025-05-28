def Binary_Search(arr, elm):
    start = 0
    end   = len(arr) - 1
    while end >= start:
        mid = int(start + (end - start) / 2)
        if   arr[mid] == elm : return  mid
        elif arr[mid]  > elm : end   = mid - 1
        else                 : start = mid + 1 
    return - 1

arr = [1, 2, 4, 6, 7, 9, 11, 33, 57]
print(Binary_Search(arr, 33))
