function generateParanthesis(n){
    let result = [];
    const genrate = (str = '', left=0, right=0) => {
        console.log(str, left, right);
        if(str.length == 2 * n){
            result.push(str)
            return
        }
        if(left < n)
            genrate(str + "(", left+1, right)
        if(right < left)
            genrate(str + ")", left, right+1)
    }
    genrate();
    return result
}

function isValidSudoku(board){
    board.filter((arr) => arr.reduce((a,b) => a+b, 0) == 45).length === board.length
}


const phone = [
    [],
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"],
    ["j","k","l"],
    ["m","n","o"],
    ["p","q","r","s"],
    ["t","u","v"],
    ["w","x","y","z"],
]

function combinationGenerator(num){
    let list_of_num = num.split("").map(x => phone[x - 1])
    result = []
    list_of_num.forEach(element => {
        result = element.flatMap(x => result.map(y => x+y))
    });
    return result;
}
console.log(combinationGenerator("23"));

console.log(generateParanthesis(2));