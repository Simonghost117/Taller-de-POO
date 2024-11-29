import Animal from "./zoologico.js";

class Leon extends Animal {
    rugir() {
      return `${this.nombre} el león ruge: ¡Roaaar!`;
    }
  }
export default Leon;