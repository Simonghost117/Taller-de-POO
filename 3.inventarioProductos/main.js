// Inventario de Productos
// Define una clase Producto con atributos como nombre,
//  precio y cantidadEnStock.
//   Luego crea una clase Electrodomestico que herede de Producto y agregue un atributo adicional marca. 
//  Implementa un arreglo para almacenar varios productos y un método que liste aquellos que tienen una cantidad en stock menor a 10.

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, stock, marca) {
        super(nombre, precio, stock);
        this.marca = marca;
    }
}

let inventario = [];

let check = document.querySelector('#check');
let inputElectrodomestico = document.querySelector('#marca');
let checkOn = false;


check.addEventListener('change', function () {
    if (check.checked) {
        inputElectrodomestico.disabled = false;
        checkOn = false;
        document.querySelector('#checkText').textContent = 'Electrodoméstico';
    } else {
        inputElectrodomestico.disabled = true;
        checkOn = true;
        document.querySelector('#checkText').textContent = 'Producto';
    }
});


document.querySelector('#guardarProducto').addEventListener('click', function () {
    let nombreInput = document.querySelector('#productName').value;
    let precioInput = document.querySelector('#precioProducto').value;
    let stockInput = document.querySelector('#stock').value;
    let marcaInput = document.querySelector('#marca').value;

    if (!isNaN(stockInput) && !isNaN(precioInput)) {
        if (checkOn) { 
            if (nombreInput && precioInput && stockInput && marcaInput) {
                let nuevoElectrodomestico = new Electrodomestico(nombreInput, precioInput, parseInt(stockInput), marcaInput);
                inventario.push(nuevoElectrodomestico);
            } else {
                alert('Por favor, completa todos los campos antes de agregar el electrodoméstico.');
            }
        } else { 
            if (nombreInput && precioInput && stockInput) {
                let nuevoProducto = new Producto(nombreInput, precioInput, parseInt(stockInput));
                inventario.push(nuevoProducto);
            } else {
                alert('Por favor, completa todos los campos antes de agregar el producto.');
            }
        }

        
        document.querySelector('#productName').value = '';
        document.querySelector('#precioProducto').value = '';
        document.querySelector('#stock').value = '';
        document.querySelector('#marca').value = '';
    } else {
        alert('El precio y el stock deben ser números válidos.');
    }
});


document.querySelector('#listarBajoStock').addEventListener('click', function () {
    let listaBajoStock = document.querySelector('#listaBajoStock');
    listaBajoStock.innerHTML = ""; 

    inventario.forEach(function (producto) {
        if (producto.stock < 10) {
            let li = document.createElement('li');
            if (producto instanceof Electrodomestico) {
                li.textContent = `${producto.nombre} (Electrodoméstico) - Precio: $${producto.precio}, Stock: ${producto.stock}, Marca: ${producto.marca}`;
            } else {
                li.textContent = `${producto.nombre} - Precio: $${producto.precio}, Stock: ${producto.stock}`;
            }
            listaBajoStock.appendChild(li);
        }
    });
});
