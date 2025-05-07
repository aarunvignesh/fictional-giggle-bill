function coinExchange(coins = [], amount = 0) {
    let dp = [];

    dp.length = amount + 1;
    dp = dp.fill(Infinity);
    console.log(dp);
    dp[0] = 0;
    for (let coin of coins) {
        console.log(">>> Coin ", coin);
        for (let i = coin; i < amount + 1; i++) {
            console.log(dp[i], " prev: ", dp[i - coin] + 1);
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    console.log(dp);
    return dp[amount] ? dp[amount] : -1
}

coinExchange([1, 2, 5], 11);