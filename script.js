// Selectors
let bookName = document.querySelector("#book").value;
let bookAuthor = document.querySelector("#author").value;
let bookStatus = document.querySelector("#status").value;
const submit = document.querySelector("#submitBtn");
const contentContainer = document.querySelector(".contentContainer");

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

// Sample data
let harryPotter = new Book(
  "Harry Potter and the Goblet of Fire",
  "JK Rowling",
  true
);
let lordOfTheRings = new Book(
  "Lord of the Rings Trilogy",
  "JRR Tolkein",
  false
);
let kafkaOnTheShore = new Book("Kafka on the Shore", "Haruki Murakami", true);
library.push(harryPotter, lordOfTheRings, kafkaOnTheShore);

// Function to add book to array.
function addBookToLibrary() {
  let item = new Book(bookName, bookAuthor, bookStatus);
  library.push(item);
}

function displayBooks() {
  for (i in library) {
    const contentRow = document.createElement("div");
    contentRow.className = "contentRow";
    const contentOne = document.createElement("div");
    contentOne.className = "contentOne";
    contentOne.innerText = library[i].title;
    console.log(library[i].title);
    const contentTwo = document.createElement("div");
    contentTwo.className = "contentTwo";
    contentTwo.innerText = library[i].author;
    const contentThree = document.createElement("div");
    contentThree.className = "contentThree";
    contentThree.innerText = library[i].read === true ? "read" : "not read";
    const contentFour = document.createElement("div");
    contentFour.className = "contentFour";
    contentRow.append(contentOne);
    contentRow.append(contentTwo);
    contentRow.append(contentThree);
    contentRow.append(contentFour);
    contentContainer.append(contentRow);
  }
}

displayBooks();
