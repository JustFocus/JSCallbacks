var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//
// function addNumbers(sum, numsLeft, completionCallBack) {
//   if (numsLeft > 0){
//     reader.question("Enter number:", function (numString) {
//       var num = parseInt(numString);
//       sum += num;
//       numsLeft --;
//       completionCallBack(sum);
//       addNumbers(sum, numsLeft, completionCallBack);
//     } );
//   }
//   else {
//     completionCallBack(sum);
//   }
// }
//
// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });


function askIfGreaterThan(el1, el2, callback) {
  reader.question("Is " + el1 + " greater than " + el2 + "?", function (answerString){
    var answer = answerString;
    if (answer === "Yes") {
      callback(true);
    } else if (answer === "No") {
      callback(false);
    } else {
      askIfGreaterThan(el1, el2, callback);
    }
  });
}


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
