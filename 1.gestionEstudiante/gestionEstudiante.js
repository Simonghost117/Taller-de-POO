// Ejercicio 1: Gestión de Estudiantes
// Crea una clase Persona con atributos básicos como nombre, edad y un 
// método saludar(). Luego crea una clase Estudiante que herede de Persona y agregue un atributo calificaciones (un arreglo).
//  Añade métodos para agregar una calificación y calcular el promedio del estudiante.


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(in_nombre) {
        this.nombre = in_nombre;
    }
    getEdad() {
        return this.edad;

        
    }
    setEdad(in_edad) {
        this.edad = in_edad;
    }
    saludar(){
        return `Hola!`;
    }

}//Fin class Persona

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.notas = [];
        this.promedio1 = 0;
    }

    agregarNota(nota) {
        this.notas.push(nota);
        return `Nota agregada!`;
    }

    promedioEstudiante() {
        let notaFinal = 0;
        this.notas.forEach((nota) => {
            notaFinal += nota;
        });
        const promedio = notaFinal / this.notas.length;
        this.promedio1 = promedio;
    }

}//fin class Estudiante

let content = document.querySelector('#content');

function agregarEstudiante() {
    content.innerHTML = `
        <label for='nombreEstudiante'>Ingresa el nombre del estudiante</label><br>
        <input type='text' id='nombreEstudiante'><br>
        <label for='edadEstudiante'>Ingresa la edad del estudiante</label><br>
        <input type='text' id='edadEstudiante'><br>
        <button onclick="guardarEstudiante()">Guardar</button>`;

}//Fin funcion agregar estudiante

function agregarNotas() {
    content.innerHTML = `
        <label for='buscarEstudiante'>Ingresa el nombre del estudiante:</label><br><br>
        <input type='text' id='buscarEstudiante'><br>
        <button onclick='buscarEstudiante()'>Buscar</button>`;

}//Fin funcion para ingresar al modulo agregar notas

let listaEstudiantes = [];

function guardarEstudiante() {
    let nombre = document.querySelector('#nombreEstudiante').value;
    let edad = document.querySelector('#edadEstudiante').value;
  
    let estudiante = new Estudiante(nombre, edad);
    listaEstudiantes.push(estudiante);
    document.querySelector('#nombreEstudiante').value = '';
    document.querySelector('#edadEstudiante').value = '';
    alert(`Estudiante guardado correctamente`)

}//Fin de funcion para guardar estudiantes

function buscarEstudiante() {
    let nombreBuscar = document.querySelector('#buscarEstudiante').value;
    let estudianteEncontrado = listaEstudiantes.find(estudiante => estudiante.nombre === nombreBuscar);

    if (estudianteEncontrado) {
        content.innerHTML = `
            <label for='nota'>Ingrese la nota</label><br>
            <input type='text' id='nota'><br>
            <button onclick="guardarNota('${nombreBuscar}')">Guardar</button>`;
    } else {
        alert( 'Estudiante no encontrado');
    }

}//Fin de funcion para buscar y redirigir a guardar notas

function guardarNota(nombreBuscar) {
    let not = document.querySelector('#nota').value;
    let estudianteEncontrado = listaEstudiantes.find(estudiante => estudiante.nombre === nombreBuscar);
    let nota = parseFloat(not);
    if (estudianteEncontrado ) {
        

        // Validamos si es un número y si está entre 0 y 100
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            estudianteEncontrado.agregarNota(nota);
            alert(`Nota guardada para ${estudianteEncontrado.nombre}: ${nota}`);
        } else {
            alert('Ingresa una nota válida entre 0 y 10.');
        }
        document.querySelector('#nota').value = "";
    } else {
        alert('Estudiante no encontrado');
    }
        

    }
    

//fin funcion para guardar notas en los objetos


function promedio(){
    content.innerHTML = `
        <label for='buscarEstudiante'>Ingresa el nombre del estudiante:</label><br><br>
        <input type='text' id='buscarEstudiante'><br>
        <button onclick='sacarPromedio()'>Buscar</button>`;

}//fin de funcion para ingresar al modulo sacar promedio

function sacarPromedio(){

    let nombreBuscar = document.querySelector('#buscarEstudiante').value;
    let estudianteEncontrado = listaEstudiantes.find(estudiante => estudiante.nombre === nombreBuscar);

    if (estudianteEncontrado) {
        estudianteEncontrado.promedioEstudiante(); 
        content.innerHTML =
         `<h1>Estudiante ${nombreBuscar}</h1>
        <p>Tiene un promedio de:${estudianteEncontrado.promedio1}</p>
        `;
    } else {
        alert( 'Estudiante no encontrado');
    }

}//fin de funcion para sacar e imprimir el promedio del estudiante
