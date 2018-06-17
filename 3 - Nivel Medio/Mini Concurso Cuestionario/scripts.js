/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

const fechaStart = new Date(0);
const fechaStop = generarFechaAleatoria();
const numeros = generarNumeros();

/**
 * Genera 3 números entre el 1 y el 100 de forma aleatoria y los devuelve
 * @returns {[]} Devuelve un array con 3 números aleatorios del 1 al 100.
 */
function generarNumeros() {
    return [generarAleatorio(1, 100),
            generarAleatorio(1, 100),
            generarAleatorio(1, 100)
    ];
}

/**
 * Agrega eventos al cuestionario.
 */
function agregarEventos() {
    var btn = document.getElementById('btn-test');
    btn.addEventListener('click', enviarRespuestas);
}

/**
 * Pinta los datos generados al cuestionario.
 */
function pintarDatos() {
    var preguntas1 = document.getElementsByClassName('pregunta1');
    numeros.forEach((ele, idx) => {
        preguntas1[idx].value = ele;
    });

    var preguntas2 = document.getElementsByClassName('pregunta2');
    var milis = restarFechas(fechaStart, fechaStop);
    preguntas2[0].value = (fechaStop.getDay()+1) + '/' +
                          (fechaStop.getMonth()+1) + '/' +
                          fechaStop.getFullYear();
    console.log('Cantidad de Horas → ' + milisegundosHoras(milis));
}

/**
 * Llama a las funciones que necesitan ser llamadas después de cargar la página.
 */
function onInit() {
    limpiarNodos();
    agregarEventos();
    pintarDatos();

    // Iniciar contador de tiempo
}

window.onload = onInit;

/**
 * Compara las horas introducidas por el usuario con las de diferencias.
 * @returns {boolean} Indica si son iguales (true).
 */
function compararFechas() {
    var milis = restarFechas(fechaStart, fechaStop);
    var horas = milisegundosHoras(milis);
    var inputUser = document.getElementsByClassName('pregunta2');
    return horas === inputUser[inputUser.length - 1].value;
}

/**
 * Compara el mayor número generado con el introducido por el usuario.
 * @returns {boolean} Indica si son iguales los números (true).
 */
function compararNumeros() {
    var max = Math.max(...numeros);
    var inputUser = document.getElementsByClassName('pregunta1');
    return max === inputUser[inputUser.length - 1].value;
}

function mostrarResultado(ganador) {
    if (ganador === true) {
        // Abre ventana felicitando
        alert('si');
    } else {
        // Abre ventana de perder
        alert('no');
    }
}

function enviarRespuestas() {
    // Parar contador de tiempo

    var f = compararFechas();
    var n = compararNumeros();

    if (f === n === true) {
        mostrarResultado(true);
    } else {
        mostrarResultado(false);
    }
}
