
class Empleado {
    constructor(nombre, sueldo) {
      this.nombre = nombre;
      this.sueldo = sueldo;
    }
  
    mostrarInformacion() {
      return `Nombre: ${this.nombre}, Sueldo por hora: $${this.sueldo}`;
    }
  }
  
  
  class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, sueldo) {
      super(nombre, sueldo);
    }
  
    calcularSueldo() {
      return this.sueldo * 20; 
    }
  
    mostrarInformacion() {
      return `Nombre: ${this.nombre}, Sueldo total por 20 horas: $${this.calcularSueldo()}`;
    }
  }
  

  class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, sueldo) {
      super(nombre, sueldo);
    }
  
    calcularSueldo() {
      return this.sueldo * 40; 
    }
  
    mostrarInformacion() {
      return `Nombre: ${this.nombre}, Sueldo total por 40 horas: $${this.calcularSueldo()}`;
    }
  }
  
  
  class Empresa {
    #empleados = []; 
  
    agregarEmpleado(empleado) {
      if (empleado instanceof Empleado) {
        this.#empleados.push(empleado);
        console.log(`Empleado agregado: ${empleado.nombre}`);
      } else {
        console.log('Solo se pueden agregar instancias de la clase Empleado.');
      }
    }
  
    obtenerEmpleadosPorTipo(tipo) {
      return this.#empleados.filter(empleado => empleado instanceof tipo);
    }
  
    listarEmpleados(tipo) {
      const empleadosFiltrados = this.obtenerEmpleadosPorTipo(tipo);
      return empleadosFiltrados.length > 0
        ? empleadosFiltrados.map(empleado => empleado.mostrarInformacion()).join('\n')
        : 'No hay empleados de este tipo.';
    }
  }
  
  let miEmpresa = new Empresa();
  let check = document.querySelector("#check");
  let checkOn = false;
  
  
  check.addEventListener("change", function () {
    checkOn = check.checked;
    if (checkOn) {
      document.querySelector("#tipoEmpleado").textContent = "Listar empleados de tiempo completo";
      document.querySelector("#checkText").textContent = "Empleados de tiempo completo";
    } else {
      document.querySelector("#tipoEmpleado").textContent = "Listar empleados de medio tiempo";
      document.querySelector("#checkText").textContent = "Empleados de medio tiempo";
    }
  });
  
  
  document.querySelector('#guardarEmpleado').addEventListener('click', function () {
    let nombreInput = document.querySelector('#nombreEmpleado').value;
    let sueldoInput = document.querySelector('#sueldoHora').value;
  
    if (nombreInput && sueldoInput && !isNaN(sueldoInput)) {
      let nuevoEmpleado;
  
      if (checkOn) { 
        nuevoEmpleado = new EmpleadoTiempoCompleto(nombreInput, parseFloat(sueldoInput));
      } else {
        nuevoEmpleado = new EmpleadoMedioTiempo(nombreInput, parseFloat(sueldoInput));
      }
  
      miEmpresa.agregarEmpleado(nuevoEmpleado);
  
     
      document.querySelector('#nombreEmpleado').value = '';
      document.querySelector('#sueldoHora').value = '';
    } else {
      alert('Por favor, completa todos los campos con información válida.');
    }
  });
  
  
  document.querySelector('#listarEmpleado').addEventListener('click', function () {
    let listaPadre = document.querySelector('#listaEmpleados');
    
    listaPadre.innerHTML = ''; 
  
    let tipoEmpleado = checkOn ? EmpleadoTiempoCompleto : EmpleadoMedioTiempo;
    let empleadosList = miEmpresa.listarEmpleados(tipoEmpleado);
  
    if (empleadosList !== 'No hay empleados de este tipo.') {
      empleadosList.split('\n').forEach(function (empleadoInfo) {
        let li = document.createElement('li');
        li.textContent = empleadoInfo;
        listaPadre.appendChild(li);
      });
    } else {
      listaPadre.textContent = empleadosList; 
    }
  });
  