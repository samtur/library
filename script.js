// Selectors
let bookName = document.querySelector("#book").value;
let bookAuthor = document.querySelector("#author").value;
let bookStatus = document.querySelector("#status").value;
const submit = document.querySelector("#submitBtn");

// Array to store books
let library = [];

// Constructor for Book
function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

// Listening for Event
submit.addEventListener("click", function (event) {
  event.preventDefault();
  bookName = document.querySelector("#book").value;
  bookAuthor = document.querySelector("#author").value;
  bookStatus = document.querySelector("#status").value;
  addBookToLibrary();
});

// Function to add book to array.
function addBookToLibrary() {
  let item = new Book(bookName, bookAuthor, bookStatus);
  library.push(item);
}
