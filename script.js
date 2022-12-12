// Selectors
let bookName = document.querySelector("#book");
let bookAuthor = document.querySelector("#author");
let bookStatus = document.querySelector("#status");
const submit = document.querySelector("#submitBtn");
const contentContainer = document.querySelector(".contentContainer");
let readBtns = document.querySelectorAll(".contentThree");
let deleteBtns = document.querySelectorAll(".contentFour");
let contentRow = "";
let contentOne = "";
let contentTwo = "";
let contentThree = "";
let contentFour = "";

// Array to store books
let library = [];

// Constructor for Book
function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.add = false;
}

// Listening for Submit
document.querySelectorAll(".inputItem[data-error] .input").forEach((inpEl) => {
  inpEl.addEventListener("input", () =>
    inpEl.parentElement.removeAttribute("data-error")
  );
});

submit.addEventListener("click", function (e) {
  if (
    bookName.value === "" ||
    bookAuthor.value === "" ||
    bookStatus.value === ""
  ) {
    return;
  }
  bookNameValue = bookName.value;
  bookAuthorValue = bookAuthor.value;
  bookStatusValue = bookStatus.value;
  bookStatusValue = bookStatusValue === "true";
  bookName.value = "";
  bookAuthor.value = "";
  bookStatus.value = "";
  addBookToLibrary();
  displayBooks();
});

// Blocking default validation behaviour
// bookName.addEventListener("invalid", (e) => {
//   e.preventDefault();
// });

// bookAuthor.addEventListener("invalid", (e) => {
//   e.preventDefault();
// });

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

// Function to toggle read buttons
function readListener(contentThree, libraryInd) {
  contentThree.addEventListener("click", function () {
    this.textContent === "Read"
      ? (this.textContent = "Not Read")
      : (this.textContent = "Read");
    libraryInd.read === true
      ? (libraryInd.read = false)
      : (libraryInd.read = true);
  });
}

// Function to delete books
function deleteListener(contentFour, libraryInd, indNum, library) {
  contentFour.addEventListener("click", function () {
    let index = library.indexOf(libraryInd);
    if (index !== -1) {
      library.splice(index, 1);
    }
    const item = document.querySelector(`#contentRow${indNum}`);
    item.remove();
  });
}

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
    contentRow = document.createElement("div");
    contentRow.className = "contentRow";
    contentRow.id = `contentRow${i}`;
    contentOne = document.createElement("div");
    contentOne.className = "contentOne";
    contentOne.innerText = library[i].title;
    contentTwo = document.createElement("div");
    contentTwo.className = "contentTwo";
    contentTwo.innerText = library[i].author;
    contentThree = document.createElement("button");
    contentThree.className = "contentThree";
    contentThree.innerText = library[i].read === true ? "Read" : "Not Read";
    readListener(contentThree, library[i]);
    contentFour = document.createElement("button");
    contentFour.className = "contentFour";
    contentFour.innerText = "Delete";
    deleteListener(contentFour, library[i], i, library);
    contentRow.append(contentOne);
    contentRow.append(contentTwo);
    contentRow.append(contentThree);
    contentRow.append(contentFour);
    contentContainer.append(contentRow);
    library[i].add = true;
  }
}

// For Test data
displayBooks();
