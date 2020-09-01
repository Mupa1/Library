// eslint-disable-next-line import/extensions
import {
  newBookButton,
  deleteBookButton,
  // eslint-disable-next-line import/extensions
} from './dom.js';

const myLibrary = [{
  title: 'Book One',
  author: 'Samuel',
  numPages: 200,
  readStatus: 'Already Read',
}];

function Book(title, author, numPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
}

function displayBook(book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.numPages}</td>
  <td><span class="read-status">${book.readStatus}</span><a href="#"  class="btn btn-danger btn-sm ml-4 update" >Change Status</a></td>
  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;
  list.appendChild(row);
}

function render() {
  myLibrary.forEach((book) => {
    displayBook(book);
  });
}


function addBookToLibrary(ev) {
  ev.preventDefault();
  const book = new Book();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  book.numPages = document.getElementById('numPages').value;
  book.readStatus = document.getElementById('readStatus').value;

  myLibrary.push(book);
  displayBook(book);
}

function newBookEntry() {
  const x = document.getElementById('myForm');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function hideNewBookButton() {
  newBookEntry();
  const x = document.getElementById('btn');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function changeReadStatus(el) {
  const parent = el.parentElement;
  const status = parent.querySelector('.read-status');
  const index = el.parentElement.parentElement.rowIndex;
  if (status.innerHTML !== 'Already Read') {
    status.innerHTML = 'Already Read';
    myLibrary[index - 1].readStatus = 'Already Read';
  } else {
    status.innerHTML = 'Not Read';
    myLibrary[index - 1].readStatus = 'Not Read';
  }
}

function deleteBook(el) {
  if (el.classList.contains('delete')) {
    const remindex = el.parentElement.parentElement.rowIndex;
    const startpos = remindex - 1;
    myLibrary.splice(startpos, 1);
    el.parentElement.parentElement.remove();
  } else if (el.classList.contains('update')) {
    changeReadStatus(el);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  document.getElementById('submit').addEventListener('click', addBookToLibrary);
});
deleteBookButton.addEventListener('click', (e) => {
  deleteBook(e.target);
});
newBookButton.addEventListener('click', (e) => {
  hideNewBookButton(e.target);
});