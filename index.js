
class BookLibrary {

  constructor() {
    this.store = [],
    this.borrowedBooks = [];
  }

  // methods to add book by admin
  add(book) {
    if (!book) throw new Error('Please select a book from the list of books');
    if (typeof book !== 'object') throw new Error('book must be an object');
    if (!book.title)
      throw new Error('Add book title');
    book.id = this.store.length + 1
    this.store.push(book);
    return book;
  }

  // method to find book
  findById(bookId, arr = this.store) {
    if (typeof bookId !== 'number') throw new Error('book id must be a number');
    const book = arr.find(x => x.id === bookId);
    if (!book) throw new Error('book was not found');
    return book;
  }

  // method to borrow book by user
  borrow(bookId) {
    const book = this.findById(bookId, this.store);
    const bookIndex = this.store.indexOf(book);
    this.store.splice(bookIndex, 1)
    this.borrowedBooks.push(book)
    return book;
  }

  // method to return borrowed book
  returnBook(bookId) {
    const book = this.findById(bookId, this.borrowedBooks);
    const bookIndex = this.borrowedBooks.indexOf(book);
    this.borrowedBooks.splice(bookIndex, 1)
    this.store.push(book)
    return book;
  }

  // method to remove book
  removeById(bookId, arr = this.store) {
    const book = this.findById(bookId, arr);
    const bookIndex = arr.indexOf(book);
    arr.splice(bookIndex, 1)
    return book;
  }
}

// export the class
module.exports = new BookLibrary();