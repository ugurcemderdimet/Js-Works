let everythingIsFine = true;
const control = new Promise(function (resolve, reject) {
  if (everythingIsFine) {
    resolve("Everything is fine ?");
  } else {
    reject("There is a problem!");
  }
});
control
  .then(function (answer) {
    console.log(answer);
  })
  .catch(function (error) {
    console.log(error);
  });
