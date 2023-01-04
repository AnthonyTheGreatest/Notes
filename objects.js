const thisArr = [
    {varos: "BP", id: '1'},
    {varos: "SOP", id: '2'},
    {varos: "DEB", id: '3'},
]

//Change property names in objects from varos to city

const newArr = thisArr.map(({varos: city, id}) => ({city: city, id: id}));
//console.log(newArr);

//

const obj = {
    x: 1
};
//save value of x to y with destructuring assignment
const {x: y} = obj;
console.log(y);  //1



