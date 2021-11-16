export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert First
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insertLast
  insertLast(data) {
    let current = this.head;

    if (!this.head) {
      this.insertFirst(data);
    } else {
      while (current.next) {
        current = current.next;
      }
      let node = new Node(data);
      current.next = node;
    }
    this.size++;
  }
  //insert at index
  inserAt(data, index){
    if(index < 0 && index > this.size){
      return
    }

    if(index === 0){
      this.insertFirst(data)
      return
    }

    let current = this.head
    let previous
    let count = 0
    
    while(count < index){
      previous = current
      current = current.next
      count++
    }
    let node = new Node(data)
    node.next = current
    previous.next = node
    this.size++
  }

  //Get at index
  getAtIndex(index){

    if(index < 0 && index > this.size){
      return
    }

    let current = this.head
    let count  = 0
    while(count < index){
      current = current.next
      count++
    }
    console.log(`value at index ${index} -`,current.data)
  }

  //Remove at index
  removeAt(index){
    if(index < 0 && index > this.size){
      return
    }

    let current = this.head
    let previous
    let count = 0
    if(index===0){
      this.head = current.next
    }else{
      while(count < index){
        previous = current
        current = current.next
        count++
      }
    }
    previous.next = current.next
    this.size--
  }

  clearList(){
    this.head =  null
    this.size = 0
  }

  //print linkedlist
  printLinkedList(){
      let current = this.head
      while(current){
          console.log(current.data)
          current = current.next
      }
  }
}


