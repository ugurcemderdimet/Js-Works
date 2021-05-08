const url = "https://jsonplaceholder.typicode.com/users/5";
async function doStuff() {
  const response = await fetch(url);
  const user = await response.json();
  console.log(user);
}
doStuff();
