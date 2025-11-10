
let numero_primo = 2; // iniciamos el primer número primo conocido

for (let i = 3; i <= 50; i++)
{
    let aviso = true; // asumimos que i es primo

    for (let x = 2; x < i; x++)
    {
        if (i % x === 0)
        {
            aviso = false; // i no es primo
            break; // salimos del bucle interno
        }
        else{
            if (aviso === true) // i es primo
            {
                alert(i + " es un número primo."); // mostramos el número primo
            }
        }
    }
}