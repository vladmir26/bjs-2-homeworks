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
    this.journal = {};
  }  

setSubject(subjectName) {
   this.subject = subjectName;
}

addMark(mark, subject) {
  
  if (mark < 1 || mark > 5) {
    console.error('Ошибка');
    return;
  }

  if (this.journal[subject]) {
    this.journal[subject].push(mark);
  } else {
    this.journal[subject] = [mark];
  }

} 

addMarks(...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
    const combinedArray = this.marks.concat(marks);
    this.marks = combinedArray;
  }
}

getAverage() {

  const allMarks = Object.values(this.journal);
  
  let sum = 0;

  for (let innerArray of allMarks) {
    let innerSum = 0;
    for (let i of innerArray) {
      innerSum += i;
    }
    let innerAvg = innerSum / innerArray.length;
    sum += innerAvg;
  }

  let avg = sum / allMarks.length;

  return avg;
}

getAverageBySubject(subject) {
  let sum = 0;

  for (let i of this.journal[subject]) {
    sum += i;
  }

  let avg = sum / this.journal[subject].length;

  return avg;
}


exclude(reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}

}

  

