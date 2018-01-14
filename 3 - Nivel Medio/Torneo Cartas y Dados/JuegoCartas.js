/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Juego de clase Cartas que hereda de la clase "Juego"
 */
class JuegoCartas extends Juego {
    constructor(nombre, jugadores, baraja = 'Española', cartas = 48) {
        // Constructor del padre
        super(nombre, jugadores);

        // Propiedades de la propia clase
        this.baraja = baraja;
        this.cartas = cartas;
    }

    get carateristicas() {
        caracteristicas = '';
        // Nombre del padre "Juego"
        // Jugadores del padre "Juego"
        caracteristicas += 'Tipo de baraja ' + this.baraja;
        caracteristicas += 'Número de cartas' + this.cartas;
    }
}
