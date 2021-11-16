const swapPairs = (head) => {
    if(!head || !head.next) return head

    let currHead = head
    let nextHead = head.next
    let skipHead = head.next.next


    nextHead.next = currHead

    currHead.next = swapPairs(skipHead)

    return nextHead
}