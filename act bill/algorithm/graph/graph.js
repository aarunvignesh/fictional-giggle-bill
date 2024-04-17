class Graph{
    constructor(){
        this.graphList = {}
    }
    addVertex(vertex){
        this.graphList[vertex] = this.graphList[vertex] || []
    }
    addEdge(vertex1, vertex2){
        this.graphList[vertex1] && this.graphList[vertex1].push(vertex2)
        this.graphList[vertex2] && this.graphList[vertex2].push(vertex1)
    }
    printGraph(){
        console.log(this.graphList);
    }
}

const graph = new Graph();

graph.addVertex("MAA")
graph.addVertex("DEL")
graph.addVertex("BOM")
graph.addVertex("BER")

graph.addEdge("MAA", "BOM")
graph.addEdge("MAA", "DEL")
graph.addEdge("BOM", "BER")
graph.addEdge("DEL", "BER")

graph.printGraph()