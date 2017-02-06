var estado = 1;

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
    var icono=document.getElementById("ampliar_btn");
    icono.src = "img/ampliar_info-oscuro-01.png";
    estado = 1;


}

/* Nuevo function mostrar */

function mostrar_proyecto_con_jone(){
  if (estado==1) {
    document.getElementById('proyecto_con_jone').style.height = '800px';
    /* Cambiar el icono de la fotografía */
    var icono=document.getElementById("ampliar_btn");
    icono.src = "img/ampliar_info-oscuro2-01.png";
    estado++;
    }
    else {
      document.getElementById('proyecto_con_jone').style.height = '0px';
      /* Cambiar el icono de la fotografía */
      var icono=document.getElementById("ampliar_btn");
      icono.src = "img/ampliar_info-oscuro-01.png";
      estado = 1;
    }

}
