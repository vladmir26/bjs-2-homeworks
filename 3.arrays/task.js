function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length !== arr2.length) {
      return false;
  } 
  
 result = arr1.every((element, index) => element === arr2[index]);
 return result;
}





function advancedFilter(arr) {
  let resultArr = arr.filter((element) => element > 0 && element % 3 === 0).map((element) => element * 10);

  // Ваш код

  return resultArr; // array
}

