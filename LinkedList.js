// // class Node {
// //   constructor(data) {
// //     this.data = data;
// //     this.next = null;
// //   }
// // }

// // class LinkedList {
// //   constructor() {
// //     this.head = null;
// //   }

// //   // Insert a node at the end of the linked list
// //   insertAtEnd(data) {
// //     const newNode = new Node(data);
// //     if (!this.head) {
// //       this.head = newNode;
// //     } else {
// //       let current = this.head;
// //       while (current.next) {
// //         current = current.next;
// //       }
// //       current.next = newNode;
// //     }
// //   }

// //   insertAtHead(data) {
// //     const newNode = new Node(data);
// //     if (!this.head) {
// //       this.head = newNode;
// //     } else {
// //       newNode.next = this.head;
// //       this.head = newNode;
// //     }
// //   }

// //   insertAfterPos(pos, data) {
// //     if (this.head === null) {
// //       this.insertAtHead(data);
// //     }

// //     let itr = this.head;

// //     while (pos) {
// //       pos--;
// //       itr = itr.next;
// //     }

// //     const newNode = new Node(data);
// //     let temp = itr.next;

// //     itr.next = newNode;
// //     newNode.next = temp;
// //   }

// //   // Delete a node with a specific data value
// //   delete(data) {
// //     if (!this.head) {
// //       return;
// //     }

// //     if (this.head.data === data) {
// //       let temp = this.head;
// //       this.head = this.head.next;
// //       return;
// //     }

// //     let current = this.head;
// //     let prev = null;

// //     while (current && current.data !== data) {
// //       prev = current;
// //       current = current.next;
// //     }

// //     if (!current) {
// //       console.log("Not found", data);
// //       return; // Node with the given data not found
// //     }

// //     prev.next = current.next;
// //   }

// //   display() {
// //     let current = this.head;
// //     while (current) {
// //       console.log(current.data);
// //       current = current.next;
// //     }
// //   }
// // }

// // const linkedList = new LinkedList();

// // linkedList.insertAtHead(10);
// // linkedList.insertAtHead(20);
// // linkedList.insertAtEnd(212);
// // linkedList.insertAtEnd(2122);

// // linkedList.display();

// // console.log(linkedList);

// // // Doubly Linked list Node
// class DllNode {
//   // Constructor to create a new node
//   // next and prev is by default initialized as null
//   constructor(val) {
//     // To store the value
//     this.data = val;

//     // To link the next Node
//     this.next = null;

//     // TO link the previous Node
//     this.prev = null;
//   }
// }

// // Doubly Linked List
// class DoublyLinkedList {
//   // Constructor to create a new linked list
//   constructor() {
//     // To contain the first item of the list
//     this.head = null;

//     // To contain the last item of the list
//     this.tail = null;
//   }

//   // To check if the list is empty
//   isEmpty() {
//     if (this.head == null) return true;
//     return false;
//   }

//   // Method to add item at the last of doubly linked list
//   addItemAtEnd(val) {
//     console.log(val);
//     // Create a temporary variable
//     let temp = new DllNode(val);

//     // If the list is empty link assign
//     // new node to both head and tail
//     if (this.head == null) {
//       this.head = temp;
//       this.tail = temp;
//     }

//     // else add item to the tail and shift tail
//     else {
//       this.tail.next = temp;
//       this.tail = temp;
//     }
//   }

//   // DELETE AT HEAD, TAIL, & AT SOME POSITION

//   addItemAtHead(val) {
//     let newNode = new DllNode(val);

//     if (this.head == null) {
//       this.head = newNode;
//       this.tail = newNode;
//       return;
//     }

//     newNode.next = this.head;
//     this.head.prev = newNode;

//     this.head = newNode;
//   }

//   addItemAfterPos(pos, val) {
//     let itr = this.head;

//     // if (pos == 0) {
//     //   this.addItemAtHead(val);
//     //   return;
//     // }

//     while (pos) {
//       pos--;
//       itr = itr.next;
//     }

//     // general case:
//     let nextNode = itr.next; // ref to next
//     const newNode = new DllNode(val);
//     itr.next = newNode;
//     newNode.prev = itr;

//     newNode.next = nextNode;
//     if (nextNode == null) {
//       this.tail = newNode;
//     }
//   }

//   // To traverse and display the list
//   display() {
//     // Check if the List is empty
//     if (!this.isEmpty()) {
//       // traverse the list using new current pointer
//       let curr = this.head;
//       while (curr !== null) {
//         // Display element
//         console.log(curr.data);

//         // Shift the current pointer
//         curr = curr.next;
//       }
//     }
//   }
// }
// // 17 27 25 129 1234
// // Create new Doubly Linked List
// const dll = new DoublyLinkedList();

// // Add elements in the list
// dll.addItemAtHead(25);
// dll.addItemAtHead(27);
// dll.addItemAtHead(17);
// dll.addItemAfterPos(2, 129);
// dll.addItemAtEnd(1234);

// // Display the list
// dll.display();

const sort01 = (arr) => {
  // 0, 0, 1, 0,1,0,0,1,1,1....
  let zero = 0;
  let one = arr.length - 1;
  let break1 = 10;
  console.log(arr);
  while (zero < one) {
    while (zero < one && arr[zero] === 0) zero++;

    while (one > zero && arr[one] === 1) one--;

    if (one > zero) {
      arr[one] = 1;
      arr[zero] = 0;
      one--;
      zero++;
    }
    // break1--;
    // if (break1 === 0) break;
  }

  console.log(arr);
};

const arr = [0, 0, 1, 1, 0, 0, 1];
function generateRandomArray(minLength, maxLength) {
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 2)); // generates 0 or 1
  }
  console.log(array);
  return array;
}

const arrays = [];
for (let i = 0; i < 3; i++) {
  const a = generateRandomArray(5, 10);
  arrays.push(a);
}

console.log(arrays);
for (let i = 0; i < 3; i++) {
  sort01(arrays[i]);
}
