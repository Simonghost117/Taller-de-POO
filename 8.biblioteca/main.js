// Biblioteca
// Crea una clase base Libro con atributos como titulo y autor. Luego, crea clases derivadas como LibroDigital y LibroFisico, cada una con atributos adicionales específicos. Utiliza un arreglo para almacenar libros y un método para listar todos los libros de un autor específico.
class Libro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}
class LibroDigital extends Libro{
    constructor(titulo, autor, paginas){
        super(titulo, autor);
        this.paginas = paginas;
    }
    info(){
        return `Libro digital: ${this.titulo}, autor: ${this.autor}, cantidad de paginas: ${this.paginas}`
    }
}
class LibroFisico extends Libro{
    constructor(titulo, autor, paginas){
        super(titulo, autor);
        this.paginas = paginas;
    }
    info(){
        return `Libro fisico: ${this.titulo}, autor: ${this.autor}, cantidad de paginas: ${this.paginas}`
    }
}
class Almacen{
    constructor(){
        this.libreria = [];
        this.fisico = [];
        this.digital = [];
    }
    agregarLibro(libro){
        if(libro instanceof LibroFisico){
            this.fisico.push(libro);
            this.libreria.push(libro);
            console.log('se agrego correctamente el libro')
        }else if(libro instanceof LibroDigital){
            this.digital.push(libro);
            this.libreria.push(libro);
            console.log('se agrego correctamente el libro')
        }else{
            console.log('No se logro agregar el libro')
        }
    }
    listarLibros(){
        return this.libreria;
    }
    buscarLibros(nombre){
        return this.libreria.filter(libro => libro.autor === nombre);
       
    }
}

let libreria1 = new Almacen();

document.querySelector('#guardar').addEventListener('click', function(){
    let tipoInput = document.querySelector('#tipo').value;
    let tituloInput = document.querySelector('#titulo').value;
    let autorInput = document.querySelector('#autor').value;
    let paginaInput = document.querySelector('#paginas').value;

    let libro;

    if(tipoInput === 'LibroDigital'){
        libro = new LibroDigital(tituloInput, autorInput, paginaInput)
    }else if(tipoInput === 'LibroFisico'){
        libro = new LibroFisico(tituloInput, autorInput, paginaInput)
    }
    libreria1.agregarLibro(libro)
})

document.querySelector('#buscar').addEventListener('click', function(){
    let autorBuscar = document.querySelector('#autorBuscar').value;
    let librosAutor = document.querySelector('#librosAutor');
    librosAutor.innerHTML = '';
    let miLibreria = libreria1.buscarLibros(autorBuscar);

    miLibreria.forEach(function (libro){
        let lista = document.createElement('li');
        // if (digital.autorInput === autorBuscar) {
        //     lista.textContent = digital.info();
        //  } else if (fisico.autorInput === autorBuscar) {
        //     lista.textContent = fisico.info();
        //  }
        lista.textContent = libro.info();
        librosAutor.appendChild(lista);
    })
})

document.querySelector('#mostrar').addEventListener('click', function(){
    let listado = document.querySelector('#listado');
    listado.innerHTML = '';
    let miListado = libreria1.listarLibros();

    miListado.forEach(function (libro){
        let lista = document.createElement('li');
        if (libro instanceof LibroDigital) {
            lista.textContent = libro.info();
         } else if(libro instanceof LibroFisico){
            lista.textContent = libro.info();
         }
         listado.appendChild(lista);
    })
})