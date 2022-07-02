// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  let max = arr[0];
  let min = arr[0];
  let avg;

for (let i of arr) {
  if (digit < min) {
    min = digit;
  }
  if (digit > max) {
    max = digit;
  }

  sum += digit;
}

avg = sum / arr.length;

  return sum;
}

worker([1, 2, 3]);
worker([4, 5, 6]);
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
function makeWork(arrOfArr, func) {
  let max = arrOfArr[0];
  for (func of arrOfArr) {
    if (func > max) {
      max = func;
  } 
}
  
  return max;
}
 makeWork(arrOfArr, worker)







// Задание 3
function worker2(arr) {
  // Ваш код
}
