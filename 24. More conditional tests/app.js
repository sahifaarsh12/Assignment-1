"use strict";
//*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//• Tests for equality and inequality with strings
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); //False
console.log(str1 != str2); //True
//• Tests using the lower case function
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2); //true
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 9;
const num2 = 4;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
//• Tests using "and" and "or" operators
const x = 3;
const y = 8;
const z = 10;
console.log(x < y && y < z); //true,both conditions are true
console.log(x < y || y > z); //true,atleast on condition is true
console.log(x > y && y < z); //false,both conditions are false
console.log(x > y || y > z); //false, both conditions are false
//• Test whether an item is in a array
const food = ["pasta", "pizza", "dumplings", "noodles"];
console.log(food.includes('dumplings')); //true
console.log(food.includes('biryani')); //false
//• Test whether an item is not in a array
const animals = ["cow", "zebra", "horse", "deer"];
console.log(!animals.includes('horse')); //false
console.log(!animals.includes('rabbit')); //true
