
function mergeArray(arr_1, arr_2){
 return arr_1.concat(arr_2);
}

function flatArray(arr){
    if(arr.length <= 1){
        if(arr[0] && typeof arr[0] != "object"){
            return arr;
        }    
        else{
            arr = arr[0];
        }
    }
    const mid = Math.floor((0 + arr.length)/2)
    return mergeArray(flatArray(arr.slice(0,mid)), flatArray(arr.slice(mid)));
}
let map = {}
function fibonacci(n){
    if(map[n]> - 1){
        return map[n]
    }
    if(n<=2){
        return 1;
    }
    map[n] = fibonacci(n-1)+ fibonacci(n-2);
    return map[n];
}

console.log(fibonacci(45));
console.log(map);
console.log(flatArray([
    1,2,3,4,[
        5,6,7,[
            2,3,4,[
                9,10,[
                    11,12,133
                ]
            ]
        ]
    ]
]));