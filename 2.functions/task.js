// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i of arr) {

  sum += i;
}
  return sum;
}


let arrOfArr = [[1, 2, 3], [4, 5, 6]];

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);
  

  for (arr of arrOfArr) {
    let sum = func(arr);
    
    if (sum > max) {
      max = sum;
  } 
}
  
  return max;
}
 makeWork(arrOfArr, worker)


 // Задание 3
function worker2(arr) {
  // Ваш код
}
