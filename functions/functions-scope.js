// Global scope (cnovertFahrenheitToCelsius, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)
    // Loxal scope (isFreezing)

let cnovertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9

  if (celsius <= 0) {
    let isFreezing = true
  }
  
  return celsius
}

let temp = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(temp)
console.log(tempTwo)
