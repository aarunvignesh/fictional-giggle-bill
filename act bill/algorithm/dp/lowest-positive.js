function findLeast(arr){
    const n = arr.length;
    for(let i=0; i<n;i++){
        while(arr[i]>0 && arr[i] < n && arr[arr[i]-1] != arr[i]){
            console.log("I: ",i, arr[i], arr[arr[i] -1],arr);
            const temp = arr[arr[i] -1];
            arr[arr[i] -1] = arr[i];
            arr[i] = temp;
            console.log("I: ",i, arr[i], arr[arr[i] -1],arr);
            console.log(arr[arr[i]-1] != arr[i])
        }
    }
    console.log(arr);
}

findLeast([12,3,2,5,4,6,2,9,-1,-2,3,4,-4])

findLeast([99,100,1000])