/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */


function generarFecha() {

}

function generarNumeros() {

}

function agregarEventos() {

}

function onInit() {
    limpiarNodos();
    generarFecha();
    generarNumeros();
    agregarEventos();
}

window.onload = onInit;

function compararFechas() {

    return false;
}

function compararNumeros() {

    return false;
}

function mostrarResultado(ganador) {
    if (ganador) {
        // Abre ventana felicitando
    } else {
        // Abre ventana de perder
    }
}

function enviarRespuestas() {
    var f = compararFechas();
    var n = compararNumeros();

    if (f === n === true) {
        mostrarResultado(true);
    } else {
        mostrarResultado(false);
    }
}
