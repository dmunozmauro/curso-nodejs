let empleados = [{
    id: 1,
    nombre: 'diego'
}, {
    id: 2,
    nombre: 'isabel'
}, {
    id: 3,
    nombre: 'victoria'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 3000
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let lista_empleado = empleados.find(request => request.id === id);
        if (!lista_empleado) {
            reject("No existe la ID: " + id);
        } else {
            resolve(lista_empleado);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let listaSalario = salarios.find(requestSalario => requestSalario.id === empleado.id);
        if(!listaSalario) {
            reject("No existe salario para el usuario " + empleado.nombre);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: listaSalario.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(1).then(empleado => {
    getSalario(empleado).then(listaSalario => {
        console.log("El salario del empleado " + empleado.nombre + " es de: $" + listaSalario.salario);
    }, (err) => {
        console.log(err);
    }); 
    
}, (err) => {
    console.log(err);
});