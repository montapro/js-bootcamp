let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 50
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

let makeGuess = function(guess) {
  let min = 1
  let max = 5
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

  // return guess >= randomNum && guess <= randomNum
  return guess === randomNum
}

console.log(makeGuess(1))
