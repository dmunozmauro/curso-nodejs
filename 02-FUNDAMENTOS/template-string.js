let nombre = 'Deadpool';
let nombreReal = 'Wade Winston';

let nombreCompleto = nombre + ' ' + nombreReal;
let nombreTemplate = `${nombre} ${nombreReal}`;

console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} es: ${nombreReal}`;
}

console.log(`El nombre de ${getNombre()}`);