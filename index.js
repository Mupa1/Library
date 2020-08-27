let myLibrary = [];

function Book(title, author, numPages, readStatus) {
  this.title = title
  this.author = author
  this.numPages = numPages
  this.readStatus = readStatus
  this.bookInfo = function () {
    return `${title} ${author}, ${numPages}, ${readStatus}`;
  }
}

function addBookToLibrary() {
  
}