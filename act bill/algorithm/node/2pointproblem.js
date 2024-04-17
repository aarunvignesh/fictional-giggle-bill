function merge(arr1, arr2){
    let i=0,j=0, result = [];

    while(i < arr1.length || j < arr2.length){
        if(j >= arr2.length || arr1[i] <= arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else if(i >= arr1.length || arr2[j] < arr1[i]){
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
   return merge( mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

function makeGraph(arr){
    arr = mergeSort(arr)
    let start = 0, end = arr.length - 1, result = [];
    let flag = true;
    for(let i=0; i< arr.length; i++){
        if(flag){
            result.push(arr[start++]);
        }
        else{
            result.push(arr[end--])
        }
        flag = !flag;
    }
    return result;
}


function printLeader(arr){
    let leader = [];
    leader.push(arr[arr.length -1]);
    let temp_max = arr[arr.length -1];
    for(let j= arr.length - 2; j > -1; j--){
        if(arr[j] < temp_max){
            temp_max = arr[j];
            leader.push(temp_max);
        }
    }
    return leader;
}

function getMaxSumArray(arr, start, end){
    if(start == end){
        return arr[start];
    }
    else{
        const mid = Math.floor((start + end)/2),
        left = getMaxSumArray(arr, start, mid),
        right = getMaxSumArray(arr, mid+1, end),
        leftSum = arr.slice(start,mid).reduce((a,b)=> a+b,0),
        rightSum = arr.slice(mid, end).reduce((a,b)=> a+b,0);
        console.log(`Left: ${arr.slice(start,mid)} Right: ${arr.slice(mid, end)} Left Sum: ${leftSum} RightSum: ${rightSum} start: ${start} end: ${end} mid: ${mid}`);
        return Math.max(leftSum, rightSum)
    }
}

function productArray(arr){
    const maxMultiple = arr.filter(x=> x!=0).reduce((a,b) => a*b, 1);
    return arr.map(x => x==0? maxMultiple : maxMultiple/x);
}

function findMaxone(arr){
    let left =0, sequence = -1, max_sequence=-1, 
    slot_start= undefined,
    max_slot_start = undefined, max_slot_end = undefined;
    while(left < arr.length){
       if(arr[left] == 1){
        if(sequence == -1){
            slot_start = left;
        }
         sequence = sequence == -1 ? 1 : sequence + 1;
         max_sequence = Math.max(sequence, max_sequence);
         if(sequence == max_sequence){
            max_slot_start = slot_start;
            max_slot_end = left + 1;
         }
       }
       else if(sequence != -1){
            sequence = -1;
            slot_start = undefined;
       }
        left++;
    }
    return arr.slice(max_slot_start, max_slot_end);
}

function findOnes(arr){
    let result = [], start_position = -1, slot_count = -1;
    arr.forEach((element,index) => {
        if(element == 1){
            start_position = start_position == -1 ? index : start_position; 
            if(start_position == index){
                slot_count++;
            }
            result[slot_count] = [start_position, index];
        } else if(start_position != -1){
            start_position = -1;
        }
    });
    return result.map(x => arr.slice(x[0],x[1]+1))
}

function seeSunset(arr){
    let max = 0, counter =0;
    arr.forEach(x => {
        if(x > max){
            max = x
            counter++;
        }
    })
    return counter;
}

function findCommonSubsequence(str1, str2, m,n){
   if(m === 0 || n ===0)
    return [];
   if(str1[m-1] == str2[n-1]){
     const result = findCommonSubsequence(str1, str2, m-1,n-1);
     result.push(str1[m-1])
     return result
   }

   else
   {
     const left = findCommonSubsequence(str1, str2, m, n-1);
     const right = findCommonSubsequence(str1, str2, m-1, n);
     return left.length < right.length ? right : left; 
   }
}

function max(a , b) 
{ 
    return (a > b)? a : b; 
} 

function maximumSubsetSum(arr,left, right){
    console.log(left, right);
   if(right > arr.length){
     return 0;
   }
   return Math.max(arr.slice(left, right).reduce((a,b) => a+b,0) , maximumSubsetSum(arr, left+1,right+1))
}

console.log(maximumSubsetSum([100,200,300,400],0,2))

console.log(findCommonSubsequence("AGGTAB", "GXTXAYB", 6,7 ));

console.log(seeSunset([2,3,4,5]))
console.log(findOnes([1,0,4,3,1,1,1,1,0,1,1,1]))

console.log(productArray([1,0,4,3,5]))

console.log(printLeader([1, 2, 3, 4, 5, 2]));

console.log(makeGraph([2,6,8,7,4,3,1,5,9]));
