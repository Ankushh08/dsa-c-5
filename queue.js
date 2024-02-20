const queue = [];

// insert
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);

// front
console.log(queue[0]);

// pop
const elementRemoved = queue.shift();
console.log(elementRemoved);
console.log(queue);
