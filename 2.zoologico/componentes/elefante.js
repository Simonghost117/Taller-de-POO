import Animal from "./zoologico.js";

class Elefante extends Animal {
    trompetear() {
      return `${this.nombre} el elefante trompetea: ¡Prrruuu!`;
    }
  }
export default Elefante; 