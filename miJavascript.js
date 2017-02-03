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
