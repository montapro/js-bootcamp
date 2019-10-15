const puzzleEl = document.getElementById('puzzle')
const guessesEl = document.getElementById('guesses')
const game1 = new Hangman('Car parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode)
  
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})