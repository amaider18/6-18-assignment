// // // Coding Steps:

// // // 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.





var sum = 0
ages = [3, 9, 23, 64, 2, 8, 28, 93]
ages.push (52)
const lastAge = ages [ages.length - 1]
console.log (lastAge - ages [0]); 
for (var number of ages) {
    sum += number;
}
average = sum / ages.length
console.log (average); 

// // // a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
// // // b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// // // c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.






// // 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// // a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// // b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
var lengths = names.map (function (names) {
    return names.length
})
console.log (lengths)

var sum = 0 
for (var number of lengths) {
    sum += number; 
}
average = sum / lengths.length 
console.log (average);

let result = " "
for (let i = 0; i <names.length; i++) {
    result = result.concat (names [i]) + " "
}
console.log (result); 


// // 3.	How do you access the last element of any array?
// // 4.	How do you access the first element of any array?
// // 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// // For example:

// // namesArray = ["Kelly", "Sam", "Kate"] //given this array
// // nameLengths = [5, 3, 4] //create this new array

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.


namesArray = ["David", "Patrick", "Bob"]
var nameLengths = namesArray.map (function (namesArray) {
    return namesArray.length
})
console.log (nameLengths);
    
sum = 0 
for (var number of nameLengths) {
  (sum += number);
}
console.log (sum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

word = "Hello" 
var n = 3
let result = " "
for (let i = 0; i < n; i++) {
    result - result.concat (word)
}
console.log (result); 

// // 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

var firstName = "Alex"
var lastName = "Maider" 

let fullName = (firstName + " " + lastName)
console.log (fullName) 
// // 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// // 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
// // 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
// // 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// // 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


numbers = [1, 2, 3, 4]
let sum = 0
for (var number of numbers) {
    (sum += number);
} console.log (sum > 100);



numbersOne = [1, 2, 3, 4]
numbersTwo = [5, 6, 7, 8]

let sumOne = 0
for (var number of numbersOne) {
    (sumOne += number);
}

averageOne = sumOne / numbersOne.length;
let sumTwo = 0
for (var number of numbersTwo) {
    (sumTwo += number);
}
averageTwo = sumTwo / numbersTwo.length;

console.log (averageOne > averageTwo);



// // 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// // 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


var isHotOutside = true
var moneyInPocket = 100

console.log (isHotOutside = true) && (moneyInPocket > 10.50) 

// // Write a function that combines the values of a checking account and savings account, for someone who wants to know the total value of their bank account. 

function addMoney (checkingAccount, savingsAccount) {
    return checkingAccount + savingsAccount;
}

