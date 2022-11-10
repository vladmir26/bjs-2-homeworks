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
     if ((a + b >= c) && (a + c >= b) && (b + c >= a)) {
          throw new Error("Треугольник с такими сторонами не существует");
     }
     
     this.a = a;
     this.b = b;
     this.c = c;
}

getPerimetr() {
     let perimetr = this.a + this.b + this.c;
     return perimetr;
}

getArea() {
     let p = this.getPerimetr() / 2;
     let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
     area = area.toFixed(3);
     return area;
}
}

function getTriangle(a, b, c) { 
    try {
       return new Triangle(a, b, c);
    } catch(err) {
        return {
            getPerimetr() {
                return 'Ошибка! Треугольник не существует';
            }, 
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}


