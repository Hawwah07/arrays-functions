// Question 1
/** Mutating array methods are methods that change or modify the original array on which they are called,
 while non-mutating array methods are methods that return a new array or a value without altering the original array12.

Some examples of mutating array methods are:

 -push(): adds one or more elements to the end of an array
 -pop(): removes and returns the last element of an array
 -shift(): removes and returns the first element of an array
 -unshift(): adds one or more elements to the beginning of an array
 -sort(): sorts an array in place according to a compare function

Some examples of non-mutating array methods are:
 -concat(): returns a new array that is a combination of two or more arrays
 -slice(): returns a shallow copy of a portion of an array
 -map(): returns a new array with each element transformed by a callback function
 -filter(): returns a new array with only elements that pass a test function
 -reduce(): returns a single value by applying a reducer function to each element of an array
**/

//Question 2
let arrOfLang = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
//1.
    arrOfLang.push("Kotlin");
  console.log(arrOfLang)
// 2.
   arrOfLang.splice(3, 0, "Java");
   console.log(arrOfLang);
// 3. 
   arrOfLang.shift();
   console.log(arrOfLang);
// 4.
   arrOfLang.unshift("Scala", "Swift");
   console.log(arrOfLang);
// 5.
   arrOfLang.splice(5, 1, "Go", "Rust");
   console.log(arrOfLang);

// Question 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
        fruit[2] = "orange";
        return fruit
}  // fruit = ["apple", "mango", "orange"];

//Question 4
 function maxNum (num) {
    return Math.max(...num);
 }
 console.log(maxNum([4,5,10,-2])); //10

//Question 5
function valTimesIndex (num) {
    let newArr = num.map(function (element) {
        return element * num.indexOf(element)
    })
    return newArr;
}
console.log(valTimesIndex([1,2,3]));
console.log(valTimesIndex([5,10,15]));
