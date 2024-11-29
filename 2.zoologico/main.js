import Elefante from  "./componentes/elefante.js";
import Leon from "./componentes/leon.js";
import Tigre from "./componentes/trigre.js";
class Zoologico {
    constructor(nombre, direccion) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.animales = [];
    }
  
    agregarAnimal(animal) {
      if (animal instanceof Leon || animal instanceof Tigre || animal instanceof Elefante) {
        this.animales.push(animal);
      } else {
        alert('Solo puedes agregar leones, tigres o elefantes al zoológico.');
      }
    }
  
    obtenerAnimales() {
      return this.animales;
    }
  
    listarAnimales() {
      return this.animales.map(animal => {
        if (animal instanceof Leon) {
          return animal.rugir();
        } else if (animal instanceof Elefante) {
          return animal.trompetear();
        } else if (animal instanceof Tigre) {
          return animal.rugir();
        }
      });
    }
  }

let centralPark = new Zoologico('Zoologico de Central Park','New York, NY 10021');

document.querySelector('#guardarAnimal').addEventListener('click', function () {
    let nombreInput = document.querySelector('#nombreAnimal').value;
    let especieInput = document.querySelector('#especieAnimal').value;
  
    let nuevoAnimal;
  
    if (especieInput.toLowerCase() === 'leon') {
      nuevoAnimal = new Leon(nombreInput, especieInput);
    } else if (especieInput.toLowerCase() === 'tigre') {
      nuevoAnimal = new Tigre(nombreInput, especieInput);
    } else if (especieInput.toLowerCase() === 'elefante') {
      nuevoAnimal = new Elefante(nombreInput, especieInput);
    } else {
      alert('Solo puedes agregar leones, tigres o elefantes.');
      return;
    }
  
    centralPark.agregarAnimal(nuevoAnimal);
  
  
    document.querySelector('#nombreAnimal').value = '';
    document.querySelector('#especieAnimal').value = '';
  });
  
  
  document.querySelector('#mostrar').addEventListener('click', function () {
    let listaAnimales = document.querySelector('#listaAnimales');
  
    listaAnimales.innerHTML = '';
  
    centralPark.listarAnimales().forEach(function(sonido) {
      let li = document.createElement('li');
      li.textContent = sonido;
      listaAnimales.appendChild(li);
    });
  });