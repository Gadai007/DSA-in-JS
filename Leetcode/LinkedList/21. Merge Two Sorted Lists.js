//https://www.youtube.com/watch?v=eQGn1xbt1JU

import { Node } from '../../Data Structures/linkedList.js'

const mergeList = (l1, l2) => {
    let curr = new Node()
    const dummy = curr
    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1
            l1 = l1.next
        }else{
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    if(l1){
        curr.next = l1
    }
    if(l2){
        curr.next = l2
    }
    return dummy.next
}