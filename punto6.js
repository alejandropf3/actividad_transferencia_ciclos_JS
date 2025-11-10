let random = Math.floor(Math.random() * (19 - 2 + 1)) + 2; // Número aleatorio entre 1 y 20

while (true) // Bucle infinito
{
    let numero = prompt("Ingresa un numero entre 1 y 20:"); // Solicitar número al usuario
    if (numero == random) // Verificar si el número es igual al número aleatorio
    {
        alert("Numero encontrado"); // Mostrar mensaje de éxito
        break; // Salir del bucle si el número es encontrado
    }
    else{
        if (numero > random) // Verificar si el número es mayor que el número aleatorio
        {
            alert("El numero buscado es menor que" + numero); // Mostrar pista al usuario
        }
        else{
            alert("El numero buscado es mayor que" + numero);
    }
}

}
