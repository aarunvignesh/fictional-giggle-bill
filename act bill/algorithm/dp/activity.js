/*
🎯 Problem: Maximize Points Over Consecutive Days
Given:

A list of days, and for each day, 3 activities.

Each activity gives a certain number of points.

You can't do the same activity on two consecutive days.

Goal: Choose one activity per day to maximize your total score, with the constraint that no activity is repeated on consecutive days.
*/
function maxVacationPoints(activities) {
    const n = activities.length;
    const dp = Array.from({ length: n }, () => new Array(3).fill(0));

    // Initialize day 0
    dp[0][0] = activities[0][0];
    dp[0][1] = activities[0][1];
    dp[0][2] = activities[0][2];

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 3; j++) {
            dp[i][j] = Math.max(
                dp[i - 1][(j + 1) % 3],
                dp[i - 1][(j + 2) % 3]
            ) + activities[i][j];
        }
    }

    return Math.max(...dp[n - 1]);
}

// Example:
const activities = [
  [10, 40, 70],
  [20, 50, 80],
  [30, 60, 90],
];

console.log(maxVacationPoints(activities)); 