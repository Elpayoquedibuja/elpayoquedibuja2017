var num = 1;

function mostrar(){
  var estadoDelCursor = document.getElementById('cartel-jone-info').style.height;

    document.getElementById('cartel-jone-info').style.height = '1100px';
    document.getElementById('ampliar').style.visibility = 'hidden';

}

function ocultar() {

     document.getElementById('cartel-jone-info').style.height = '10px';
     document.getElementById('ampliar').style.visibility = 'visible';

}

/* EJEMPLO TAL CUAL */
// function adelante() {
//   num ++;
//   if (num>4){
//         num=1;
//         }
//         var foto=document.getElementById("galeria");
//         foto.src = "img/jone"+num+".png";
// }
/* EJEMPLO TAL CUAL */

/* NUEVO HACIA LA DERECHA!!!!!!!! */

function adelante() {
  num ++;
  if (num>4){
        num=1;
        }
        setTimeout(ocultarImg_dcha, 500);
}

function volver_a_empezar(){
    ocultarImg_dcha();
}

function ocultarImg_dcha() {
    document.getElementById('galeria').style.left = '420px';
    document.getElementById('galeria').style.opacity= 0;
    setTimeout(cambioImg_y_la_situo_a_la_izq, 500);
}

function cambioImg_y_la_situo_a_la_izq() {
    document.getElementById('galeria').style.left = '-420px';
    setTimeout(mostrar_nueva_IMG, 500);
}

function mostrar_nueva_IMG(){
    var foto=document.getElementById("galeria");
    foto.src = "img/jone"+num+".png";
    document.getElementById('galeria').style.opacity= 1;
    document.getElementById('galeria').style.left = '0px';

}

/* Fin hacia la derecha. Ya funciona */

/* NUEVO HACIA LA IZQUIERDA */
