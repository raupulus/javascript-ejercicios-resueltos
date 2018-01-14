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

    get caracteristicas() {
        var datos = '';
        datos += '<h3>' + super.nombre + '</h3>';
        datos += 'Jugadores → ' + super.jugadores + '<br />';
        datos += 'Tipo de baraja → ' + this.baraja + '<br />';
        datos += 'Número de cartas → ' + this.cartas + '<br />';
        return datos;
    }
}
