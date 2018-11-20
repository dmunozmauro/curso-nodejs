/* // FUNCION NOMAL
function sumar(a, b) {
    return a + b;
}

// FUNCION DE FLECHA
let suma = (a, b) => a + b;
let saludar = () => 'Hola';
 */
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regenera',
    getNombre: () => {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};


console.log(deadpool.getNombre());