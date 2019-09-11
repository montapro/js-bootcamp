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
}

const renderTodos = (todos, filters) => {
  // Filter todos by searchText
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  )

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

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', e => {
  console.log('Added new todo')
})

// Listen for change input
document.querySelector('#new-todo-text').addEventListener('input', e => {
  console.log(e.target.value)
})

// Listen for change search-text
document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})
