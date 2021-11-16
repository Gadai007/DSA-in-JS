//https://www.youtube.com/watch?v=X2R2VZjKqi8

const reverse = (head) => {
    let curr = head
    let prev = null
    let next
    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

const isPalindrome  = (head) => {
    let fast = head
    let slow = head
    let startPointer = head
    let len = 0
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        len++
    }

    let mid = reverse(slow)

    while(len){
        len--
        if(startPointer.val != mid.val) return false
        mid = mid.next
        startPointer = startPointer.next
    }
    return true
}