class BinaryHeap{
    graph=[]
    constructor(){

    }

    insert(val){
        this.graph.push(val);
        this.bubbleUp();
        console.log(this.graph);
    }

    bubbleUp(){
        let idx = this.graph.length - 1;
        let element = this.graph[idx]

        const checkRecursively = (index) => {
            if(index == 0){
                return
            }
            const parentIdx = Math.floor((index - 1) / 2)
            const parent = this.graph[parentIdx];

            if(parent > element){
                return;
            }
            this.graph[parentIdx] = element;
            this.graph[index] = parent;
            
            return checkRecursively(parentIdx);
        };

        checkRecursively(idx)
    }
}


let graph = new BinaryHeap();

graph.insert(10)
graph.insert(20)
graph.insert(35)
graph.insert(24)
graph.insert(18)
graph.insert(55)
graph.insert(50)
graph.insert(100)