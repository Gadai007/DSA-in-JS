//https://www.youtube.com/watch?v=ik44BcorbjE

const nodeDelete = (node) => {
    let next = node.next.next
    node.val = node.next.val
    node.next = next
}