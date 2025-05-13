function subsetSum(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b); 
    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue; // Skip duplicates at same level
            if (sum + nums[i] > target) continue;
            path.push(nums[i]);
            backtrack(i + 1, path, sum + nums[i]); // i+1 means each number is used once
            path.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
}

// Example
console.log(subsetSum([1,1,1,2, 3,4, 5], 8));