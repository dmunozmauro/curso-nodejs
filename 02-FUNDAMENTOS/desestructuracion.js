let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regenera',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());