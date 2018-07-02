/*JS to iterate integers from 1 to 100. 
For multiples of 3, print "Fizz"
For multiples of 5, print "Buzz" 
For multiples of 3 and 5, print "FizzBuzz" along with number*/

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " FizzBuzz");
    } else
    if (i % 5 == 0) {
        console.log(i + " Buzz");
    } else
    if (i % 3 == 0) {
        console.log(i + " Fizz");
    } else {
        console.log(i);
    }
}