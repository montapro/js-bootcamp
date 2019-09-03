let name = '   Andrew Mead  '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abs123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// isValidPassword
let isValidPassword = function(password) {
  // if (password.length > 8 && !password.includes('password')) {
  //   return true
  // } else {
  //   return false
  // }

  return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('sdf'))
console.log(isValidPassword('sdölfighsdkjfghskjdfhg'))
console.log(isValidPassword('klsjdhfgkljsdhfgkjsdhfgkljpassword'))