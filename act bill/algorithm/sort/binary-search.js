function binarySearch(arr,searchVal, start, end){
    if(start > end){
        return false;
    }
    const mid = Math.floor((start+end)/2);
    console.log(start, end, mid);

    if(arr[mid] == searchVal){
        return mid;
    }
    else if(arr[mid] > searchVal){
        return binarySearch(arr, searchVal, start, mid);
    }
    else if(arr[mid] < searchVal){
        return binarySearch(arr, searchVal, mid+1, end);
    }

    
}

a=[]

for(let i=0;i< 50;i++){
    a[i]=Math.floor(Math.random()*100)
}
let searchVal = a[24];
a.sort((a,b)=> a-b);

console.log(a, searchVal);
console.log(binarySearch(a,searchVal,0, a.length -1))

