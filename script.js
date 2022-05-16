function validar() {
    var usuario = document.getElementById("usuario").value;
    var Contraseña = document.getElementById("pass").value;

    if (usuario == "alan23@gmail.com" && Contraseña == "12345678") {
        alert("Usuario y Contraseña validos");
    } else {
        alert("Usuario no registrado");
    }
}