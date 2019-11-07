'use strict';

let todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false
};

// Initialize renderTodos
renderTodos(todos, filters);

// Listen for change search-text
document.querySelector('#search-text').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// Adding todos
document.querySelector('#new-todo').addEventListener('submit', e => {
  const text = e.target.elements.text.value.trim();

  e.preventDefault();

  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
  }
});

// Listen for checkbox hide-completed checked
document.querySelector('#hide-completed').addEventListener('change', e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});