const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  return returns;
}

//console.log(array.reduce(reducer));

const compare = (accumulator, currentValue) => {
    if (accumulator > currentValue) {
        return accumulator;
    } else {
        return currentValue;
    }
};

//console.log(array.reduce(compare));

const comp = (a, b) => a > b ? a : b;

// console.log(array.reduce(comp));

// const compareFunc = (arr) => {
//     const highest = arr.reduce((a, b ) => a > b? a : b);
//     return highest;
// };

const compareFunc = arr => arr.reduce((a, b ) => a > b ? a : b);

console.log(compareFunc(array));