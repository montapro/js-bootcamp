let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkedAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCapacity - partySize
  }
}

restaurant.seatParty(72)
console.log(restaurant.checkedAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkedAvailability(4))