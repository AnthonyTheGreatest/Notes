// const rageOfNumbers = (startNum, endNum) => {
//     if (endNum < startNum) {
//         return [];
//     } else {
//         const numbers = rageOfNumbers(startNum, endNum - 1);
//         numbers.push(endNum);
//         return numbers;
//     }
// };

const rageOfNumbersTwo = (n) => {
    if (n <= 0) {
        return [];
    } else {
        const numbers = rageOfNumbersTwo(n - 1);
        numbers.push(n);
        return numbers;
    }
};

// console.log(rageOfNumbers(1, 3));

console.log(rageOfNumbersTwo(3));

//

function sum(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + sum(arr.slice(1));
  }
  
// console.log(sum([1, 2, 3, 4, 5]));

//

function findMax(arr) {
    if (arr.length === 1) {
      return arr[0];
    }
  
    const maxInTail = findMax(arr.slice(1));
    return (arr[0] > maxInTail) ? arr[0] : maxInTail;
  }
  
  console.log(findMax([1, 3, 8, 4, 2, 9])); // Output: 9

  //

  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Output: 120

  //

  function printArray(arr) {
    if (arr.length === 0) {
      return;
    }
    console.log(arr[0]);
    printArray(arr.slice(1));
  }
  
  printArray([1, 2, 3, 4, 5]);

  //

  
