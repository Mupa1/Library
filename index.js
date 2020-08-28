const myLibrary = [
  {
    title: 'Book One',
    author: 'Samuel',
    numPages: 200,
    readStatus: 'read'
  }
];

function Book(title, author, numPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
}

// test dynamic table
function displayBook(book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.numPages}</td>
  <td>${book.readStatus}<a href="#" class="btn btn-danger btn-sm ml-4 delete">Change Status</a></td>
  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;
  list.appendChild(row);
}

function render() {
  myLibrary.forEach((book) => {
    displayBook(book);
  });
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
  displayBook(book);
  
  // const pre = document.querySelector('#msg pre');
  // pre.textContent = `\n${JSON.stringify(myLibrary, '\t', 2)}`;
}

function newBookEntry() {
  let x = document.getElementById('myForm');
  if (x.style.display === "block") {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function hideNewBookButton() {
  let x = document.getElementById('btn');
  if (x.style.display === "none") {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function deleteBook(el) {
  if(el.classList.contains('delete')) {
    el.parentElement.parentElement.remove();
  }
}

function updateReadStatus(el) {
  if (el.classList.contains('delete')) {
    el.parentElement.parentElement.remove();
  }
}

// document.addEventListener('DOMContentLoaded', );

document.addEventListener('DOMContentLoaded', () => {
  render();
  document.getElementById('submit').addEventListener('click', addBookToLibrary);
});

document.getElementById('book-list').addEventListener('click', (e) => {
  deleteBook(e.target)
})

document.getElementById('btn').addEventListener('click', (e) => {
  hideNewBookButton(e.target)
}) 
