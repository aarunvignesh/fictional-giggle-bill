function knapsack(weight, profit, size){
    const w = new Array(1).fill(0).concat(weight);
    const p = new Array(1).fill(0).concat(profit);
    const bag = Array.from({length: w.length}, () => new Array(size + 1).fill(0));
    for(let i=0; i<w.length;i++){
        for(let j=0; j<bag[i].length; j++){
            if(i==0 || j==0){
                bag[i][j] = 0
            }
            else if(w[i] > j){
                bag[i][j] = bag[i-1][j]
            }
            else{
                console.log(p[i]);
                bag[i][j] = Math.max(bag[i-1][j], p[i] + bag[i-1][j - w[i]]);
            }
            
        }
    }

    for(let i=0; i<bag.length;i++){
        let rows = []
        for(let j=0; j<bag[i].length; j++){
            rows.push(bag[i][j])
        }
        console.log(`${rows.join("   ")}`)
    }
}

knapsack([2,3,4,5],[1,2,5,6], 80)