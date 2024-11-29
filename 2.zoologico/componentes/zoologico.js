// Ejercicio 2: Zoológico
// Crea una clase base llamada Animal con atributos como nombre y especie. 
// Luego, crea clases derivadas como Leon, Elefante y Tigre que hereden de Animal.
// Cada clase derivada debe tener un método específico (por ejemplo, rugir() para Leon).
// Utiliza un arreglo para almacenar varios animales y crea un método para recorrerlos y hacer que cada uno ejecute su acción específica.
class Animal {
    constructor(nombre, especie){
      this.nombre = nombre;
      this.especie = especie;
    }
  
    mostrarInformacion() {
      return `Nombre: ${this.nombre}, Especie: ${this.especie}`;
    }
  }
  

export default Animal;