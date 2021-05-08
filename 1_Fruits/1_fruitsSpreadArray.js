let fruit = ["apple", "pear", "orange"];

fruit.push("kiwi");
console.log(fruit);

fruit.splice(1, 1);
console.log(fruit);

fruit.splice(1, 0, "peach", "cherry");
console.log(fruit);

fruit.sort();
console.log(fruit);

let car = ["mercedes", "bmw"];

console.log(...fruit, ...car);
