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
