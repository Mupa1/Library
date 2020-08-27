const myLibrary = [];

function Book(title, author, numPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = readStatus;
}

function addBookToLibrary(ev) {
  ev.preventDefault();
  const book = new Book();
  book.title = document.getElementById("title").value;
  book.author = document.getElementById("author").value;
  book.numPages = document.getElementById("numPages").value;
  book.readStatus = document.getElementById("readStatus").value;

  myLibrary.push(book);
  const pre = document.querySelector("#msg pre");
  pre.textContent = `\n${JSON.stringify(myLibrary, "\t", 2)}`;
}

console.log(myLibrary);

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", addBookToLibrary);
});
