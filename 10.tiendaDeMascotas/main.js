//  Tienda de Mascotas
// Crea una clase base Mascota con atributos como nombre y raza. Luego, crea clases derivadas como Perro y Gato, agregando métodos específicos para cada animal, como ladrar() y maullar(). Utiliza un arreglo para almacenar varias mascotas y un método para hacer que cada mascota realice su acción.
class Mascota{
    constructor(nombre, raza){
        this.nombre  = nombre;
        this.raza = raza;
    }
}
class Perro extends Mascota{
    constructor(nombre, raza){
        super(nombre, raza);
    }
    ladrar(){
        return `El perro ${this.nombre} de raza ${this.raza}, esta ladrando.`
    }
}
class Gato extends Mascota{
    constructor(nombre, raza){
        super(nombre, raza);
    }
    maullar(){
        return `El gato ${this.nombre} de raza ${this.raza}, esta maullando.`
    }
}
class Almacen{
    constructor(){
        this.almacen = [] 
    }
    agregarMacota(mascota){
        if(mascota instanceof Perro || mascota instanceof Gato){
            this.almacen.push(mascota);
            alert(`La mascota se agrego correctamente`)
        } else {
            alert('No se logro agregar la mascota')
        }
    }
    listarMascotas(){
        return this.almacen;
    }
}

let almacen1 = new Almacen();

document.querySelector('#guardar').addEventListener('click', function(){
    let tipoInput = document.querySelector('#tipo').value;
    let nombreInput = document.querySelector('#nombre').value;
    let razaInput = document.querySelector('#raza').value;

    let mascota;

    if(tipoInput === 'Perro'){
        mascota = new Perro(nombreInput, razaInput)
    } else if(tipoInput === 'Gato'){
        mascota = new Gato(nombreInput, razaInput)
    }
    almacen1.agregarMacota(mascota);
})

document.querySelector('#mostrar').addEventListener('click', function(){
    let listado = document.querySelector('#listado');
    listado.innerHTML = '';
    let misMascotas = almacen1.listarMascotas();

    misMascotas.forEach(function (mascota){
        let lista = document.createElement('li');

        if(mascota instanceof Perro){
            lista.textContent = mascota.ladrar();
        } else if(mascota instanceof Gato){
            lista.textContent = mascota.maullar();
        }
        listado.appendChild(lista);
    })
})