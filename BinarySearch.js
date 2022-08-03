
binarySearch(arr, x, low, high)
    if low > high
        return False 
    else
        mid = (low + high) / 2 
        if x == arr[mid]
            return mid
        else if x > arr[mid]    
            return binarySearch(arr, x, mid + 1, high)
        else                              
            return binarySearch(arr, x, low, mid - 1)
            
            
