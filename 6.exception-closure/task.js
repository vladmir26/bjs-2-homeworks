function parseCount(a) {
   
    let parse = Number.parseInt(a); 

       if (Number.parseInt(a) === NaN) {
         let error = new Error("Невалидное значение");
         throw error;
    }
 return parse;
}

