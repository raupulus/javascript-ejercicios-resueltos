/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2017 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

 /**
  * Juego de clase Dados que hereda de la clase "Juego"
  */
class JuegoDados extends Juego {
    constructor(nombre, jugadores, dados, cantidad = 2) {
        // Constructor del padre
        super(nombre, jugadores);

        // Propiedades de la propia clase
        this.dados = dados;
        this.cantidad = cantidad;
    }

    get caracteristicas() {
        var datos = '';
        datos += '<h3>' + super.nombre + '</h3>';
        datos += 'Jugadores → ' + super.jugadores + '<br />';
        datos += 'Tipo de dados → ' + this.dados + '<br />';
        datos += 'Cantidad de dados → ' + this.dados + '<br />';
        return datos;
    }
}
