const friends = new Array("Настя", "Віка", "Соня");
console.log(friends);

const stack = new Array ();
stack.push("Настя");
stack.push("Віка");
stack.push("Соня");
console.log("Stack:", stack);

const queue = new Array ();
queue.push("Настя");
queue.push("Віка");
queue.push("Соня");
console.log("Queue:", queue)

const numbers = [];
for (let i = 0; i < 20; i++) {
  numbers.push(Math.floor(Math.random() * 20));
}
console.log(numbers)

const max = Math.max(...numbers);
const min = Math.min(...numbers);
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
const average = sum/numbers.length;


console.log("Max:", max);
console.log("Min:", min);
console.log("Average:", average);