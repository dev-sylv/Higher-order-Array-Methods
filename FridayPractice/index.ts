// 1.Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example :

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
console.log([2, 4, 5, 6, 7, 8, 5, 9].join().slice(0, 5));
// const CreatePhoneNumber = (arr: any) => {
//   return;
// };

// 2.You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns N.

// For example:

// [2, 4, 0, 100, 4, 11, 2602, 36]

// Should return: 11

//   return evenNum[0];
// }

// 3.Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24
console.log("foo" + 1);

// 4. Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// For example:
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.

// 5. Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Your mission:
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.

// A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

// 6. Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

// For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
