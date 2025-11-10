let notas;

for (let i = 1; i <= 5; i++) 
{
    let nombre = prompt("Ingrese el nombre del estudiante " + i + ":");
    for (let x = 0; x < 3; x++)
    {
        let nota = prompt(("Ingrese la nota"+ (x+1) + " rango (1 a 5)"));
        if (nota > 0 && nota <= 5)
        {
            notas += nota;
        }
        else
        {
            alert("Error datos fuera del rango (1 a 5)"); 
        }
    }
    let promedio = notas / 3;
    if (promedio >= 3)
    {
        alert("El estudiante "+ nombre + " aprobo");
    }
    else
    {
        alert("El estudiante "+ nombre + " reprobo");
    }
}