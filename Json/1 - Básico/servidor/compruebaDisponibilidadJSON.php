<?php
//si estuvieran en el fichero productos.json
//$json= file_get_contents("products.json");


srand((double)microtime()*1000000);
$numeroAleatorio = rand(0, 10);

// Simular un falso retardo por la red y el servidor
sleep($numeroAleatorio % 2);

$disponible = ($numeroAleatorio % 2 == 0)? "si" : "no";

class respuesta {
 public $disponible;
 public $alternativas;
}

$respuesta = new respuesta();

if($disponible == "si") {
    $respuesta->disponible = "si";
    $respuesta->alternativas = null;
}
else {
    $alternativasAutomaticas[] = $login.$login;
    $alternativasAutomaticas[] = "123".$login;
    $alternativasAutomaticas[] = $login."_otro";
    $alternativasAutomaticas[] = $login.".a";
    $alternativasAutomaticas[] = $login."100";

    $respuesta->disponible = "no";
    $respuesta->alternativas = $alternativasAutomaticas;

}
echo json_encode($respuesta);

?>
