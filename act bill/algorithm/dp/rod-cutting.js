function rodCutting(prices, n) {
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] = Math.max(dp[i], prices[j] + dp[i - j - 1]);
        }
    }

    return dp[n];
}

// Example:
const prices = [1, 5, 8, 9, 10, 17, 17, 20];
const n = 8;
console.log(rodCutting(prices, n)); // Output: 22