class SelectionSort{
    constructor(arr){
        this.arr = arr;
    }

    findMinInArray(arr){
        return arr.map((x,index) => ({val: x, index})).reduce((a,b) => { 
            return b.val < a.val ? b:a;
        });
    }

    sort(){
        let list = this.arr;
        for(let i=0; i< list.length - 1; i++){
            let min = this.findMinInArray(this.arr.slice(i));
            this.arr.splice(min.index + i, 1)
            this.arr.splice(i, 0, min.val);
        }
        return this.arr;
    }
}

console.log(new SelectionSort([ 3,1,4,6,2,4,-1,1000]).sort());