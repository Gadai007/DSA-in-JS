//https://www.youtube.com/watch?v=2Vj9X4qEUus&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=12

const deleteDuplicate = (head) => {
  let dummy = new ListNode(-Infinity, head);
  let prev = dummy;
  let curr = head;
  while (curr) {
    if (curr.val === prev.val) {
      while (curr && curr.val === prev.val) {
        curr = curr.next;
      }
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return dummy.next;
};
