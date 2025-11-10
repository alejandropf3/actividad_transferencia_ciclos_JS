let cont_pares = 0; // Contador de números pares
let cont_impares = 0; // Contador de números impares

for (let i = 0; i <= 10; i++)
{
    let numero = prompt("Ingresa el numero " + (i+1) + ":"); // Solicitar número al usuario
    if (numero % 2 === 0)
    {
        cont_pares += 1; // Incrementar contador de pares
    }
    else
    {
        cont_impares += 1; // Incrementar contador de impares
    }

}

alert("Cantidad de numeros pares: " + cont_pares +" \nCantidad de numeros impares: "+ cont_impares); // Mostrar cantidad de números pares