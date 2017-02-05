
function mostrar(){
    var estadoDelCursor = document.getElementById('cartel-jone-info').style.height;
    document.getElementById('cartel-jone-info').style.height = '1100px';
    document.getElementById('proyecto_con_jone').style.height = '1800px';
    document.getElementById('ampliar').style.visibility = 'hidden';

}

function ocultar() {

    document.getElementById('proyecto_con_jone').style.height = '0px';
    document.getElementById('cartel-jone-info').style.height = '0px';
    document.getElementById('proyecto_con_jone').style.overflow = 'hidden';
    document.getElementById('ampliar').style.visibility = 'visible';


}

/* Nuevo function mostrar */

function mostrar_proyecto_con_jone(){
    document.getElementById('proyecto_con_jone').style.height = '800px';


}
