const puzzleEl = document.getElementById('puzzle')
const guessesEl = document.getElementById('guesses')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode)
  
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle()
  guessesEl.textContent = game1.getStatusMessage()
})