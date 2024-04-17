const map = [
    [1,0,1,1],
    [1,0,1,1],
    [1,1,1,1],
    [1,0,1,1]
];

let adjancency_map = {}

for(let i=0; i<map.length; i++){
    const char = String.fromCharCode(65 + i)
    for(let j=0; j < map[i].length; j++){
        adjancency_map[char+j] = {}
         if(j+1 < map[i].length){
            if(map[i][j+1] != 0)
            adjancency_map[char+j].right = char+(j+1)
         }
         if(i+1 < map.length){
            if(map[i+1][j] != 0){
                const next_char = String.fromCharCode(i+66)
                adjancency_map[char+j].down = next_char+(j)
            }
         }
    }
}


console.log(adjancency_map);

let path =-1;
function traverse(node,val, result){
    if(val == "D3"){
        path = path+1;
        result[path] = ["D3"]
        return [path];
    }
    
    adjancency_map[val].visited = true;
    const right = node.right && traverse(adjancency_map[node.right], node.right, result)
    const down = node.down && traverse(adjancency_map[node.down], node.down, result);
    let pathList = new Set();
    let isPath = false;
    
    if(right && right.length > -1){
        right.forEach(x => {
            pathList.add(x)
            result[x].push(val)
        });
        isPath = true;
    }
    if(down && down.length > -1){
        down.forEach(x => {
            pathList.add(x)
            result[x].push(val)
        });
        isPath = true;
    }

    if(!isPath){
        return null;
    }
    if(val == "A0"){
        result.forEach(x => x.reverse())
        return result;
    }
    return Array.from(pathList);
}

console.log(traverse(adjancency_map["A0"], "A0", []))