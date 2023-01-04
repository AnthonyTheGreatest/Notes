const listOne = [1, 2, 3, 4, 5];

const removeItemAtIndex = (list, index) => {
    const newList = [...list]
    newList.splice(index, 0);
    return newList;
  };

console.log(removeItemAtIndex(listOne, 2));
console.log(listOne.slice(2, 0));