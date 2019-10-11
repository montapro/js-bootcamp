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
  })

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
