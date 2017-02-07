var estado = 1;

/*
  proyecto_con_jone' es el section que contiene el cartel,
  el h3 con el título '39'5' y el p con 'Descripción'

  La función mostrar_proyecto_con_jone() abre el section con
  el cartel y con el primer h3 y el primer 'p'

  cartel-jone-info' es la capa que contiene la descripción ocultar

  La función mostrar() abre la capa con la descripción del proyecto
*/

/* Primer botón mostrar */

function mostrar_proyecto_con_jone(){
  if (estado==1) {
    document.getElementById('ampliar').style.visibility = 'visible';
    document.getElementById('proyecto_con_jone').style.height = '900px';
    document.getElementById('cartel-jone-info').style.height = '0px'; /*
    Inicializamos a 0 para evitar que al abrir por sengunda vez se vea
    el primero de los iconos */
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

/* Segundo botón mostrar */

function mostrar(){
    var estadoDelCursor = document.getElementById('cartel-jone-info').style.height;
    document.getElementById('cartel-jone-info').style.height = '1000px';
    document.getElementById('proyecto_con_jone').style.height = '1660px';
    document.getElementById('ampliar').style.visibility = 'hidden';
    document.getElementById('btn_ocultar_info_jone').style.display = 'visible';

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
