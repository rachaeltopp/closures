var countdownGenerator = function (x) {
  var next = x + 1;
  return function () {
    next -= 1;
    if (next > 0) {
      console.log('T-minus ' + next + '...');
    } else if (next == 0) {
      console.log('Blast off!');
    } else {
      console.log('Rockets already gone, bub!');
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
