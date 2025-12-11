# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

    The block of code throws a refrence error if you try and run it.  The reason for this is because the variable "curentStatus" isn't declared until the if block and if you try and declare a variable using let or const in an if block, it will throw a refrenece error because it is block-scoped. This means it is only accessible within that specific if block.  To fix this, first we need to get rid of "let" behind each "currentStatus" in the code, and then simply declare the variable before the if block.  The improved code should look like:

(```
const react = (isReuben) => {
let currentStautus
if (isReuben) {
currentStatus = 'Everything is just fine';
} else {
currentStatus = 'Time to panic.'
}

    console.log(currentStatus);

}

react(true);)

We can see here now the variable is declared outside the if block and will not give us a refrence error anymore. The only way to declare a variable within an if block is by using "var", if you use let or const you will get a refrence error.

### Question 2

    The code logs "Michael Jordan" to the console.  The reason for this is because when we assigned "bestPlayer" to "theGoat", the computer makes space for the refrence of the values in "bestPlayer".  So if something in "bestPlayer" is changed, it will also change for "theGoat" because it's going based off the refrence value from "bestPlayer".

### Question 3

    The code logs "Paul is the hardest working person in the room." and a line underneath that it logs "Laisha is also the hardest working person in the room."  The reason for this is because first the "shoutout" function is run, within the shoutout function "theHustler" is declared as 'Paul' so the console logs "Paul is the hardest working person in the room.".  This is because within the function "theHustler" is a local scope variable, so it can only be accessed within the function.  Before this function is declared, "theHustler" is declared and set equal to "Laisha".  So underneath where we invoked the function we console logged (````${theHustler} is also the hardest working person in the room.`).  The reason why it prints both with 2 different names for theHustler is because essentially "Laisha" is global scope, and "Paul" is local scope. If you just console.log theHustler on its own then it will print "Laisha" because it is a global scope variable so it can be used anywhere and the only time we will see "Paul" is if the function is invoked because it is a local scope variable.

### Question 4

    The use of a rest parameter is to collect any remaining arguments passed to a function into an array.  This can be useful if you are unsure of how many arguments a function will recieve.  The rest parameter creates an array, so you are able to use array methods like map, filter, length, etc... on the arguments collected by the rest parameter.  A function can only have one rest parameter and it has to be the last parameter in the function.

    The rest operator is prefixed with three dots, so when using the rest parameter it will look something like (```...someArgs) and will take all remaining arguments and place them into an array.  Before rest parameters, arguments had to first be converted into an array before any array methods could be called on them.  The following function is an example use of rest parameters:

(```
const sum = (firstNumber, secondNumber, ...remainingNumbers) => {
if (isNaN(secondNumber)){ // <= Gaurd Clause used to check if there's only one number.
return firstNumber // <= If there is only one number that number is returned.
}
let total = firstNumber + secondNumber; // Finds total by adding the firstNumber and the secondNumber
for (let num of remainingNumbers) { //For loop used to loop through remaining numbers
total += num; // <= Adds remainingNumbers numbers to total
}
return total; // Gives us the sum
})

### Question 5

    Scope determines where a variable may be accessed. Local scope variables can only be accessed within their block of code or function.  A global scope variable can be accessible anywhere.  You can think of scope like a house, varibles only exist in their rooms, global would be the whole house, and local would be private room (functions or block).  Inner code can see variables outside but not the other way around.  An example of local and global scope is:

(```
const favoriteColor = 'Black'; // <= Global Scope Variable

const myFavoriteColor = () => {
const favoriteColor = 'Blue'; // <= Local Scope Variable
console.log(`My favorite color is ${favoriteColor}.`);
}

myFavoriteColor();
console.log(`My favorite color is ${favoriteColor}.`))

This code will print:
"My favorite color is Blue."
"My favorite color is Black."

    We can see here that even though the variable is favoriteColor for both, we get 2 different outputs, this is because when we assigned favoriteColor to 'Black' we created a global scope variable. When we then assigned 'Blue' to favoriteColor, inside our function we created a local scope variable. Remember, inner code can see outside variables but not the other way around, that's why when we changed favoritColor to 'Blue' it still remained 'Black' outside of our function.

### Question 6

    A module is a file that contains code which can be imported and used in other parts of a big project or program.  Modules help you keep large programs with multiple parts organized into different files.  Using modules can be especially helpful in a team setting because one person can work on one module while another works on the other, and the 2 codes won't interfere with each other and if there is any problem, debugging and troubleshooting is easier.  When you want to finally put your code all together you can export and import modules to work with other code.  How it works is you first use module.export and set it equal to the function or variable you want to export.  This is known as a default export.  If you are exporting multiple values or functions then it is called a named export.

(```
const func = () => {
console.log("a function")
}
const anotherOne = () => {
console.log("another one")
}

    module.exports = func; // <= Default Export
    const module.exports = { //<= Named Export
        func,
        anotherOne
    }

)

    Above are examples of what a default export will look like and what a named export will look like.  Now that you have your exports ready, how do we import them into where we want to use them?  To import a module you go to the file you want to import it into and you put const and the name of the function, set it equal to require, and within parenthesis the file name the function is being export from.  Let's assume the file that we have our functions in is called functions.js.  How it would look is:

(```
const func = require('./functions.js') // <= The file name
// ^ The name of our function
)

    Here we can see to import we simply use const and put the name of the function and then require it from whatever file it is in.

### Question 7

    After the code runs the values that will be held in "fruits" are going to be (```['apple', 'banana', 'cherry', 'date']) and the values in "fruitsMinusOne" are (```['apple', 'banana', 'cherry']).  We can see that "fruits" still says the same and "fruitsMinusOne" removed 'date' at the end.  It is necessary to make a copy of the array in order to keep the function pure, because if we directly modified the array using methods like splice, pop, or push it will change the original array outside of it's scope, and a pure function does not alter anything outside of it's scope the way an impure function does.  When we make a copy of the array the function works on a new independent copy.  That's why when we did "fruitsMinusOne" the values in "fruits" stayed the same.  The reason why we don't want to modify the array directly is because we want the function to remain pure, and the reason we want the function to be pure is because pure functions always produce the same output for the same input.  This allows the code to be more predictable and reliable.  Pure functions also are less likely to break other parts of your code because they are independent and only work within that scope.

### Question 8

The data type I would use to represent a single item in the cart is an object because each item has a bunch of prorperties such as the price, name, quantity, etc.. so an object would be the best data type to use here. The data type I would use to represent the entire shopping cart is an array because the shopping cart is a list of the items you want to buy, and an array is a list of elements.

### Example:

```js
const shoppingCart = {
  id: 101,
  name: "Carbon Fiber Spoiler",
  price: 239.99,
  quantity: 1,
},
{
    id: 202,
    name: "Cold Air Intake",
    price: 449.99
    quantity: 2,
},
{
    id: 303,
    name: "Exhaust Pipes",
    price: 234.99,
    quantity: 3,
}
```
