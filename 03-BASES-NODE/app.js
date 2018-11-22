const fs = require('fs');

let base = 2;
let data= '';

for (let i = 1; i <= 10; i++) {
    data+=(base + ' X ' + i + ' = ' + base*i);
}

fs.writeFile('tabla.txt', 'Hola diego', (err) => {
    if(err) throw err;
    console.log('El archivo fue guardado');
});