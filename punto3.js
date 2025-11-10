let dinero = 1000000; // Dinero inicial en la cuenta
while (dinero > 0) // Bucle mientras haya dinero en la cuenta
{
    let retiro = prompt("cuanto dinero deseas retirar?\n Dinero disponible: "+ dinero); // Solicitar cantidad a retirar
    if (retiro <= dinero) // Verificar si hay suficiente dinero
    {
        dinero -= retiro; // Restar la cantidad retirada del dinero disponible
    }
    else // Si no hay suficiente dinero
    {
        alert("No puedes retirar esta cantidad de dinero (saldo insuficiente)."); // Mostrar mensaje de error
    }
}