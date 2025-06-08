function checkFishWeight(weight, minWeight, callback) {
  setTimeout(function() {
    if (weight >= minWeight) {
      callback("Pass");
    } else {
      callback("Fail");
    }
  }, 2000);
}

function scoringCallback(result) {
  document.writeln("Result of check:", result);
}

checkFishWeight(4.5, 3.0, scoringCallback);
