// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  if (todosJSON != null) {
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

// Save todos to localStorage
const saveTodos = todos => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo from list
const removeTodo = id => {
  const todoIndex = todos.findIndex(todo => todo.id === id)

  todos.splice(todoIndex, 1)
}

// Toggle todo as true or false
const toggleTodo = todo => {
  todo.completed = !todo.completed;
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter(todo => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !todo.completed || !filters.hideCompleted

    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter(todo => !todo.completed)

  document.querySelector('#todos').innerHTML = ''
  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos))

  filteredTodos.forEach(todo => {
    // generateTodoDOM(todo)
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })
}

// Get the dom elements for an individual note
const generateTodoDOM = todo => {
  const todoEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = todo.completed
  todoEl.appendChild(checkbox)
  checkbox.addEventListener('change', () => {
    toggleTodo(todo)
    saveTodos(todos)
    renderTodos(todos,filters)
  })

  // Setup the todo text
  todoText.textContent = todo.text
  todoEl.appendChild(todoText)

  // Setup the remove button
  removeButton.textContent = 'x'
  todoEl.appendChild(removeButton)
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = incompleteTodos => {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  return summary
}
