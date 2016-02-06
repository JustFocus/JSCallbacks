var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


function addTwoNumbers(callback) {
  reader.question("Enter #1", function (numString1) {
    reader.question("Enter #2", function (numString2) {
      var num1 = parseInt(numString1);
      var num2 = parseInt(numString2);

      callback(num1, num2);
    });
  });
}
