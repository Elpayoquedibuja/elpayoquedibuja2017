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
     document.getElementById('jone-img').style.left = '420px';
}

function ocultarImg_izda() {
     document.getElementById('jone-img').style.left = '-420px';
}
