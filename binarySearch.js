// Iteration
const binarySearch = (arr, s, e, t) => {
  while (s <= e) {
    const mid = Math.floor((s + e) / 2);

    if (arr[mid] == t) {
      return mid;
    } else if (arr[mid] < t) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }

  return -1;
};

// Recurssion
const binarySearchR = (arr, s, e, t) => {
  // base
  if (s > e) return -1;

  const mid = Math.floor((s + e) / 2);

  if (arr[mid] == t) return mid;

  if (arr[mid] < t) return binarySearchR(arr, mid + 1, e, t);

  return binarySearchR(arr, s, mid - 1, t);
};

const arr = [-10, -1, 10, 20, 21, 30, 31, 32, 35];

console.log(binarySearchR(arr, 0, 8, 100));
