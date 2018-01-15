
/**
 * Limpia todos los nodos texto hijos vacíos y con saltos de línea
 * que son creados automáticamente por el navegador y pueden causar errores
 * Es útil usarlo antes de comenzar, justo en "window.onload = limpiar_nodos"
 */
function limpiar_nodos() {
    var nodos_a_eliminar = [];

    // Busca los nodos y los añade al array
    function buscar(){
        var elementos = document.getElementsByTagName('*');

        for (var k=0;k<elementos.length;k++) {
            for (var i=0;i<elementos[k].childNodes.length;i++) {
                var hijo = elementos[k].childNodes[i];
                if ((hijo.nodeType == 3 && !/\S/.test(hijo.nodeValue))||(hijo.nodeType==8)) {
                    nodos_a_eliminar[nodos_a_eliminar.length] = hijo;
                }
            }
        }
    }

    // Destruye los nodos del array
    function destruir(){
        for (var d=0;d<nodos_a_eliminar.length;d++) {
            nodos_a_eliminar[d].parentNode.removeChild(nodos_a_eliminar[d]);
        }
    }

    buscar();
    destruir();
}
