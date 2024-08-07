class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  perpend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || this.size < index) {
      return;
    }
    if (index === 0) {
      this.perpend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    let removeNode;
    if (index < 0 || this.size < index) {
      return null;
    } else if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode?.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    } else if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      for (let i = 0; i <= this.size - 1; i++) {
        prev = prev.next;
        if (this.size == i + 1) {
          return null;
        } else if (prev.value == value) {
          this.removeFrom(i + 1);
        }
      }
    }
  }
  search(value){
    if(this.isEmpty()){
      return -1
    }
    let i = 0
    let curr = this.head
    while(curr){
      if(curr.value== value){
        return i
      }
      curr= curr.next
      i++

    }
    return -1
  }
  reverse(){
    let prev= null
    let curr = this.head
    while(curr){
      let next = curr.next
      curr.next= prev
      prev= curr
      curr = next
    }
    this.head= prev
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listVal = "";
      while (curr) {
        listVal += `${curr.value} `;
        curr = curr.next;
      }
      console.log("listVal", listVal);
    }
  }
}

const list = new LinkedList();
// list.append(12)
// list.append(34)
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.insert(6, 2);
list.print();
// list.search(3)
// list.removeValue(4);
list.reverse()
list.print();
