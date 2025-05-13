[[0,1,2],1,[2],3,4,[34,[2,3,4,5]]]

function flatten(arr){
    let index = 0, result = [];
    while(true){
        if(index == arr.length){
            break;
        }
        if(Array.isArray(arr[index])){
            const list = flatten(arr[index]);
            result = result.concat(list);
        }
        else{
            result.push(arr[index]);
        }
        index++;
    }
    return result;
}

console.log(flatten([1,2,[3, [4,5]]]));