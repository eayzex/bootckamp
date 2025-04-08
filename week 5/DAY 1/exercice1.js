function compareToTen(num) {
    return new Promise((resolve, reject) =>{
        if (num <= 10) {
            resolve("number is ok: "+  num);
            
        } else {
            reject("number is too big: "+ num);
        
        }

 });    
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error));
    