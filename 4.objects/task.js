function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
      this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
      this.marks = marks;
    } else {
      const combinedArray = this.marks.concat(marks);
      this.marks = combinedArray;
    }
}

Student.prototype.getAverage = function () {
  let sum = 0;

  for (let i of this.marks) {
    sum += i;
  }
  let avg = sum / this.marks.length;

  return avg;
}

Student.prototype.exclude = function (reason) { 
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}

const student = new Student("Alex", "m", 28);
