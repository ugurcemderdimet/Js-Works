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

let merge = fruit.concat(car);
merge.forEach((element) => console.log(element));
