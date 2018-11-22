let empleados = [{
    id: 1,
    nombre: 'Diego'
}, {
    id: 2,
    nombre: 'Isabel'
}, {
    id: 3,
    nombre: 'Victoria'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 3000
}];

let getEmpleado = async (id) => {
    let lista_empleado = empleados.find(request => request.id === id);
    if (!lista_empleado) {
        throw new Error("No existe la ID: " + id);
    } else {
        return lista_empleado;
    }
}

let getSalario = async (empleado) => {
    let listaSalario = salarios.find(requestSalario => requestSalario.id === empleado.id);
    if (!listaSalario) {
        throw new Error("No existe salario para el usuario " + empleado.nombre);
    } else {
        return {
            nombre: empleado.nombre,
            salario: listaSalario.salario,
            id: empleado.id
        };
    }
}

// getEmpleado(3).then(empleado => {
//     return getSalario(empleado);
// }).then(resp => {
//     // console.log("El salario de: " + resp.nombre + " es de: " + resp.salario);
// }).catch(err => {
//     // console.log(err)
// })

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return resp.nombre + ' tiene un salario de: ' + resp.salario;
}

getInformacion(1).then(resp => console.log(resp)).catch((e) => {
    console.log(e);

})
