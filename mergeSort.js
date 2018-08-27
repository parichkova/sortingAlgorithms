let unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

function merge(leftArr, rightArr) {
    let sortedArr = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }

    while (leftArr.length) {
        sortedArr.push(leftArr.shift());
    }

    while (rightArr.length) {
        sortedArr.push(rightArr.shift());
    }

    console.log(sortedArr);
    return sortedArr;
}

function mergesort(arr) {
    if (arr.length === 1) {
        return arr; 
    }

    let midpoint = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, midpoint);
    let rightArr = arr.slice(midpoint);
    let ll = mergesort(leftArr);
    let rr = mergesort(rightArr);

    return merge(ll, rr);
}

console.log('This should be the sorted array!')
console.log(mergesort(unsortedArr));