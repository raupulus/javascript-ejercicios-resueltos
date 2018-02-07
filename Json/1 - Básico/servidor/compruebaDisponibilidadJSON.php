<?php
/**
 * Archivo complementario simulando el lado del servidor donde se procesará un nombre de usuario recibido
 * como parámetro por GET.
 * Se generará una instancia de un objeto dónde contendrá si está disponible el usuario o no,
 * en el caso de no estar se añadirá un array con alternativas propuestas para el nombre de usuario.
 * Por último se devolverá este objeto instanciado en formato JSON para ser tratado por el cliente.
 */

// Extraigo la variable "name" que viene mediante GET al servidor
$login = $_GET['name'];

// Genera un número aleatorio
srand((double)microtime()*1000000);
$numeroAleatorio = rand(0, 10);

// Simular un falso retardo por la red y el servidor pausando unos breves segundos
sleep($numeroAleatorio % 2);

// Obtengo aleatoriamente si estará disponible según el módulo del número generado aleatoriamente
$disponible = ($numeroAleatorio % 2 == 0)? "si" : "no";

// Crear el objeto respuesta, este será enviado y tratado en el cliente como objeto JSON
class Respuesta {
 public $disponible;
 public $alternativas;
}

// Se instancia el objeto Respuesta para asignarlle valores
$respuesta = new Respuesta();

// En el caso de aleatoriamente recibir que está disponible, no se envían alternativas de nombre
if($disponible == "si") {
    $respuesta->disponible = "si";
    $respuesta->alternativas = null;
}
// En el caso de no estar disponible se autogeneran con el nombre recibido una serie de usuarios propuestos
else {
    $alternativasAutomaticas[] = $login.$login;
    $alternativasAutomaticas[] = "123".$login;
    $alternativasAutomaticas[] = $login."_otro";
    $alternativasAutomaticas[] = $login.".a";
    $alternativasAutomaticas[] = $login."100";

    $respuesta->disponible = "no";
    $respuesta->alternativas = $alternativasAutomaticas;

}

// Se devuelve la respuesta codificada mediante PHP en formato JSON
echo json_encode($respuesta);
?>
