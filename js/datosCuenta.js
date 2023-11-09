const cuenta1 = new Cuenta(1, "BancoProvinciaNeuquen", 10000);
const cuenta2 = new Cuenta(2, "BancoNacion", 15000);
const cuenta3 = new Cuenta(3, "BancoBBVA", 5000);
const cuenta4 = new Cuenta(4, "BancoProvincia", 12000);
const cuenta5 = new Cuenta(5, "BancoFrances", 3000);
const cuenta6 = new Cuenta(6, "BancoNew", 8000);

const manuel = new Usuario("usuario1", "password1");
const alejandro = new Usuario("usuario2", "password2");

manuel.agregarCuenta(cuenta1);
manuel.agregarCuenta(cuenta3);
manuel.agregarCuenta(cuenta5);
alejandro.agregarCuenta(cuenta2);
alejandro.agregarCuenta(cuenta4);
alejandro.agregarCuenta(cuenta6);

listaUsuarios = [manuel, alejandro];
listadoCuentas = [cuenta1, cuenta2, cuenta3, cuenta4, cuenta5, cuenta6];
