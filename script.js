// console.log("running script...");
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`Is the sum 50?: ${isSum50}`);
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`Are there at least 2 odd numbers: ${isTwoOdd}`);
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
//changed it so I doesn't use not
const isOver25 = 25 > n1 || 25 > n2 || 25 > n3 || 25 > n4;
console.log(`Are the numbers under 25? ${isOver25}`);
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`Are all number unique? ${isUnique}`);

// Start of Part 1
// Check if all number is divisible by 5
// if everything is divisible by 5 
// then it should add up to 0
const isDivisibleBy5 = (n1%5) + (n2%5) + (n3%5) + (n4%5) === 0 ;

// check if the first number is larger than the last number
const is1stLargerThanLast = n1 > n4;

// self explainatory.
const arithmeticChain = (n2-n1) * n3 % n4;
// end of part 1

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log(`Did it meet all of the conditions? ${isValid}`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// start of part 2
const totalDistance = 1500;
const fuelBudget = 175;
const avgCostOfFuel = 3;


function gallonsForTrip (mph, milesPerGallon) {
  let totalGallon = totalDistance * milesPerGallon;
  totalGallon /= mph;
  return totalGallon;
}
const totalGallonFor55 = gallonsForTrip(55, 30);
console.log(`Total gallons for 55mph ${totalGallonFor55}`);
// end of part 2