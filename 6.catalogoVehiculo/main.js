// Catálogo de Vehículos
// Crea una clase base Vehiculo con atributos como marca, modelo y año. Luego, crea clases derivadas como Auto y Moto que hereden de Vehiculo. Agrega métodos específicos a cada clase, como conducir() en Auto. Usa un arreglo para almacenar vehículos y crea un método que los liste según su tipo.

class Vehiculo{
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
}
class Auto extends Vehiculo{
    constructor(marca, modelo,año){
        super(marca, modelo, año)
    }
    conducir(){
        return `El auto es facil de conducir`
    }
    info(){
        return `El auto de marca ${this.marca}, modelo ${this.modelo} del año ${this.año}`
    }
}
class Moto extends Vehiculo{
    constructor(marca, modelo,año){
        super(marca, modelo, año)
    }
    conducir(){
        return `La moto es facil de conducir`
    }
    info(){
        return `La moto de marca ${this.marca}, modelo ${this.modelo} del año ${this.año}`
    }
}
class Catalogo{
    constructor(){
        this.moto = [];
        this.auto = [];
    }
    agregarVehiculo(vehiculo){
        if(vehiculo instanceof Moto){
            this.moto.push(vehiculo);
            console.log('se agrego correctamente el vehiculo a la seccion de motos')
        }else if(vehiculo instanceof Auto){
            this.auto.push(vehiculo);
            console.log('se agrego correctamente el vehiculo a la seccion de autos')
        }
    }
    listarMotos(){
        return this.moto;
    }
    listarAutos(){
        return this.auto;
    }
}

let catalogo1 = new Catalogo();

document.querySelector('#guardar').addEventListener('click', function(){
    let tipoInput = document.querySelector('#tipo').value;
    let marcaInput = document.querySelector('#marca').value;
    let modeloInput = document.querySelector('#modelo').value;
    let añoInput = document.querySelector('#año').value;

    let movil;

    if(tipoInput === 'Moto'){
        movil = new Moto(marcaInput, modeloInput, añoInput)
    }else if(tipoInput === 'Auto'){
        movil = new Auto(marcaInput, modeloInput, añoInput)
    }
    catalogo1.agregarVehiculo(movil);
})


document.querySelector('#mostrarMotos').addEventListener('click', function(){
    let listado = document.querySelector('#listado');
    listado.innerHTML = '';
    let miListadoMotos = catalogo1.listarMotos();

    miListadoMotos.forEach(function (moto){
        let lista = document.createElement('li');
        if (moto instanceof Moto) {
            lista.textContent = moto.info();
         }
         listado.appendChild(lista);
    })
})
document.querySelector('#mostrarAutos').addEventListener('click', function(){
    let listado = document.querySelector('#listado');
    listado.innerHTML = '';
    let miListadoAutos = catalogo1.listarAutos();

    miListadoAutos.forEach(function (auto){
        let lista = document.createElement('li');
        if (auto instanceof Auto) {
            lista.textContent = auto.info();
         }
         listado.appendChild(lista);
    })
})