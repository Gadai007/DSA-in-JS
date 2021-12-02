const getIntersectionPoints = (headA, headB) => {
    if(headA == null || headB == null) return null

    let currentA = headA
    let currentB = headB

    while(currentA != currentB){
        if(currentA == null){
            currentA = headB
        }else{
            currentA = currentA.next
        }
        if(currentB == null){
            currentB = headA
        }else{
            currentB = currentB.next
        }
    }
    return currentA
    
}