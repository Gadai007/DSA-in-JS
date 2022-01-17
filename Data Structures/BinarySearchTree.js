class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    getRootNode(){
        return this.root
    }

    insert(data){
        let newNode = new Node(data)

        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){
        if(node.data < newNode.data){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertNode(node.right, newNode)
            }
        }
    }

    preOrder(node){
        if(node !== null){
            console.log(node.data)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    inOrder(node){
        if(node !== null){
            this.inOrder(node.left)
            console.log(node.data)
            this.inOrder(node.right)
        }
    }

    postOrder(node){
        if(node !== null){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.data)
        }
    }
}