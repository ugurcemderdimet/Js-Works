const fruitsList = ["apple", "pear", "kiwi"];

const list = fruitsList.reduce((sum, item) => {
  return sum + item;
}, "");
console.log(list);
