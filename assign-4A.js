// Conditional Statements
function checkNumber(number) {
    if (number > 0) {
      return "Positive";
    } else if (number < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  // Loops
  function printNumbers(limit) {
    console.log("Numbers from 1 to " + limit + ":");
    for (let i = 1; i <= limit; i++) {
      console.log(i);
    }
  }
  
  // Functions
  function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    else if(number<0){
        return "   --> Given number is negative. So, we don't calculate its factorial";
    }
    return number * calculateFactorial(number - 1);
  }
  

//   const numToCheck = 5;
//   console.log(numToCheck + " is " + checkNumber(numToCheck));
  
//   const numbersToPrint = 10;
//   printNumbers(numbersToPrint);


// var num = readInt("What is your favorite number? ");

// println(num + "?! That's my favorite number too!");

// println("Num is a " + typeof num);
  
const factorialNumber = 5;
console.log("Factorial of " + factorialNumber + " is " + calculateFactorial(factorialNumber));
  