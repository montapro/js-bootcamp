let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

// name, age, location
let person = {
  name: 'Markus Krause',
  age: 34,
  location: 'Herdecke'
}

// Andrew is 27 and lives in Philadelphia
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

// Increase age by 1 and print message again
person.age = person.age + 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

