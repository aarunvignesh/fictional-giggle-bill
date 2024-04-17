class InsertionSort{
    constructor(arr){
        this.arr = arr
    }

    sort(){
        const list = this.arr;
        for(let i = 1; i < this.arr.length; i++){
            for(let j=0; j<i; j++){
                if(list[j] > list[i]){
                    const val = list[i];
                    list.splice(i, 1);
                    list.splice(j, 0, val);
                    break;
                }
            }
        }
        return this.arr
    }
}

console.log(new InsertionSort([3,1,4,6,2,4]).sort());