import { LinkedList } from '../../Data Structures/linkedList.js'

const reverseList = ( head ) => {
    let curr = head
    let prev = null
    let next
    while(curr != null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

let ll = new LinkedList()
ll.insertFirst(5)
ll.insertFirst(4)
ll.insertFirst(3)
ll.insertFirst(2)
ll.insertFirst(1)
ll.printLinkedList()
