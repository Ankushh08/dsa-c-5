const hashMap = new Map();

// set
hashMap.set("ankush", 100);
hashMap.set(100, 200);
const arr = [100, 200];
hashMap.set(arr, 20);

console.log(hashMap);

// get / lookUp
console.log(hashMap.get(100));

// remove key
hashMap.delete(100);
// const arr2 = [100, 200];
// check if key exist
console.log(hashMap.get(arr), hashMap.has(arr));
