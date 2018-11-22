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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`no existe un empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
       callback(`No se encontró salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }  
}

getEmpleado(4, (err, empleado) => {
    if (err) { 
        return console.log(err); 
    }
    getSalario(empleado, (err,resp) => {
        if (err) { 
            return console.log(err); 
        } else {
            console.log(`el sueldo del empleado ${resp.nombre} es de: ${resp.salario}`)
        }
    })
    
});
