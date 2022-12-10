// Selectors
let bookName = document.querySelector("#book");
let bookAuthor = document.querySelector("#author");
let bookStatus = document.querySelector("#status");
const submit = document.querySelector("#submitBtn");
const contentContainer = document.querySelector(".contentContainer");
let readBtns = document.querySelectorAll(".contentThree");
let deleteBtns = document.querySelectorAll(".contentFour");

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
  bookStatusValue = bookStatusValue === "true";
  bookName.value = "";
  bookAuthor.value = "";
  bookStatus.value = "";
  addBookToLibrary();
  displayBooks();
});

// Sample data
// let harryPotter = new Book(
//   "Harry Potter and the Goblet of Fire",
//   "JK Rowling",
//   true
// );
// let lordOfTheRings = new Book(
//   "Lord of the Rings Trilogy",
//   "JRR Tolkein",
//   false
// );
// let kafkaOnTheShore = new Book("Kafka on the Shore", "Haruki Murakami", true);
// library.push(harryPotter, lordOfTheRings, kafkaOnTheShore);

// Function to toggle read buttons
function readListener(readBtns) {
  readBtns.forEach((btn) => {
    btn.addEventListener(
      "click",
      function () {
        this.textContent === "read"
          ? (this.textContent = "not read")
          : (this.textContent = "read");
      },
      { once: true }
    );
    // library[i].read === true
    //   ? (library[i].read = false)
    //   : (library[i].read = true);
  });
}

// Function to delete books
// function deleteListener(deleteBtns) {
//   for (let i = 0; i < deleteBtns.length; i++) {
//     deleteBtns[i].addEventListener("click", function () {
//       console.log(library);
//       library.splice(i, 1);
//       console.log(library);
//       const item = document.querySelector(`#contentRow${i}`);
//       item.remove();
//     });
//   }
// }

// Function to update ids
// function updateId(contentRows) {
//   for (let i = 0; i < contentRows.length; i++) {
//     console.log(contentRows[i]);
//     contentRows[i].id = `contentRow${i}`;
//   }
// }

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
    contentRow.id = `contentRow${i}`;
    const contentOne = document.createElement("div");
    contentOne.className = "contentOne";
    contentOne.innerText = library[i].title;
    console.log(library[i].title);
    const contentTwo = document.createElement("div");
    contentTwo.className = "contentTwo";
    contentTwo.innerText = library[i].author;
    const contentThree = document.createElement("button");
    contentThree.className = "contentThree";
    contentThree.innerText = library[i].read === true ? "read" : "not read";
    const contentFour = document.createElement("button");
    contentFour.className = "contentFour";
    contentFour.innerText = "delete";
    contentRow.append(contentOne);
    contentRow.append(contentTwo);
    contentRow.append(contentThree);
    contentRow.append(contentFour);
    contentContainer.append(contentRow);
    library[i].add = true;
  }
  readBtns = document.querySelectorAll(".contentThree");
  console.log(readBtns);
  readListener(readBtns);
  // deleteBtns = document.querySelectorAll(".contentFour");
  // deleteListener(deleteBtns);
}
// displayBooks();
