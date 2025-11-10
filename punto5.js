let total_compra = 0; // Inicializar el total de la compra

while (true) // Bucle infinito para agregar productos
{
    let nombre = prompt("Ingrese el nombre del producto"); // Solicitar nombre del producto
    let precio = parseFloat(prompt("Ingrese el precio del producto")); // Solicitar precio del producto

    total_compra += precio; // Sumar el precio al total de la compra

    let eleccion = prompt("¿Desea seguir comprando? (si/no)"); // Preguntar si desea agregar otro producto

    if (eleccion == "no")
    {
        break; // Salir del bucle si la respuesta es "no"
    }
}

if (total_compra > 100000) // Verificar si el total supera 1000
{
    let descuento = total_compra * 0.10; // Calcular el descuento del 10%
    alert("El costo total de compra con descuento de 10% es: "+ (total_compra - descuento)); // Mostrar el total de la compra con descuento
}
else{
    alert("El costo total de compra es: "+ total_compra); // Mostrar el total de la compra sin descuento
}