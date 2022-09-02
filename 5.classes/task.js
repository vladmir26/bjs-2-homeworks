class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
      this.state = this.state * 1.5;
    } 

    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    } 

    get state () {
      return this._state;
    }

    }

class Magazine extends PrintEditionItem {
      constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
      }
    }

class Book extends PrintEditionItem {
      constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
        
    }
  }

class NovelBook extends Book {
    constructor (name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "detective";
  }
} 

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
   
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
   let foundBook = this.books.find((book) => book[type] === value);

   if (foundBook) {
      return foundBook;
   } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let foundBookName = this.books.find((book) => book.name === bookName);
    let foundIndexBookName = this.books.findIndex((foundBookName) => foundBookName === bookName);

    if (foundBookName) {
      this.books.splice(foundIndexBookName, 1);
      return foundBookName;
    } else {
      return null;
    }
    
  }
}

// Задача № 3 

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  

}