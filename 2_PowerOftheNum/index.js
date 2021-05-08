function btnclick() {
  var num1 = document.querySelector("#num1").value;
  console.log(num1);
  var num2 = document.querySelector("#num2").value;
  console.log(num2);
  let power = 1;
  for (let i = 0; i < num1; i++) {
    power *= num2;
  }
  document.getElementById("result").innerHTML = "Result: " + power;
}
