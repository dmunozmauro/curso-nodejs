/**
 * Async Await
 */

// let getNombre = async () => {
//     throw new Error('No existe un nombre para ese usuario');
//     return 'Diego';
// }


let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Diego');
        }, 3000);
    });
}

let getSaludo = async () => {
    let nombre = await getNombre();
    return 'Hola ' + nombre;
}

getSaludo().then(msj => {
    console.log(msj);
});