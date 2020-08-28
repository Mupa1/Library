const myLibrary = [];

function Book(title, author, numPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
}

// test dynamic table
function render(book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.numPages}</td>
  <td>${book.readStatus}</td>
  `;
  list.appendChild(row);
}

// test dynamic table
function addBookToLibrary(ev) {
  ev.preventDefault();
  const book = new Book();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  book.numPages = document.getElementById('numPages').value;
  book.readStatus = document.getElementById('readStatus').value;

  myLibrary.push(book);
  render(book);
  // const pre = document.querySelector('#msg pre');
  // pre.textContent = `\n${JSON.stringify(myLibrary, '\t', 2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', addBookToLibrary);
});