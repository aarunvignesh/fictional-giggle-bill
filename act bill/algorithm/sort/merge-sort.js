function merge(arr1, arr2){
    let i=j=0, result = [];

    while(i < arr1.length || j<arr2.length){
        if(arr1[i] <= arr2[j] || j >= arr2.length){
            result.push(arr1[i]);
            i++;
        }
        else if(arr1[i] > arr2[j] || i >= arr1.length){
            result.push(arr2[j])
            j++;
        }
    }
    return result;
}

function mergeSort(arr, start, end){
    if(start == end){
        return [arr[end]]
    }
    const mid = Math.floor((start+end)/2);
    const left = mergeSort(arr, start, mid)
    const right = mergeSort(arr, mid+1, end)
    return merge(left, right);
}

console.log(mergeSort([100,9,5,3,1,4,2,0],0,7))