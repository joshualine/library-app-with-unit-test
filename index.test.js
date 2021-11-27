const bookLender = require('./index');
describe('Add book by admin', () => {
  it('Throw error if book is not an object', () => {
    expect(() => { bookLender.add('Engineering maths') }).toThrow();
  })
  it('Throw an error if book has no title property', () => {
    const args = [{}, { name: 'a' }];
    args.forEach(a => {
      expect(() => { bookLender.add(a) }).toThrow();
    })
  })
  it('Throw error if book title property is an eempty string', () => {
    const args = [null, undefined, NaN, '', 0, false];
    args.forEach(a => {
      expect(() => { bookLender.add({ title: a }) }).toThrow();
    })
  })
  it('Return an object with Id and Title', () => {
    const result = bookLender.add({ id: 1, title: 'Engineering maths' });
    expect(result).toMatchObject({ id: bookLender.store.length, title: 'Engineering maths' })
  })
  it('Throw error if the book library is empty', () => {
    const args = [null, undefined, NaN, '', 0, false];
    args.forEach(a => {
      expect(() => { bookLender.add(a) }).toThrow();
    })
  })
})

describe('Find book', () => {
  it('Throw an error if user input a bookId that is not a number', () => {
    expect(() => { bookLender.findById('a') }).toThrow();
  })
  it('Throw an error if book with given Id cannot be found', () => {
    expect(() => { bookLender.findById(225) }).toThrow();
  })
  it('Return a book with an id and title', () => {
    const result = bookLender.findById(1);
    expect(result).toMatchObject({ id: 1, title: 'Engineering maths' })
  })
})

describe('Borrow book', () => {
  it('Throw error if book is not found (more than the available)', () => {
    expect(() => { bookLender.borrow(225) }).toThrow();
  })
  it('Throw error if bookId is not found (negative bookId)', () => {
    expect(() => { bookLender.borrow(-1) }).toThrow();
  })
  it('Move a book with given id from store to borrowed books', () => {
    const result = bookLender.borrow(1);
    expect(result).toMatchObject({ id: 1, title: 'Engineering maths' })
    expect(bookLender.store).not.toEqual(expect.arrayContaining([result]));
    expect(bookLender.borrowedBooks).toEqual(expect.arrayContaining([result]));
  })
})

describe('Return borrowed book', () => {
  it('Throw error if book is not found (more than the available)', () => {
    expect(() => { bookLender.returnBook(225) }).toThrow();
  })
  it('Throw error if bookId is not found (negative bookId)', () => {
    expect(() => { bookLender.returnBook(-1) }).toThrow();
  })
  it('Move a book with given id from borrowed books back the to store', () => {
    const result = bookLender.returnBook(1);
    expect(result).toMatchObject({ id: 1, title: 'Engineering maths' })
    expect(bookLender.store).toEqual(expect.arrayContaining([result]));
    expect(bookLender.borrowedBooks).not.toEqual(expect.arrayContaining([result]));
  })
})

describe('Remove book', () => {
  it('Throw error if book is not found (more than the available)', () => {
    expect(() => { bookLender.removeById(225) }).toThrow();
  })
  it('Throw error if bookId is not found (negative bookId)', () => {
    expect(() => { bookLender.removeById(-1) }).toThrow();
  })
  it('Remove a book with given id', () => {
    const result = bookLender.removeById(1);
    expect(result).toMatchObject({ id: 1, title: 'Engineering maths' })
    expect(bookLender.store).not.toEqual(expect.arrayContaining([result]));
  })
})