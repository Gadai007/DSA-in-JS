//https://www.youtube.com/watch?v=NHd0_Dg0LhI

const oddEvenList = (head) => {
    if(!head || !head.next) return head

    let oddList = new ListNode(-1)
    let evenList = new ListNode(-1)
    let oddStart = oddList
    let evenStart = evenList
    let placeValue = 1
    let curr = head

    while(curr){
        if(placeValue%2 ===1){
            oddList.next = curr
            oddList = oddList.next
        }else{
            evenList.next = curr
            evenList = evenList.next
        }
        placeValue++
        curr = curr.next
    }

    oddList.next = evenStart.next
    evenList.next = null
    return oddStart.next
}