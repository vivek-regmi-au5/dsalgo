class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head(node);
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  // Insert at index
  insertAtIndex(data, index) {
    if (index >= this.size + 1) {
      this.insertLast(data);
    } else {
      let count = 0;
      let current = this.head;
      while (count < index) {
        current = current.next;
      }
    }
  }

  // Get at index

  // Remove at index

  // Clear list

  // Print list data
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
console.log(ll);
ll.insertFirst(200);
console.log(ll);
ll.insertFirst(300);
console.log(ll);
ll.insertFirst(400);
console.log(ll);
// ll.printData();
ll.insertLast(600);
ll.printData();
ll.insertAtIndex(999, 4);
ll.printData();
