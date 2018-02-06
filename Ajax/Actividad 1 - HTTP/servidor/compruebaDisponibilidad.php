<?php
    // Generar un número aleatorio
    srand((double)microtime()*1000000);
    $numeroAleatorio = rand(0, 10);

    // Simular un falso retardo por la red y el servidor (entre 0 y 3 segundos)
    sleep($numeroAleatorio % 3);

    // El script devuelve alatoriamente 'si' o 'no' para que la aplicación
    // cliente pueda comprobar los dos casos
    echo ($numeroAleatorio % 2 == 0)? "si" : "no";
?>
