// Chapter 21-30

// Chapter 21 

// Question 1 

var allLower = userInput.toLowerCase();

// Corrected

// Question 2 

var userInput = prompt("Enter where do you live?")
var x = ["karachi","lahore","quetta","islamabad"];

userInput = userInput.toLowerCase();

console.log(userInput);

// Question 3 

var userInput1 = prompt("Enter where do you live??")
var y = ["LAHORE","KARACHI","ISLAMABAD","PESHAWAR"];

userInput1 = userInput1.toUpperCase();

console.log(userInput1);

// Question 4 

var firstVariable = "HELLO WORLD"

var SecondVariable = firstVariable.toLowerCase();

console.log(SecondVariable);

// Question 5 

var firstValue = ["HELLO!", "HOW ARE YOU"];

var secondValue = firstValue[0].toLowerCase();

console.log(secondValue);

// Question 6 

var arr =  "Hello, World!";
var arr1 = arr.toUpperCase();

alert(arr1);

// Question 7 

var cityName = "Karachi";

var firstWord = cityName.slice(0,1).toUpperCase();
var remainingWords = cityName.slice(1).toLowerCase();

console.log(firstWord + remainingWords);

// End of chp 21 

// Chapter 22-25 

// Question 1 

var sameWords = "Captain";

for (var i = 0; i < sameWords.length; i++) {
    if(sameWords.slice(i,i + 2) === "ap"){
        sameWords.slice(0,i) + sameWords.slice(i + 2);
    }
    console.log(sameWords.slice(i, i + 2))
}
// "ap" is found in slice.

// Question 2 

var str = "Hello! World";

var stringLength = str.length;

console.log(stringLength);

// Question 3 

var animal = "elephant";
var startIndex = Math.floor(animal.length / 2) - 2;
var endIndex = startIndex + 4; 

var seg = animal.slice(startIndex, endIndex);

console.log(seg); 

// Question 4 

var str = "Hello, World!";

var stringLength = str.length;

console.log("The length of string is: " + stringLength);

// Question 5 

var myString = "Welcome, User!.."

var countStr = myString.length;

var slicedStr = myString[0] + myString.slice(1, -3)

console.log("Counted Str: ", countStr);
console.log("Sliced String: ",  slicedStr);

// Question 6 

var text = "To be or not to be.";
var indx = text.indexOf("be");

console.log(indx);

// Question 7 

var text = "To be or not to be.";
var indx1 = text.lastIndexOf("be");

console.log(indx1);

// Question 8 

var text = "This is a string and it may go, go, go.";
var lastIndex = text.lastIndexOf("go");

if (lastIndex !== -1) {
  var firstCharIndex = lastIndex;
  var indx = firstCharIndex;

   console.log("Index of the first character of the last 'go': " + indx);
} 
else {
  console.log("'go' not found in the text.");
}

// Question 9 

var str = "Hello World!"

var indexNum = str.charAt(5);

if (str.charAt(indexNum) !== '5') {
  console.log("Corrected")
} else {
  console.log("This is an empty space.")
}

// Question 10 

var string = "abcde";

console.log(string.charAt(2));

// Question 11 

var text = "Hello how are you.";

var cha = text.charAt(10);

console.log(cha);

// Question 12 

var str = "This is my string for this question";

var x = str.charAt(str.length - 1);

console.log(x);

// Question 13 

var input = "Hello, how are you.";

var cha = input.charAt(5);

console.log(cha);

// Question 14 

var yourStringVariable = "This is a string";

if (yourStringVariable.charAt(3) === 's') {
  console.log("Condition True.")
} else{
  console.log("Condition False.")
}

// Question 15 

var reply = "I have no idea, but I'll try my best. no worries.";
var charArray = [];

for (var i = 0; i < reply.length; i++) {
  // Assign each character to the array
  charArray.push(reply.charAt(i));
}

var revisedReply = reply.replace("no", "yes");

console.log(revisedReply);

// Question 16 

var str = "This is an example with 1 and 2.";

var newstr = str.replace("1","one");

console.log(newstr);

// Question 17 

var x = "A is very popular alphabet, In most of the text A is used, A is first alphabet.";

var y = x.replaceAll("A", "Z").replace("first", "last");

console.log(y);

// End of chp 22-25

// Chapter 26 

// Question 1 

var roundedNumber = Math.round(4.5);

console.log(roundedNumber);

// Question 2 

var origNum = 9.2;

var roundNum = Math.ceil(origNum);

console.log(roundNum);

// Question 3 

var origNum = 6.9;

var roundNum = Math.floor(origNum);

console.log(roundNum);

// Question 4 

var originalNumber = 10.546;

var roundNumber = Math.round(originalNumber);

console.log("Rounded Number: " + roundNumber);

// Question 5 

var myNum = 0.4;

var resultedNum = Math.round(myNum);

console.log(resultedNum);

// End of chp 26 

// Chapter 27 

// Question 1 

console.log(Math.floor(Math.random() * 50));

// Question 2 

var Num;

Num = Math.random() * 10;

console.log(Num.toFixed(3));

// Question 3 

var randomNumber = Math.floor(Math.random() * 6) + 1;

console.log("You Rolled a " + randomNumber);

// Question 4 

var randomNumber = Math.random();

var tossResult = randomNumber < 0.5 ? 'Heads' : 'Tails';

console.log("The coin landed on: " + tossResult);

// End of chp 27 

// Chapter 28-29 

// Question 1 

var str = "54";

var result = Number(str);

console.log(result);

// Question 2 

var string = "123";

var resultedString = Number(string);

console.log(resultedString);

// Question 3 

var decimalNumber = "4.58";

var floatPoint = Number(decimalNumber);

console.log(floatPoint);

// Question 4 

var stringValue = "719";

var res = Number(stringValue);

console.log(typeof res);

// Question 5 

var num = 1.45;

var resulted = num.toString();

console.log(resulted);

// Question 6 

var convertVariable = 42;

var convertedResult = convertVariable.toString();

console.log(convertedResult);

// Question 7 

var str = "3.14";

var floatValue = Number(str);

console.log(floatValue);

// End of chp 28-29

// Chapter 30 

// Question 1 

var num = Math.random();

var newNum = num.toFixed(4).toString();

console.log(newNum);

// Question 2 

var num1 = 1.23989702023;

var num = num1.toFixed(2).toString();

var numResult = Number(num);

console.log(numResult);

// Question 3 

var numbers = 3.22356764543;

if (numbers.toFixed(2).toString().length > 4) {
  console.log(true)
}

// Question 4 

var manyDecimalPlacesNumber = 7.31212356;

var resultOfThis = manyDecimalPlacesNumber.toFixed(2).toString();

alert(resultOfThis);

// End of chp 30