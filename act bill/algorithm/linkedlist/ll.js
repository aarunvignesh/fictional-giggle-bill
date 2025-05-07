function ll_node(val) {
    this.node = {
        val,
        next: null
    }
    return this;
}

ll_node.prototype.insert = function (node) {
    this.node.next = node;
}

ll_node.prototype.getNode = function () {
    return this.node;
}


const HEAD = new ll_node(5);

HEAD.insert(new ll_node(6));
HEAD.getNode().next.insert(new ll_node(7))
HEAD.getNode().next.getNode().next.insert(new ll_node(8))

function display(node) {
    console.log(node.getNode().val);
    return node.getNode().next ? display(node.getNode().next) : null;
}

let NEW_HEAD;
function reverse(node) {
    const current_node = node.getNode()
    if (current_node.next == null) {
        NEW_HEAD = new ll_node(current_node.val);
        return NEW_HEAD;
    }
    const value = reverse(current_node.next);
    const new_node = new ll_node(current_node.val);
    value.insert(new_node);
    return new_node
}

reverse(HEAD)

display(NEW_HEAD);