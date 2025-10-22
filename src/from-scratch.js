/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (petName === undefined){
    console.log("Missing information. Please provide a valid pet.")
    return
  }
  if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else
    console.log("What an...interesting pet.");
}

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i)
  }
}

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  for (let i = 0; i < str.length; i++){
    console.log(`${str[i].toUpperCase()}!`)
  }
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'a' && char <= 'z') {
      lowercase++;
    } else if (char >= 'A' && char <= 'Z') {
      uppercase++;
    } else {
      neither++;
    }
  }
  
  return { lowercase, uppercase, neither };
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  const greedyNames = [];

  for (let i = 0; i < gnomes.length; i++) {
    if (gnomes[i].stolenDecorations.length > 1) {
      greedyNames.push(gnomes[i].name);
    }
  }

  return greedyNames;
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
