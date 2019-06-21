// A) Declare a variable that equals to five times 20

const mult = 5 * 20;
console.log(mult);

// B) (Use parenthesis) If Charly has 16 apples then loses 2, but then a friend comes 
//and gives him the same amount he has in his hands how much does he keep when he gets 
//home and splits it into equal amounts with is 3 brothers?

// let charly = 16 - 2;
// console.log(charly);
// let friend = charly + charly;
// console.log(friend);
// let brothers = friend / 4;
// console.log(brothers);
// Can't have a 3rd of an apple
// let countingApples = Math.round(brothers);
// console.log(countingApples);
// Refactor using paranthesis
let apples = ((16 - 2) * 2) / 4;
let newApples = Math.round(apples);
console.log(newApples);

//Multiply two variables with the answers of exercise A and B
const bonus = mult * newApples;
console.log(bonus);