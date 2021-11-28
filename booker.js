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

// Add books to the store
bookList.forEach((book) => {
  BookLibrary.add(book)
})


let choice = true;
function userControl() {
  while (choice) {
    console.log(' 1 to Borrow book\n', '2 to return borrowed book\n', '3 to see borrowed book\n', '4 to quite')
    let userChoice = prompt('');
    switch (+userChoice) {
      case 1:
        // list all books in the store
        console.log("________________________________________");
        bookList.map((book, index) => {
          console.log(index, '->\t', book.title);
          console.log("________________________________________");
        })
        console.log("=========================================");
        
        let input1 = prompt("Enter book Id to borrow: ")
        let borrowedB = BookLibrary.borrow(parseInt(input1));
        console.log(` You Borrowed ${borrowedB.title}`)
        console.log("________________________________________");
        break;
      case 2:
        let input2 = prompt("Enter book Id to return: ")
        let returnB = BookLibrary.returnBook(parseInt(input2));
        console.log(`You have returned Book ${returnB.title}`)
        console.log("________________________________________");
        break;
      case 3:
        console.log('_____The books you have borrowed:_____')
        BookLibrary.borrowedBooks.forEach((book) => {
          console.log('\t', book.title);
        })
        console.log("________________________________________");
        break;
      case 4:
        console.log("Bye");
        console.log("________________________________________");
        choice = false;
    }
  }
}

userControl();









