
var memoi = require('./');

var fibonacci = memoi.ze(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(10); // 55
