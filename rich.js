

// const maximumWealth = function(accounts) {
//     const added = [];
//     for (let i=0; i < accounts.length; i++) {
//         let sum = 0;
//         for (let j=0; j < accounts[i].lengt; j++) {
//             sum = sum + j;
//         }
//         added.push(sum);
//     }
//     for (let i=0; i < added.length; i++) {
//         let x = i + 1;
//         if (added[i] < added[x]) {
//             added.shift(added[i]);
//         }
//     }
//     return added[0];
// };

// const acc = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(maximumWealth(acc));

//

const acc = [[1, 2, 3], [4, 5, 6], [9, 8, 7], [10, 11, 12, 1], [3, 2, 1], [7, 8, 9]];

const max = (accounts) => {
    const added = accounts.map((account) => account.reduce((a, b) => a + b));
    const top = added.reduce((a, b) => a > b ? a : b );
    return top;
};

console.log(max(acc));