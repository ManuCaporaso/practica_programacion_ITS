// Clase Cuenta
class Cuenta {
     #id; #titular; #saldo;
    constructor(id, titular, saldo) {
        this.#id = id;
        this.#titular = titular;
        this.#saldo = saldo;
    }
     get id(){
        return this.#id;
     }
    get titular(){
        return this.#titular;
    }
    get saldo(){
        return this.#saldo;
    }

    set saldo(nuevosaldo){
        this.#saldo=nuevosaldo;
    }

    imprimirInfo() {
        console.log(`Cuenta ID: ${this.id}, Titular: ${this.titular}, Saldo: $${this.saldo}`);
    }
}

// Clase Usuario
class Usuario {

    #nombreusuario; #contraseña; #cuentas
    constructor(nombreusuario, contraseña) {
        this.#nombreusuario = nombreusuario;
        this.#contraseña = contraseña;
        this.#cuentas = [];
    }
    get nombreusuario(){
       return this.#nombreusuario;
    }
   get contraseña(){
       return this.#contraseña;
   }
   get cuentas(){
       return this.#cuentas;
   }

   set nombreusuario(nuevonombreusuario){
       this.#nombreusuario=nuevonombreusuario;
   }

    agregarCuenta(cuenta) {
        this.cuentas.push(cuenta);
    }
}