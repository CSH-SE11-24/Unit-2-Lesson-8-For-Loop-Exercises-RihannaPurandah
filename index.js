// Task 1: Print Numbers
// Write a JavaScript program that uses a for loop to print all numbers from 1 to 10 to the console.
for(let i = 1; i <= 10; i++){
  console.log(i)
}




// Task 2: Odd Numbers
// Write a JavaScript program that uses a for loop to print all odd numbers from 15 to 40 to the console.
for(let x = 15; x <= 40; x+=2){
  console.log(x)
}



// Task 3: Sum of Numbers
// Write a JavaScript program that calculates and prints the sum of all numbers from 10 to 20 using a for loop.
let sum = 0
for(let v = 1;v <= 20; v++){
  sum = sum + v 
}
console.log(sum)


// Task 4: Array Iteration
// Create an array of numbers (e.g., [1, 2, 3, 4, 5]) and write a JavaScript program that uses a for loop to iterate through the array and print each element to the console.
let nums = [1,2,3,4,5]
for( let c = 0; c < nums.length;c++){
  console.log(nums[c])
}



// Task 5: Array Sum
// Create an array of numbers and write a JavaScript program that calculates and prints the sum of all the elements in the array using a for loop.
let sum2 = 0
let nums2 = [2,4,6,8,10,12]
for(let a = 0; a < sum2.length;a++){
  sum2 = sum2 + nums2[a]
}
console.log(sum2)




// Stretch: Element counter
// Create an array of numbers
// Prompt the user for a number and write a for loop that tracks how many times that number is in the array
// e.g. 5 for [5, 1, 2, 5] --> 2
let num = [1,2,3,4,5]
let user = prompt("Number: ")
let attempts = 0
for(let d = 0; user == num;d++){
  console.log(num[d])
  console.log(`This number is in the num`)
}




