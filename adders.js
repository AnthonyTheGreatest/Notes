const adder = (x) => {
    return (y) => {
      return (z) => x + y + z;
    };
  };
  
  const addX = adder(10);
  
  const addY = addX(5);
  
  const addZ = addY(1);
  
  console.log('adderOne\'s expected output: 16')
  console.log(`adderOne's output: ${addZ}`)
  
  //
  
  const adderTwo = (x, y, z) => x + y + z;
  
  console.log('adderTwo\'s expected output: 16')
  console.log(`adderTwo's output: ${adderTwo(10, 5, 1)}`)
  
  //
  
  const myCallback = (first) => first + 5;
  
  const adderThree = (callback) => {
    return callback(11);
  };
  
  console.log('adderThree\'s expected output: 16')
  console.log(`adderThree's output: ${adderThree(myCallback)}`)
  
  //
  
  const addOne = (foo) => foo + 1;
  
  const adderFour = (callback) => {
    return (bar) => callback + bar;
  }
  
  const addedOne = adderFour(addOne(5));
  const result = addedOne(10);
  
  console.log('adderFour\'s expected output: 16')
  console.log(`adderFour's output: ${result}`)