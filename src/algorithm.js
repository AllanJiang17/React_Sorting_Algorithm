function swap(arr, xp, yp){
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
  
function bubbleSort(inputArr){
    var i, j, n = inputArr.length, arr = inputArr;
    var steps = [];
    for (i = 0; i < n-1; i++){
      for (j = 0; j < n-i-1; j++){
        if (arr[j] > arr[j+1]){
          swap(arr,j,j+1);
        }
        steps.push(arr.slice());
      }
    }
    return steps;
}

function insertionSort(inputArr) {
    let n = inputArr.length;
    var steps = [];
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
                steps.push(inputArr.slice());
            }
            inputArr[j+1] = current;
            steps.push(inputArr.slice());
        }
    return steps;
}

export default {bubbleSort, insertionSort};