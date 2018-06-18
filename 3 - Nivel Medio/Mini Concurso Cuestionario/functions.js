/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Genera un número aleatorio según los valores introducidos.
 * @param minimo Valor mínimo admitido.
 * @param maximo Valor máximo admitido.
 * @returns {number} Devuelve el número generado.
 */
function generarAleatorio(minimo = 0, maximo = 10) {
    var x = 0;

    while (true) {
        x = parseInt((Math.random()+0.01) * maximo);

        if ((x >= minimo) && (x <= maximo)) {
            return x;
        }
    }
}

/**
 * Genera una fecha aleatoria entre el 1970 y el 2018.
 * @returns {string}
 */
function generarFechaAleatoria() {
    var year = generarAleatorio(70, 118);
    if (year === 100) {
        year = 2000;
    } else if (year > 100) {
        year = 1900 + year;
    } else {
        year = Number("19" + String(year));
    }

    var dia = generarAleatorio(0, 30);
    var mes = generarAleatorio(0, 11);

    return new Date(year, mes, dia);
}

/**
 * Resta las dos fechas recibidas y devuelve la diferencia en milisegundos.
 * @param inicio
 * @param fin
 * @returns {number}
 */
function restarFechas(inicio, fin) {
    return fin.getTime() - inicio.getTime();
}


/**
 * Recibe milisegundos y devuelve los días que representa.
 * @param milis
 * @returns {number}
 */
function milisegundosDias(milis) {
    return Math.floor(milis/(24*60*60*1000));
}

/**
 * Recibe milisegundos y devuelve la cantidad de horas que representa
 * @param milis
 * @returns {number}
 */
function milisegundosHoras(milis) {
    return Math.floor(milis/(60*60*1000));
}

/**
 * Recibe milisegundos y devuelve los minutos que representa.
 * @param milis
 * @returns {number}
 */
function milisegundosMinutos(milis) {
    return Math.floor(milis/(60*1000));
}

/**
 * Recibe milisegundos y devuelve los segundos que representa.
 * @param milis
 * @returns {number}
 */
function milisegundosSegundos(milis) {
    return Math.floor(milis/(1000));
}

/**
 * Crea un nuevo nodo y le asigna un id.
 * @param  {String} elemento Etiqueta HTML para crear el nodo.
 * @param  {String} id       Id para asignar a la etiqueta creada
 * @param  {String} texto    Texto para incluir en el nodo texto.
 * @return {Node}            Devuelve el nodo creado.
*/
function crearNodoId(elemento, id, texto) {
    var nuevoNodo = document.createElement(elemento);
    nuevoNodo.setAttribute('id', id);

    var nodoTexto = document.createTextNode(texto);
    nuevoNodo.appendChild(nodoTexto);
    return nuevoNodo;
}
