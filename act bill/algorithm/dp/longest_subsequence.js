function longest_subsequence(arr){
    let dp = new Array(arr.length + 1).fill(1);
    dp[0] = 0, temp_max = 0;
    for(let i = 0; i < arr.length ; i++ ){
        for(let j=0; j<i; j++){
            if(arr[i] > arr[j]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    return Math.max(...dp);
}

console.log(longest_subsequence([99,2,4,1,50,53,40,100]));
