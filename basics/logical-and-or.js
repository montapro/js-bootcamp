let isGuestOneVegan = false
let isGuestTowVegan = false

if (isGuestOneVegan && isGuestTowVegan) {
  console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTowVegan) {
  console.log('Make sure to offer up some vegan options.')
} else {
  console.log('Offer up anything on the menue.')
}