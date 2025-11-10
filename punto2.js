while(true) // Bucle infinito
{
    let numero = prompt("Ingresa el numero de la tabla de multiplicar que deseas ver (1-12):");
    for (let i = 0; i <= 12; i++) // Bucle para la tabla de multiplicar
    {
        let multiplica = numero * (i+1); // Calcular el valor a multiplicar
        alert(numero + "*"+ (i+1 +" = "+ multiplica)); // Mostrar la tabla de multiplicar
    }

    let eleccion = "¿Deseas ver otra tabla de multiplicar? (si/no):";// Preguntar al usuario si desea continuar
    if (eleccion == "no") // Condición para salir del bucle
    {
        break; // Salir del bucle infinito si la respuesta es "no"
    }
}