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

function volver_a_empezar(){
  ocultarImg_dcha();
}

function ocultarImg_dcha() {
      if (num<4) {
      document.getElementById('galeria').style.left = '420px';
      document.getElementById('galeria').style.opacity= 0;
      setTimeout(cambioImg_y_la_situo_a_la_izq, 1000);
      }
}

function ocultarImg_izda() {
      if (num<4) {
      document.getElementById('galeria').style.left = '-420px';
      document.getElementById('galeria').style.opacity= 0;
      setTimeout(cambioImg_y_la_situo_a_la_dcha, 1000);
      }

}

function cambioImg_y_la_situo_a_la_izq() {
    var cartel = document.getElementById("galeria");
    galeria.src = "img/jone"+num+".png";
    document.getElementById('galeria').style.left = '-420px';
    num++;
    setTimeout(Img_aparece_desde_la_izq, 1000);
}

function cambioImg_y_la_situo_a_la_dcha() {
    var cartel = document.getElementById("galeria");
    galeria.src = "img/jone"+num+".png";
    document.getElementById('galeria').style.left = '420px';
    num++;
    setTimeout(Img_aparece_desde_la_dcha, 1000);
}

function Img_aparece_desde_la_izq() {

    var cartel = document.getElementById("galeria");
    galeria.src = "img/jone"+num+".png";
    document.getElementById('galeria').style.opacity = 1;
    document.getElementById('galeria').style.left = '10px';
    if (num==4) {
        num=1;
        document.getElementById('derecha').style.opacity= 0;
    }
  }

  function Img_aparece_desde_la_dcha() {

    var cartel = document.getElementById("galeria");
    galeria.src = "img/jone"+num+".png";
    document.getElementById('galeria').style.opacity = 1;
    document.getElementById('galeria').style.left = '10px';
    if (num==4) {
        num=1;
        document.getElementById('derecha').style.opacity= 0;
    }
}

function vuelvo_a_empezar() {
    console.log("estoy en Img_aparece_desde_la_izq:"+ num);
    galeria.src = "img/jone"+num+".png";
    alert("estoy aquí otra vez al principio, no?");

    document.getElementById('galeria').style.opacity = 0.5;
    document.getElementById('galeria').style.left = '10px';


}
