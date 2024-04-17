class BubbleSort{
    constructor(arr){
        this.arr = arr;
    }

    swap(aIndex, bIndex){
        let temp = this.arr[aIndex];
        this.arr[aIndex] = this.arr[bIndex];
        this.arr[bIndex] = temp; 
    }

    sort(){
        const list = this.arr || [];
        for(let i=0; i < list.length; i++){
            let isSwapHappened = false;
            for(let j = 0; j < list.length - i - 1; j++){
                if(this.arr[j+1] < this.arr[j]){
                    this.swap(j+1, j);
                    isSwapHappened = true;
                }
            }
            if(!isSwapHappened)
                break;
        }
        return list;
    }
}

console.log(new BubbleSort([3,1,4,6,2,4]).sort());