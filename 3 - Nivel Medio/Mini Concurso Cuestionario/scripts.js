/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Fecha de inicio.
 * @type {Date}
 */
const fechaStart = new Date();

/**
 * Fecha autogenerada para la pregunta.
 * @type {Date}
 */
const fechaStop = generarFechaAleatoria(70, 118);

/**
 * Genera automáticamente números aleatorios y devuelve un Array con ellos.
 * @type {*[]}
 */
const numeros = generarNumeros();

/**
 * Intervalo de tiempo con el que se ejecuta el tiempo restante.
 */
const contador = setInterval(mostrarTiempo, 800);

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
 * Quitar eventos del cuestionario.
 */
function quitarEventos() {
    var btn = document.getElementById('btn-test');
    btn.removeEventListener('click', enviarRespuestas);
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
    var milis = restarFechas(fechaStop, fechaStart);
    preguntas2[0].value = (fechaStop.getDay()+1) + '/' +
                          (fechaStop.getMonth()+1) + '/' +
                          fechaStop.getFullYear();
    console.log('Cantidad de Horas → ' + milisegundosHoras(milis));
}

/**
 * Muestra el tiempo en la caja establecida para el reloj.
 */
function mostrarTiempo() {
    var ahora = new Date();
    var diff = milisegundosSegundos(restarFechas(fechaStart, ahora));
    var sclock = document.getElementById('box-clock');
    var boxclock = document.getElementById('clock');
    sclock.replaceChild(crearNodoId('div', 'clock', 60 - diff), boxclock);

    if (diff >= 60) {
        console.log('Ha terminado el tiempo');
        mostrarResultado('tiempo');
    }
}

/**
 * Llama a las funciones que necesitan ser llamadas después de cargar la página.
 */
function onInit() {
    limpiarNodos();
    agregarEventos();
    pintarDatos();
}

window.onload = onInit;

/**
 * Compara las horas introducidas por el usuario con las de diferencias.
 * @returns {boolean} Indica si son iguales (true).
 */
function compararFechas() {
    var milis = restarFechas(fechaStop, fechaStart);
    var horas = milisegundosHoras(milis);
    var inputUser = document.getElementsByClassName('pregunta2');
    return horas === Number(inputUser[inputUser.length - 1].value);
}

/**
 * Compara el mayor número generado con el introducido por el usuario.
 * @returns {boolean} Indica si son iguales los números (true).
 */
function compararNumeros() {
    var max = Math.max(...numeros);
    var inputUser = document.getElementsByClassName('pregunta1');
    return max === Number(inputUser[inputUser.length - 1].value);
}

/**
 * Crea nueva ventana de 300x100 en esquina inferior derecha con el contenido
 * del nodo pasado como parámetro.
 * @param nodos
 */
function mostrarVentana(nodos) {
    var titulo = 'Información del resultado';
    var top = screen.width - 100;
    var left = screen.height - 300;
    var ventana = abrirVentana('', titulo, 300, 100, top, left);
    ventana.document.body.appendChild(nodos);
}

/**
 * Prepara los resultados para enviar un nodo a la función "mostrarVentana()"
 * y esta generará y pintara dicha ventana con la información recibida.
 * @param ganador
 */
function mostrarResultado(ganador) {
    clearInterval(contador);

    var victoria;
    var aciertos;
    var resultado = 'Has tardado ' +
        (60 - document.getElementById('clock').innerHTML) +
        ' segundos';

    if (ganador === true) {
        victoria = '¡Felicidades! has ganado';
        resultado += ' has acertado todas las preguntas';
    } else if (ganador === 'tiempo') {
        victoria = '¡El tiempo ha terminado!';
    } else {
        victoria = 'Has perdido, puedes volver a intentarlo';
        if (compararFechas() || compararNumeros()) {
            aciertos = 1;
        } else {
            aciertos = 0;
        }

        resultado += ' con ' + aciertos + ' aciertos';
    }

    var nodos = crearNodoId('div', 'ventana2', '');
    nodos.appendChild(crearNodoId('h1', 'titulo', 'Resultados:'));
    nodos.appendChild(crearNodoId('p', 'victoria', victoria));
    nodos.appendChild(crearNodoId('p', 'resultado', resultado));

    mostrarVentana(nodos);
}

/**
 * Evento al enviar las respuestas pulsando el botón.
 */
function enviarRespuestas() {
    var f = compararFechas();
    var n = compararNumeros();

    if (f && n) {
        mostrarResultado(true);
    } else {
        mostrarResultado(false);
    }

    quitarEventos();
}
