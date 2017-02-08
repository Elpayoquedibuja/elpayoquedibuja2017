var estado = 1;
var estado_logo = 1;

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
    document.getElementById('cartel-jone-info').style.height = '1100px';
    document.getElementById('proyecto_con_jone').style.height = '1750px';
    document.getElementById('ampliar').style.visibility = 'hidden';
    document.getElementById('ampliar').style.height = '0px';
    document.getElementById('btn_ocultar_info_jone').style.display = 'visible';
    document.getElementById("ampliar-info").innerHTML='A principios de 2017, colaboración con Jone García. Propuesta para la descripción y el diseño del cartel.';

}

function ocultar() {

    document.getElementById('proyecto_con_jone').style.height = '0px';
    document.getElementById('cartel-jone-info').style.height = '0px';
    document.getElementById('proyecto_con_jone').style.overflow = 'hidden';
    document.getElementById('ampliar').style.visibility = 'visible';
    document.getElementById('ampliar').style.height = '50px';
    var icono=document.getElementById("ampliar_btn");
    icono.src = "img/ampliar_info-oscuro-01.png";
    estado = 1;
    document.getElementById("ampliar-info").innerHTML=' ';


}

/* Funciones para mostrar los datos que hay en la sección LOGO */

function mostrar_datos_del_logo() {
  if (estado_logo==1){
  document.getElementById('datos_web_empresa').style.display = 'block';
  document.getElementById('logo').style.height = '390px';
  var icono=document.getElementById("ampliar_logo_info_btn");
  icono.src = "img/ampliar_info-logo2-01.png";
  estado_logo++;
  }
  else {

  }
}
