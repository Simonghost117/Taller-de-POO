import Animal from "./zoologico.js";

class Tigre extends Animal {
    rugir() {
      return `${this.nombre} el tigre ruge: ¡Roooaaar!`;
    }
  }
export default Tigre;