// Sistema de Transporte
// Define una clase Transporte con atributos como capacidad y tipoCombustible. Luego, crea subclases como Autobus y Bicicleta que hereden de Transporte. Agrega métodos específicos, como arrancar() para Autobus. Usa un arreglo para almacenar varios medios de transporte y recorre el arreglo ejecutando una acción específica según el tipo de transporte.
class Transporte{
    constructor(capacidad, tipoCombustible){
        this.capacidad = capacidad;
        this.tipoCombustible = tipoCombustible;
    }
}
class Autobus extends Transporte{
    constructor(capacidad, tipoCombustible){
        super(capacidad, tipoCombustible);
    }
    arracar(){
        return `El autobus esta arrancando. Capacidad: ${this.capacidad} Combustible: ${this.tipoCombustible} `
    }
}
class Bicicleta extends Transporte{
    constructor(capacidad, tipoCombustible){
        super(capacidad, tipoCombustible);
    }
    arracar(){
        return `La bicicleta esta arrancando. Capacidad: ${this.capacidad} Combustible: ${this.tipoCombustible} `
    }
}
class Almacen{
    constructor(){
        this.almacen = []
    }
    agregarTransporte(transporte){
        if(transporte instanceof Autobus || transporte instanceof Bicicleta){
            this.almacen.push(transporte);
            console.log('Se guardo correctamente el transporte')
        }else{
            console.log('No se guardo el transporte')
        }
    }
    listarTransporte(){
        return this.almacen;
    }
}

let almacen1 = new Almacen();

document.querySelector('#guardar').addEventListener('click', function(){
    let tipoInput = document.querySelector('#tipo').value;
    let capacidadInput = document.querySelector('#capacidad').value;
    let combustibleInput = document.querySelector('#tipoCombustible').value;

    let transporte;

    if(tipoInput === 'Autobus'){
        transporte = new Autobus(capacidadInput, combustibleInput)
    } else if (tipoInput === 'Bicicleta'){
        transporte = new Bicicleta(capacidadInput, combustibleInput)
    }
    almacen1.agregarTransporte(transporte);
})

document.querySelector('#mostrar').addEventListener('click', function(){
    let listado = document.querySelector('#listado');
    listado.innerHTML = '';
    let miTransporte = almacen1.listarTransporte();

    miTransporte.forEach(function (transporte){
        let lista = document.createElement('li');
        if(transporte instanceof Autobus){
            lista.textContent = transporte.arracar();
        } else if(transporte instanceof Bicicleta){
            lista.textContent = transporte.arracar();
        }
        listado.appendChild(lista)
    })
})