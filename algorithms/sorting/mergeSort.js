function merge(arr, l, m, r) {
  let leftArr = [];
  let rightArr = [];
  for (let i = l; i <= m; i++) {
    leftArr[i] = arr[i];
  }
  for (let j = m + 1; j <= r; j++) {
    rightArr[j] = arr[j];
  }


}

function splitAndMerge(arr, l, r) {
  if (l >= r) {
    return;
  }

  const m = Math.floor(r / 2);
  splitAndMerge(arr, l, m);
  splitAndMerge(arr, m + 1, r);
  return merge(arr, l, m, r);
}

function mergeSort(arr) {
  splitAndMerge(arr, 0, arr.length - 1);
}


l=0
m=1
r=3

[4,7] [2,9]
0,1    0,1
[7,4,9,2]
