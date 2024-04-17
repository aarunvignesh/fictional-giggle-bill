class Node{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
        this.dfsQueue = []
    }

    traverse(node){
        this.dfsQueue.push(node.value)
        if(node.left){
             this.traverse(node.left);
        }
        
        if(node.right){
             this.traverse(node.right)
        }
        
    }

    dfs(){
        let queue = [], visited = [];
        this.traverse(this.root)
        return this.dfsQueue;
    }

    bfs(){
        let queue=[],visited=[];
        queue.push(this.root);
        while(queue.length > 0){
            let current = queue.shift();
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right)
            }
            visited.push(current.value)
        }
        return visited;  
    }
    
    find(val){
        let current = this.root, isFound = false;
        while(current && !isFound){
            if(val < current.value){
                current = current.left;
            }
            else if(val > current.value){
                current = current.right;
            }
            else{
                isFound = true
            }
        }
        return isFound
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode
            return;
        }
        let current = this.root, foundPosition;
        while(current){
            if(current.value > newNode.value){
                if(current.left){
                    current = current.left;
                }
                else{
                    current.left = newNode;
                    current = null;
                }
            }
            else{
                    if(current.right){
                        current = current.right;
                    }
                    else{
                        current.right = newNode;
                        current = null;
                    }
                
            }
        }
        return this;
     }

     printTree(){
        console.log(JSON.stringify(this.root))
     }
}

const tree = new Tree()
tree.insert(10);
tree.insert(5);
tree.insert(9);
tree.insert(15);
tree.insert(18);
tree.insert(20);
tree.insert(0);
tree.printTree()
console.log(tree.find(14))
console.log(tree.find(18))
console.log(tree.find(9))
console.log(tree.find(20))
console.log(tree.find(19))
console.log(tree.find(0))

const tree1 = new Tree()
tree1.insert(10);
tree1.insert(6);
tree1.insert(15);
tree1.insert(3);
tree1.insert(8);
tree1.insert(20);
tree1.printTree()
console.log(tree1.bfs())
console.log(tree1.dfs())