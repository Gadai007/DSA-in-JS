const removeElement = (head, val) => {
    let dummy = new ListNode(-1)
    dummy.next = head
    let prev = dummy
    let curr = head
    while(curr){
        if(curr.val === val){
            prev.next = curr.next
            curr = curr.next
        }else{
            prev = prev.next
            curr = curr.next
        }
    }
    return dummy.next
}