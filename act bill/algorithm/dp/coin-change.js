function coinChange(coins, target){
    const dp = Array.from({length: target+1}).fill(Infinity);
    dp[0] = 0;
    let list=Array.from({length: dp.length}).fill(Array.from([]));
    for(let i = 0; i<coins.length;i++){
        for(let j=coins[i]; j<= target;j++){
            const toggle = dp[j - coins[i]]+1;
            if(toggle < dp[j]){
               dp[j] = toggle;
               list[j][j] = coins[i];
            }
        }
        
    }
    let result = [];
    let current = target - 1;
    while (current > 0) {
        let coin = list[target][current];
        result.push(coin);
        current -= coin;
    }

    console.log(dp[target], result, list);
}
coinChange([1,2,5,10],20);


function coinChangeWithTracking(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    const coinUsed = new Array(amount + 1).fill(-1);
    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            if (dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
                coinUsed[i] = coin; // Track the coin used
            }
        }
    }

    if (dp[amount] === Infinity) return -1;
    // Reconstruct the coins used to make the amount
    let result = [];
    let current = amount;
    while (current > 0) {
        let coin = coinUsed[current];
        result.push(coin);
        current -= coin;
    }

    // Return full details
    return {
        minCoins: dp[amount],
        coinsUsed: result,
        lowestDenomination: Math.min(...result)
    };
}

// Example:
console.log(coinChangeWithTracking([ 2, 5], 23));