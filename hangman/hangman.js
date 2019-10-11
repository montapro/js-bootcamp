const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function() {
  let puzzle = ''

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  });
  
  return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
  guess = guess.toLowerCase()
  const isUniqe = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (isUniqe) {
    this.guessedLetters.push(guess)
  }

  if (isUniqe && isBadGuess) {
    this.remainingGuesses--
  }
}

const game1 = new Hangman('Cat', 2)
game1.makeGuess('c')
game1.makeGuess('t')
game1.makeGuess('z')
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

const game2 = new Hangman('New Jersey', 4)
game2.makeGuess('w')
console.log(game2.getPuzzle())