const puzzleEl = document.getElementById("puzzle")
const guessesEl = document.getElementById("guesses")
const game1 = new Hangman("Nesim Alkan", 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode)

  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})

getPuzzle("2")
  .then(puzzle => {
    console.log(puzzle)
  })
  .catch(error => {
    console.log(`Error: ${error}`)
  })

getCurrentCountry()
  .then(country => {
    console.log(country.name)
  })
  .catch(error => {
    console.log(`Error: ${error}`)
  })

// getLocation()
//   .then(location => {
//     return getCountry(location.country)
//   })
//   .then(country => {
//     console.log(country.name)
//   })
//   .catch(error => {
//     console.log(`Error: ${error}`)
//   })