/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

// Clase padre de JuegoCartas y JuegoDados

/**
 * Clase Juego que será padre de "JuegoCartas" y  de "JuegoDados" con
 * los elementos comunes de estos.
 */
class Juego {
    constructor(name, players = 2) {
        this.name = name;
        this.players = players;
    }

    get nombre() {
        return this.name;
    }

    get jugadores() {
        return this.players;
    }
}
