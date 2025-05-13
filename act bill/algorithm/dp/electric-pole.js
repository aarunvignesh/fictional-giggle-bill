/*
✅ Electric Poles (LIS-based) Problem
Problem Statement:
Given two arrays A[] and B[] representing wires connecting pole A[i] to pole B[i], find the minimum number of poles to remove so that no two wires cross (i.e., all connections go in increasing order of both A and B).

Input:
js
Copy
Edit
A = [1, 2, 3, 4, 5];
B = [5, 3, 4, 2, 1];
Explanation:
Connect pole A[i] to B[i].

Wires (A to B) will cross if B is not sorted with respect to increasing A.

So, the problem reduces to: Find the Longest Increasing Subsequence (LIS) in B (after sorting A).

The answer is: total wires - length of LIS
*/

function electricPoleMinRemove(A, B) {
    const pairs = A.map((a, i) => [a, B[i]]);
    pairs.sort((a, b) => a[0] - b[0]); // Sort by A[i]

    const sortedB = pairs.map(pair => pair[1]);

    function lengthOfLIS(arr) {
        const dp = [];
        for (let num of arr) {
            let left = 0, right = dp.length;
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (dp[mid] < num) left = mid + 1;
                else right = mid;
            }
            dp[left] = num;
        }
        return dp.length;
    }

    const lisLength = lengthOfLIS(sortedB);
    return B.length - lisLength;
}

// Example
console.log(electricPoleMinRemove(
  [1, 2, 3, 4, 5],
  [5, 3, 4, 2, 1]
)); 