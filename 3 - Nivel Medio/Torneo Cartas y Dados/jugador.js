/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.resultados = [];
    }

    get nombre() {
        return this.nombre;
    }

    set puntuacion(puntos) {
        this.resultados.push(puntos);
    }

    get mejorPuntuacion() {
        return "La mejor puntuación ha sido " + (Math.max(...this.resultados));
    }

    get totalPuntos() {
        puntos = 0;
        for (p of this.resultados) {
            puntos += p;
        }
        return "El total de puntos obtenidos es " + puntos;
    }

    get algunCero() {
        var cero;
        if (this.resultados.find(0)) {
            cero = "Este jugador si ha obtenido 0 en alguna partida";
        } else {
            cero = "Este jugador no ha obtenido 0 en alguna partida";
        }
        return cero;
    }

    get puntuacionMedia() {
        return "La puntuación media es " + this.totalPuntos() / this.resultados.lenght;
    }
}
