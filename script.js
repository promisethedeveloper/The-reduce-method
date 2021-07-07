const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using reduce method
const balance = movements.reduce(function(acc, cur, i, arr) {
  return acc + cur
}, 0);
console.log(balance);

// Using a for of loop
let sum = 0;
for(const mov of movements) {
  sum += mov;
}
console.log(sum);

// Using a for loop
let sum2 = 0;
for(let i = 0; i < movements.length; i++) {
  sum2 += movements[i];
}
console.log(sum2);

// Using the reduce method to get the element with the maximum value in an array
const answer = movements.reduce(function(acc, curValue) {
  if (acc > curValue) {
    return acc;
  } else {
    return curValue;
  }
}, movements[0]);

console.log(answer);