console.log('');

//adderOne

const adderA = (x) => {
    return (y) => {
      return (z) => x + y + z;
    };
  };
  
const addX = adderA(10);

const addY = addX(5);

const addZ = addY(1);

console.log('adderOne\'s expected output: 16')
console.log(`adderOne's output: ${addZ}`)

//adderTwo

const adderTwo = (x, y, z) => x + y + z;

console.log('adderTwo\'s expected output: 16')
console.log(`adderTwo's output: ${adderTwo(10, 5, 1)}`)

//adderThree

const myCallback = (first) => first + 5;

const adderThree = (callback) => {
  return callback(11);
};

console.log('adderThree\'s expected output: 16')
console.log(`adderThree's output: ${adderThree(myCallback)}`)

//adderFour

const addOne = (foo) => foo + 1;

const adderFour = (callback) => {
  return (bar) => callback + bar;
}

const addedOne = adderFour(addOne(5));
const result = addedOne(10);

console.log('adderFour\'s expected output: 16')
console.log(`adderFour's output: ${result}`)

//adderFive

const parentObj = {
  num: 1,
  five() {
    return this.num + 14;
  }
};

const adder = {
  __proto__: parentObj
};

adder.num = 2;

console.log('adderFive\'s expected output: 16')
console.log(`adderFive's output: ${adder.five()}`)

//adderSix

class AdderSix {
  constructor(num) {
    this.num = num;
  }
}

//// Also works with a constructor function:
// function AdderSix(num) {
//   this.num = num;
// }

AdderSix.prototype.ix = function () {
  return this.num + 6;
}

const adderS = new AdderSix(10);

console.log('adderSix\'s expected output: 16')
console.log(`adderSix's output: ${adderS.ix()}`)


console.log('');