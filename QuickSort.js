/** Element which needs to be placed in the correct position is called pivot */
function quickSort(arr, s, e){
    if(s>=e){
        return;
    }
    let p = partition(arr,s,e);
    quickSort(arr,s,p-1);
    quickSort(arr,p+1,e);
}

function partition(arr, s, e){
    let pivot = arr[s];
    let c = 0;
    for(let i=s+1; i<=e; i++){
        if(arr[i]<=pivot){
            c++;
        }
    }
    let pivotIndex = s + c;
    let t = arr[pivotIndex];
    arr[pivotIndex] = arr[s];
    arr[s] = t;

    let i=s, j=e;
    while(i<pivotIndex && j>pivotIndex){
        while(arr[i]<=pivot){
            i++;
        }
        while(arr[j]>=pivot){
            j--;
        }
        if(i<pivotIndex && j>pivotIndex){
            let t= arr[i];
            arr[i] = arr[j];
            arr[j]=t;
        }
    }
    return pivotIndex;

}

arr = [5,4,1,2,3]
quickSort(arr, 0, 4)
console.log(arr)
