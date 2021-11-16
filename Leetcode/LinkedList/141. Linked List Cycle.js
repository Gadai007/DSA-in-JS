const detectCycle = (head) => {
    let fast = head
    let slow = head
    while(slow != null && fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            return true
        }
    }
    return false
}