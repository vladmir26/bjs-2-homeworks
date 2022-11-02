function parseCount(a) {
   
    let parse = Number.parseInt(a); 

    if (Object.is(parse,NaN)) {
         let error = new Error("Невалидное значение");
         throw error;
    }

 return parse;
}


function validateCount(b) {

try {

     let parse = parseCount(b);

if(parse) {
     return parse;
   }
}
catch (e) {
  
     return e;
}
} 

// Задача №2 

class Triangle {
    constructor (a, b, c) {
     this.a = a;
     this.b = b;
     this.c = c;
     this.firstSum = this.a + this.b;
     this.secondSum = this.a + this.c;
     this.thirdSum = this.b + this.c;
}

getPerimetr() {
     let perimetr = this.a + this.b + this.c;

     if (this.firstsum < this.c) {
          throw new Error("Треугольник с такими сторонами не существует");
       }

     return perimetr;
}

 
       
}

