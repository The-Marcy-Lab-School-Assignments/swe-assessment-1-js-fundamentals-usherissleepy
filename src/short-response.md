# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

    The block of code throws a refrence error if you try and run it.  The reason for this is because the variable "curentStatus" isn't declared until the if block and if you try and declare a variable in an if block it won't work.  First we need to get rid of "let" behind each "currentStatus" in the code, and simply declare the variable before the if block.  The improved should look like:

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

### Question 2

    The code logs "Michael Jordan" to the console.  The reason for this is because when we assign "bestPlayer" to "theGoat" the computer makes space for the refrence of the values in "bestPlayer".  So if something in "bestPlayer" is changed, it will also change for "theGoat" because it's going based off the refrence value from "bestPlayer".

### Question 3

    The code logs "Paul is the hardest working person in the room." and a line underneath that it logs "Laisha is also the hardest working person in the room."  The reason for this is because first the "shoutout" function is ran, within the shoutout function "theHustler" is declared as 'Paul' so the console logs "Paul is the hardest working person in the room.".  This is because within the function, "theHustler" is a local scope variable so it can only be accessed within the function.  Before this function is declared, "theHustler" is declared and set equal to "Laisha".  So underneath where we invoked the function we console logged `${theHustler} is also the hardest working person in the room.`.  The reason why it prints both with 2 different names for theHustler is because essentially "Laisha" is global scope, and "Paul" is local scope, so if you just console.log theHustler on its own then it will print "Laisha" because it is a global scope variable so it can be used anywhere and the only time we will see "Paul" is if the function is invoked because it is a local scope variable.

### Question 4

    The use of a rest parameter is to collect any remaining arguments passed to a function into an array.  This can be useful if you are unsure of how many arguments a function will recieve.  The rest parameter creates an array, so you are able to use array methods like map, filter, length, etc... on the arguments collected by the rest parameter.  A function can only have one rest parameter and it has to be the last parameter in the function.

    The rest operator is prefixed with three dots so when using the rest parameter it will look something like ...someArgs and will take all remaining arguments and place them into an array.  Before rest parameters arguments had to first be converted into an array before any array methods could be called on them.  The following function is an example use of rest parameters:

(```
const sum = (firstNumber, secondNumber, ...remainingNumbers) => {
if (isNaN(secondNumber)){
return firstNumber
}
let total = firstNumber + secondNumber;
for (let num of remainingNumbers) {
total += num;
}
return total;
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

    A module is a file that contains code which can be imported and used in other parts of a big project or program.  Modules help you keep large programs with multiple parts organized into different files.  Using modules can be especially helpful in a team setting because one person can work on one module while another works on the other and the 2 codes won't interfere with each other and if there is any problem, debugging and troubleshooting is easier.  When you want to finally put your code all together you can export and import modules to work with other code.  How it works is you first use module.export and set it equal to the function or variable you want to export.  This is known as a default export.  If you are exporting multiple values or functions then it is called a named export.

(```
const function = () => {
console.log("a function")
}
const anotherOne = () => {
console.log("another one")
}

    module.exports = function; // <= Default Export
    const module.exports = { //<= Named Export
        function,
        anotherOne
    }

)

### Question 7

### Question 8
