let unsortedArr =  [4, 2, 6, 5, 3, 9];

function partition(items, left, right) {
    const len = unsortedArr.lenght;
    const pivot = 5;
    //unsortedArr[Math.round(Math.random(0, len-1)* 10)];
    let leftIndex = left;
    let rightIndex = right;

    while (leftIndex <= rightIndex) {
        while (unsordtedArr[leftIndex] < pivot) {
            leftIndex++;
        }
    
        while(unsortedArr[rightIndex] > pivot) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            swap(items, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }
    return leftIndex;
}

partition();