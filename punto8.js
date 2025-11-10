let intentos = 0; // Contador de intentos
let usuario = prompt("Ingrese su nombre de usuario:"); // Solicitar nombre de usuario
let contrasena = prompt("Ingrese su contraseña:"); // Solicitar contraseña

while (true) // Bucle infinito para verificar credenciales
{
    let usr_confirma = prompt("Confirme su nombre de usuario:"); // Solicitar confirmación de nombre de usuario
    let contra_confirma = prompt("Confirme su contraseña:"); // Solicitar confirmación de contraseña 
    
    if (usr_confirma === usuario && contra_confirma === contrasena) // Verificar si las credenciales coinciden
    {
        alert("Bienvenido" + usuario); // Mostrar mensaje de éxito
        break; // Salir del bucle si las credenciales son correctas
    }
    else{
        intentos++; // Incrementar el contador de intentos
    }

    if (intentos >= 3) // Verificar si se han alcanzado 3 intentos fallidos
    {
        alert("acceso denegado"); // Mostrar mensaje de acceso denegado
        break; // Salir del bucle después de 3 intentos fallidos
    }
}