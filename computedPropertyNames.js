const myPropertyName = 'c'

const myObject = {
  a: 5,
  b: 10,
  [myPropertyName]: 15
} 

console.log(myObject.c) // prints 15

//

const fieldNumber = 3

const myObject2 = {
  field1: 5,
  field2: 10,
  ['field' + fieldNumber]: 15
}

console.log(myObject2.field3) // prints 15

//

const fieldNumber2 = 3

const myObject3 = {
  field1: 5,
  field2: 10,
  [`field${fieldNumber2}`]: 15
}

console.log(myObject3.field3) // prints 15