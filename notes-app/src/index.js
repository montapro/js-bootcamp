import { getNotes, createNote, removeNote, updateNote } from './notes';
import { getFilters, setFilters } from './filters';

// console.log(getNotes());
// createNote();
// removeNote('1');

// updateNote('78bbf571-91e7-471a-a51e-c1a46e24032c', {
//   title: 'My note title',
//   body: 'This is the body for my note.'
// });
// console.log(getNotes());

console.log(getFilters());
setFilters({
  searchText: 'Office',
  sortBy: 'byCreated'
});
console.log(getFilters());
