const getPuzzle = async wordCount => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

const getCountry = async countryCode => {
  const response = await fetch('http://restcountries.eu/rest/v2/all')

  if (response.status === 200) {
    const data = await response.json()
    return data.find(country => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch data')
  }
}

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=aac18f2c0b00c4')

  if (response.status === 200) {
    const data = await response.json()
    return data
  } else {
    throw new Error("Unable to fetch location data")
  }
}