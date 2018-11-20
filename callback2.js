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

let salario = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 3000
}];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`no existe un empleado con el id ${id}`);
    } else {
        console.log(empleadoDB);
    }
}


let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        console.lo(`No se encontró saliar para el usuario ${empleado.nombre}`);
    } else {
        callback({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});


getSalario(empleado, (err, resp) => {
    if(err) {
        return console.log(err);
    } else{
        console.log("el salario es de +");
        
    }
});
