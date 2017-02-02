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

function ocultarImg_dcha() {
     document.getElementById('galeria').style.left = '420px';
     document.getElementById('galeria').style.opacity= 0;
     document.getElementById('derecha').style.opacity = 0.5;
     document.getElementById('dcha_btn').style.cursor = 'none';
     setTimeout(cambioImg_y_la_situo_a_la_izq, 1000);
}

function cambioImg_y_la_situo_a_la_izq() {
  num++;
  if(num>3)
    num=1;
    var cartel = document.getElementById("galeria");
    galeria.src = "img/jone"+num+".png";
    document.getElementById('galeria').style.left = '-420px';
    setTimeout(Img_aparece_desde_la_izq, 1000);
}

function Img_aparece_desde_la_izq() {
  if(num>3)
    num=1;
    var cartel = document.getElementById("galeria");
    galeria.src = "img/jone"+num+".png";
    document.getElementById('galeria').style.opacity = 1;
    document.getElementById('galeria').style.left = '10px';

}



function ocultarImg_izda() {
     document.getElementById('jone-img').style.left = '-420px';
}
