class CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    info() {
        return `La cuenta ${this.numeroCuenta} tiene un saldo de ${this.saldo}`;
    }
}

class CuentaAhorros extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        super(numeroCuenta, saldo);
    }

    aplicarIntereses() {
        this.saldo = ((this.saldo * 2) / 100) + this.saldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
        } else {
            console.log(`El depósito debe ser mayor a cero`);
        }
    }

    retirar(cantidad) {
        if (cantidad <= this.saldo && cantidad > 0) {
            this.saldo -= cantidad;
        } else {
            console.log('Saldo insuficiente o cantidad inválida.');
        }
    }
}

class CuentaCorriente extends CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        super(numeroCuenta, saldo);
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
        } else {
            console.log(`El depósito debe ser mayor a cero`);
        }
    }

    retirar(cantidad) {
        if (cantidad <= this.saldo && cantidad > 0) {
            this.saldo -= cantidad;
        } else {
            console.log('Saldo insuficiente o cantidad inválida.');
        }
    }
}

class Banco {
    constructor() {
        this.cuentas = [];
    }

    agregarCuenta(cuenta) {
        if (cuenta instanceof CuentaAhorros || cuenta instanceof CuentaCorriente) {
            this.cuentas.push(cuenta);
            console.log('Se agregó correctamente la cuenta');
        } else {
            console.log('No se logró agregar la cuenta');
        }
    }

    listarCuentas() {
        return this.cuentas;
    }

    buscarCuenta(numeroCuenta) {
        return this.cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta);
    }
}

let banco1 = new Banco();

document.querySelector('#guardar').addEventListener('click', function () {
    let tipoCuentaInput = document.querySelector('#tipoCuenta').value;
    let numeroCuentaInput = document.querySelector('#numeroCuenta').value;
    let saldoInput = document.querySelector('#saldo').value;
    let cuenta;

    if (tipoCuentaInput === 'CuentaAhorros') {
        cuenta = new CuentaAhorros(numeroCuentaInput, parseFloat(saldoInput));
    } else if (tipoCuentaInput === 'CuentaCorriente') {
        cuenta = new CuentaCorriente(numeroCuentaInput, parseFloat(saldoInput));
    }
    banco1.agregarCuenta(cuenta);
});

document.querySelector('#mostrar').addEventListener('click', function () {
    let listadoCuentas = document.querySelector('#listadoCuentas');
    listadoCuentas.innerHTML = '';
    let miListado = banco1.listarCuentas();

    miListado.forEach(function (cuenta) {
        let lista = document.createElement('li');
        lista.textContent = cuenta.info();
        listadoCuentas.appendChild(lista);
    });
});

document.querySelector('#retirar').addEventListener('click', function () {
    let numeroCuentaInput = document.querySelector('#numeroCuenta').value;
    let cantidadRetiroInput = document.querySelector('#cantidadRetiro').value;
    let informacion = document.querySelector('#informacion');
    informacion.innerHTML = '';

    let cuenta = banco1.buscarCuenta(numeroCuentaInput);

    if (cuenta) {
        cuenta.retirar(parseFloat(cantidadRetiroInput));
        informacion.innerHTML = `De la cuenta ${numeroCuentaInput} se retiraron ${cantidadRetiroInput}, su saldo actual es: ${cuenta.saldo}`;
    } else {
        informacion.innerHTML = 'Cuenta no encontrada.';
    }
});

document.querySelector('#depositar').addEventListener('click', function () {
    let numeroCuentaInput = document.querySelector('#numeroCuenta').value;
    let cantidadDepositoInput = document.querySelector('#cantidadDeposito').value;
    let informacion = document.querySelector('#informacion');
    informacion.innerHTML = '';

    let cuenta = banco1.buscarCuenta(numeroCuentaInput);

    if (cuenta) {
        cuenta.depositar(parseFloat(cantidadDepositoInput));
        informacion.innerHTML = `A la cuenta ${numeroCuentaInput} se depositaron ${cantidadDepositoInput}, su saldo actual es: ${cuenta.saldo}`;
    } else {
        informacion.innerHTML = 'Cuenta no encontrada.';
    }
});
