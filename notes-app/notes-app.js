let notes = getSavedNotes()

const filters = {
  searchText: '',
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', () => {
  const id = uuidv4()
  notes.push({
    id: id,
    title: '',
    body: '',
  })
  saveNotes(notes)
  location.assign(editPageUrl(id))
})

document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#sort-by').addEventListener('change', e => {
  console.log(e.target.value)
})

window.addEventListener('storage', e => {
   if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
   }
})