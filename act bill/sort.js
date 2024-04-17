

const bubble_sort = (arr) => {
    let isSwapHappened = false;
    for(let i=0; i < arr.length - 1; i++){
        isSwapHappened = false;
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                isSwapHappened =  true;
            }
        }
        if(!isSwapHappened){
            break;
        }
    }
    return arr;
}

function selectionSort(arr){
    const len = arr.length;
    
    for(let i=0; i < arr.length;i++){
        let min = arr[i], index = -1;
        for(let j = i + 1; j < arr.length; j++){
            if(min > arr[j]){
                min = arr[j];
                index = j;
            }
        }
        if(index != -1){
            let temp = arr[i];
            arr[i] = min;
            arr[index] = temp;
        }
        
    }
    return arr;
}

function insertionSort(arr){
    for(let i = 1; i< arr.length;i++){
        let val = arr[i];
        for(let j=0; j<i;j++){
            if(arr[j] > arr[i]){
                const val = arr[i];
                arr.splice(i,1);
                arr.splice(j,0, val)
                break;
            }
        }
       
    }
    return arr;
}

function mergeSortedArray(arr_1, arr_2){
    let i = 0,j=0, merge_arr = [];

    while((i < arr_1.length ) || (j < arr_2.length)){
        if((i >= arr_1.length) || arr_1[i] >= arr_2[j]){
            arr_2[j] && merge_arr.push(arr_2[j])
            j++;
        }
        else if((j >= arr_2.length) || arr_1[i] < arr_2[j]){
            arr_1[i] && merge_arr.push(arr_1[i])
            i++;
        }
    }
    return merge_arr;
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return mergeSortedArray(mergeSort(left), mergeSort(right))
}

function changePosition(arr, from_index, to_index){
    const val = arr[from_index];
    arr.splice(from_index, 1);
    arr.splice(to_index, 0, val);
    return arr;
}

function arrangeWithPivot(arr, left, right){
    let counter = left;
    for(let j=left+1;j<=right;j++){
        if(arr[left] > arr[j]){
            counter += 1;
            changePosition(arr, j, counter)
        }
    }
    changePosition(arr, left, counter)
    return counter;
}



function quickSort(arr, left = 0, right = arr.length){
    console.log(left, right, arr.join());
    if(left < right){

        
        const pivotIndex = arrangeWithPivot(arr, left, right);
        console.log(pivotIndex)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}

const a = [4,2,6,1,5,7,3];
console.log("Bubble Sort: " + bubble_sort([100,20,4,5,2,6,10,1,5,5,7,3]));
console.log("Selection Sort: " +selectionSort([100,20,4,5,2,6,10,1,5,5,7,3]));
console.log("Insertion Sort: " +insertionSort([100,20,4,5,2,6,10,1,5,5,7,3]));
console.log("MergeSort Sort: " +mergeSort([100,20,4,5,2,6,10,1,5,5,7,3]));
console.log("Quick Sort: " + quickSort([9,100,20,4,5,2,6,10,1,5,5,7,3]));



