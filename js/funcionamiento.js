//FUNCION DE LOGUEO

function loguear(){
    event.preventDefault();
 
    const nombreusuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    
    const usuario = listaUsuarios.find((u) => u.nombreusuario === nombreusuario && u.contraseña === contraseña);
    
    if (usuario) {
        localStorage.setItem("usuarioLogueado",nombreusuario);
        window.location.href = '/html/transferencia.html';
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
};

//FUNCION PARA REALIZAR LA TRANSFERENCIA

function realizar_transferencia(){
    event.preventDefault();
        
    const cuentaOrigen = document.getElementById("cuentaOrigen").value;
    const cuentaDestino = document.getElementById("cuentaDestino").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    if (isNaN(saldo) || saldo <= 0) {
        alert("El importe debe ser mayor que 0.");
        return;
    }

    const usuarioLogueado = localStorage.getItem("usuarioLogueado");

    if (!usuarioLogueado) {
        alert("Debes iniciar sesión primero.");
        return;
    }
    const usuarioLogueadoObj = listaUsuarios.find((u)=>u.nombreusuario === usuarioLogueado);
    const cuentaOrigienExistente = usuarioLogueadoObj.cuentas.some((c) => c.id.toString() === cuentaOrigen);
    const cuentaDestinoExistente = listadoCuentas.some((c) => c.id.toString() === cuentaDestino);

    if (!cuentaOrigienExistente) {
        alert("La cuenta origen no te pertenece.");
    } else if (!cuentaDestinoExistente) {
        alert("La cuenta destino no existe.");
    } else if (cuentaOrigen === cuentaDestino) {
        alert("No puedes transferir dinero a la misma cuenta.");
    } else {
         const cuentaOrigenObj = usuarioLogueadoObj.cuentas.find((c) => c.id.toString() === cuentaOrigen);
        const cuentaDestinoObj = listadoCuentas.find((c) => c.id.toString() === cuentaDestino);

        if (cuentaOrigenObj.saldo < saldo) {
            alert("Saldo insuficiente.");

        } else {
            cuentaOrigenObj.saldo -= saldo;
            cuentaDestinoObj.saldo += saldo;
            alert("Transferencia exitosa.");
        }
    }
}
