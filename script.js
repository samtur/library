// Selectors
let bookName = document.querySelector("#book");
let bookAuthor = document.querySelector("#author");
let bookStatus = document.querySelector("#status");
const submit = document.querySelector("#submitBtn");
const contentContainer = document.querySelector(".contentContainer");
let readBtn = document.querySelectorAll(".contentThree");

// GET THIS TO WORK!
// readBtn = document.querySelectorAll(".contentThree");

// readBtn.forEach((item) => {
//   readBtn.addEventListener("click", function (e) {
//     console.log(item);
//   });
// });

// Array to store books
let library = [];

// Constructor for Book
function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.add = false;
}

// Listening for Event
submit.addEventListener("click", function (e) {
  e.preventDefault();
  bookNameValue = bookName.value;
  bookAuthorValue = bookAuthor.value;
  bookStatusValue = bookStatus.value;
  bookName.value = "";
  bookAuthor.value = "";
  bookStatus.value = "";
  addBookToLibrary();
  displayBooks();
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
  let item = new Book(bookNameValue, bookAuthorValue, bookStatusValue);
  library.push(item);
}

function displayBooks() {
  for (i in library) {
    if (library[i].add === true) {
      continue;
    }
    const contentRow = document.createElement("div");
    contentRow.className = "contentRow";
    const contentOne = document.createElement("div");
    contentOne.className = "contentOne";
    contentOne.innerText = library[i].title;
    console.log(library[i].title);
    const contentTwo = document.createElement("div");
    contentTwo.className = "contentTwo";
    contentTwo.innerText = library[i].author;
    const contentThree = document.createElement("button");
    contentThree.className = "contentThree";
    contentThree.id = `${i}`;
    contentThree.innerText = library[i].read === true ? "read" : "not read";
    const contentFour = document.createElement("div");
    contentFour.className = "contentFour";
    contentRow.append(contentOne);
    contentRow.append(contentTwo);
    contentRow.append(contentThree);
    contentRow.append(contentFour);
    contentContainer.append(contentRow);
    library[i].add = true;
  }
}

displayBooks();

// Listening for Read Button
