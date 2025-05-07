const sum = 11, coins = [1, 2, 3, 5]

function coinChange() {
    const list = new Array(sum + 1).fill(Infinity);
    list[0] = 0;
    for (let i = 1; i < list.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (list[i - coins[j]] >= 0)
                list[i] = Math.min(list[i], list[i - coins[j]] + 1)
        }
    }
    return list[sum]
}

console.log(coinChange());

function trap(building) {
    let pointer = 0, max = 0, isClogFound = false, startPos = 0, diffTracker = 0;
    let result = []
    while (pointer < building.length) {
        if (isClogFound && (building[pointer] >= max || building[pointer] < building[pointer + 1])) {
            result.push(building.slice(startPos, pointer + 1));
            max = 0;
            isClogFound = false;
        }
        if (building[pointer] > max) {
            max = building[pointer]
            isClogFound = true;
            startPos = pointer;
        }
        pointer++;
    }
    console.log(result);
}

trap([4, 5, 1, 2, 6, 3, 5])
trap([7, 5, 1, 2, 6, 3, 9])