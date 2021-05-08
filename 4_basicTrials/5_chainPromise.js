const control = new Promise(function asyncOperation() {
  control
    .then((result) => {
      return anotherAsyncOperation(result);
    })
    .then((chainResult) => {
      return chainResult.json();
    })

    .catch((error) => {
      console.log("error");
    });
});
