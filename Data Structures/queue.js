class Queue{
    constructor(){
        this.item = []
    }

    enqueue(value){
        return this.item.push(value)
    }
    
    dequeue(){
        return this.item.shift()
    }

    peek(){
        return this.item[0]
    }

    isEmpty(){
        return this.item.length === 0
    }

    print(){
        return this.item
    }
}

const q = new Queue()
q.enqueue('A')
q.enqueue('A')
q.enqueue('A')
q.enqueue('A')
q.enqueue('A')


