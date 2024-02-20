const merge = (arr, s, mid, e) => {
  let a = s;
  let b = mid + 1;
  const temp = []; // sorted subarray of 'arr' => s..e
  while (a <= mid && b <= e) {
    if (arr[a] < arr[b]) {
      temp.push(arr[a]);
      a++;
    } else {
      temp.push(arr[b]);
      b++;
    }
  }

  // any of the array is still unexhausted
  while (a <= mid) {
    temp.push(arr[a]);
    a++;
  }

  while (b <= e) {
    temp.push(arr[b]);
    b++;
  }
  console.log(s, e, temp);
  for (let i = 0; i < temp.length; i++) {
    arr[s] = temp[i];
    s++;
  }
};

const mergeSort = (arr, s, e) => {
  if (s >= e) return;

  const mid = Math.floor((s + e) / 2);
  mergeSort(arr, s, mid);
  mergeSort(arr, mid + 1, e);
  merge(arr, s, mid, e);
};

const arr = [-100, 100, 200, -200, 99, 88];
// mergeSort(arr, 0, 5);
// console.log(arr);

const findPi = (arr, s, e) => {
  const pivot = arr[Math.floor((s + e) / 2)];

  let left = s,
    right = e;

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // swap 2 elements;
      left++;
      right--;
    }
  }
  return left;
};
const qs = (arr, s, e) => {
  // if (s >= e) return;
  if (s < e) {
    const pi = findPi(arr, s, e);
    console.log(pi, "for", s, e);
    qs(arr, s, pi - 1);
    qs(arr, pi, e);
  }
};

// const arr = [4,3,2,1,5];
qs(arr, 0, arr.length - 1);
console.log(arr);
