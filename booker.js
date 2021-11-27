const BookLibrary = require('./index');
const prompt = require('prompt-sync')();

const bookList = [
  {
    title: "Engineering text",
    author: "John Doe",
    isbn: "652013"
  },
  {
    title: "Dangers of computer programming",
    author: "Jane James",
    isbn: "781997",
  },
  {
    title: "Learnable21",
    author: "Jerry Joe",
    isbn: "342021",
  },
  {
    title: "King Kong",
    author: "Elliot Kings",
    isbn: "542003",
  },
  {
    title: "Animal Science",
    author: "Emma Goat",
    isbn: "522001",
  },
  {
    title: "Genesys story book",
    author: "Saint John",
    isbn: "232021",
  },
  {
    title: "Bloody computer",
    author: "Ada James",
    isbn: "632011",
  },
  {
    title: "Catch fire",
    author: "Ben More",
    isbn: "761995",
  },
  {
    title: "New man",
    author: "Edwin Grace",
    isbn: "892001",
  },
  {
    title: "Engineering maths",
    author: "Jonah Job",
    isbn: "902019",
  },
  {
    title: "Physics 101",
    author: "Steve Job",
    isbn: "781997",
  },
  {
    title: "Design pattern 101",
    author: "Mark Stephen",
    isbn: "562021",
  },
];

console.log(' 1 to Borrow book\n', '2 to return borrowed book\n', '3 to see borrowed book\n')
let input = prompt(" ");
if(input === '1') {
  // list all books in the store
  let see = bookList.forEach((book) => {
    const booksInStore = BookLibrary.add(book)
    console.log(booksInStore.id, booksInStore.title);
  })

  let bookId = prompt("Enter book Id to borrow: ")
  let borrowedB = BookLibrary.borrow(parseInt(bookId));
  console.log(`you have borrowed: ${borrowedB.title}\n`)

  const input2 = prompt('borrow another book: ')
  const borrowedB2 = BookLibrary.borrow(parseInt(input2));
  console.log(`you have borrowed: ${borrowedB2.title}\n`)

  console.log("============ List of Borrowed Book ==============")
  const test2 = BookLibrary.borrowedBooks.forEach((book) => {
    console.log('\t',book.title);
  })


} else if(input === '2') {
  // list all books in the borrowed shelf if there is any
  // else indicate that the list is empty
  const test22 = BookLibrary.borrowedBooks.forEach((book) => {
    console.log(book.title);
  })
  
} else if(input === 3) {
  // list all books in the borrowed shelf if there is any
  // else indicate that the list is empty
} else {
  // Ask the user to Input a valid number
}








