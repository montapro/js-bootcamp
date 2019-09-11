const notes = [
  {
    title: 'My next trip',
    body: 'I would like to go to Spain.',
  },
  {
    title: 'Habbits to work on',
    body: 'Exercice. Eating a bit better.',
  },
  {
    title: 'Office modification',
    body: 'Get a new seat',
  },
]

const filters = {
  searchText: ''
}

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  )

  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach(e => {
    const noteEl = document.createElement('p')
    noteEl.textContent = e.title
    document.querySelector('#notes').appendChild(noteEl)
  })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', e => {
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', e => {
  document.querySelectorAll('.note').forEach(note => {
    note.remove()
  });
})

document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})