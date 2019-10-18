const puzzleEl = document.getElementById('puzzle')
const guessesEl = document.getElementById('guesses')
const game1 = new Hangman('Nesim Alkan', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode)

  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

// const countryCode = 'US'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', e => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data2 = JSON.parse(e.target.responseText)
//     myCountry = data2.find(country => country.alpha2Code === countryCode)
//     console.log(myCountry.name)
//   } else if (e.target.readyState === 4) {
//     console.log('An error has taken place')
//   }
// })

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()
