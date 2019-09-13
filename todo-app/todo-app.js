const todos = [
  {
    text: 'Order cat food',
    completed: false,
  },
  {
    text: 'Clean kitchen',
    completed: true,
  },
  {
    text: 'Buy food',
    completed: true,
  },
  {
    text: 'Do work',
    completed: false,
  },
  {
    text: 'Exercise',
    completed: true,
  },
]

const filters = {
  searchText: '',
  hideCompleted: false,
}

// Render function for adding todos to the todo app
const renderTodos = (todos, filters) => {
  // Filter todos by searchText
  const filteredTodos = todos.filter(todo => {
    // Check if filtered text is in todo
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())

    // Check if todo.completed is false or filters.hideCompleted is false
    const hideCompletedMatch = !todo.completed || !filters.hideCompleted

    // Check if searchTextMatch and hideCompletedMatch are true, then return true
    return searchTextMatch && hideCompletedMatch
  })

  // Filter todos by completed
  const incompleteTodos = filteredTodos.filter(todo => !todo.completed)

  // Clear #todos div in DOM
  document.querySelector('#todos').innerHTML = ''

  // Create summary variable
  const summary = document.createElement('h2')

  // Include Content to summary variable
  summary.textContent = `You have ${incompleteTodos.length} todos left`

  // Append summary to #todos div in DOM
  document.querySelector('#todos').appendChild(summary)

  // Render each todo to #todo div in DOM
  filteredTodos.forEach(todo => {
    const todoText = document.createElement('p')
    todoText.textContent = todo.text
    document.querySelector('#todos').appendChild(todoText)
  })
}

// Initialize renderTodos
renderTodos(todos, filters)

// Listen for change search-text
document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

// Listen for checkbox hide-completed checked
document.querySelector('#hide-completed').addEventListener('change', e => {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})

// Adding todos
document.querySelector('#new-todo').addEventListener('submit', e => {
  // prevent default behavior of form submit
  e.preventDefault()

  // Push newTodo object to todos array if its text value is not empty string
  if (e.target.elements.text.value != '') {
    todos.push({
      text: e.target.elements.text.value,
      completed: false,
    })

    // renderTodos function once again
    renderTodos(todos, filters)
  }

  // clear input value
  e.target.elements.text.value = ''
})
