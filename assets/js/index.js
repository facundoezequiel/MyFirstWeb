// JAVASCRIPT FILE

// INDEX.HTML /

// CAROUSEL BEGIN

// CREO LA VARIABLE CON LA RUTA DE LAS IMAGENES PARA EL CAROUSEL.
var rutaimgcarousel = "assets/img/equipo/";

// CREO EL ARRAY CON LOS ARCHIVOS PARA LAS IMAGENES DEL CAROUSEL.
var arrayimgcarousel = new Array("01.png", "02.png", "03.png", "04.png", "05.png", "06.png");

// CREO LAS VARIABLES QUE SERAN CONTADORES PARA CADA IMAGEN QUE SE MUESTRA.
var contadorcarousel0 = 0;
var contadorcarousel1 = 1;
var contadorcarousel2 = 2;

// LLAMO A LA FELCHA DERECHA Y HAGO QUE CADA VEZ QUE SE LE HACE CLICK HAGA ESTO.
document.getElementById("flechader").onclick = function () {

    // QUE LE RESTE UNO A CADA CONTADOR PARA QUE LAS IMAGENES VUELVAN PARA ATRAS.
    contadorcarousel0--;
    contadorcarousel1--;
    contadorcarousel2--;

    // QUE SI LLEGAN AL LIMITE VUELVAN A EMPEZAR.
    if (contadorcarousel0 == -1) {
        contadorcarousel0 = arrayimgcarousel.length - 1;
    }

    if (contadorcarousel1 == -1) {
        contadorcarousel1 = arrayimgcarousel.length - 1;
    }

    if (contadorcarousel2 == -1) {
        contadorcarousel2 = arrayimgcarousel.length - 1;
    }

    // IMPRIMO LAS IMAGENES.
    document.getElementById("imgcarousel1").setAttribute("src", rutaimgcarousel + arrayimgcarousel[contadorcarousel0]);
    document.getElementById("imgcarousel2").setAttribute("src", rutaimgcarousel + arrayimgcarousel[contadorcarousel1]);
    document.getElementById("imgcarousel3").setAttribute("src", rutaimgcarousel + arrayimgcarousel[contadorcarousel2]);
}

// LLAMO A LA FLECHA IZQUIERDA Y HAGO QUE CADA VEZ QUE SE LE HACE CLICK HAGA ESTO.
document.getElementById("flechaizq").onclick = function () {

    // QUE LE SUME UNO A CADA CONTADOR PARA QUE LAS IMAGENES SIGAN PARA ADELANTE.
    contadorcarousel0++;
    contadorcarousel1++;
    contadorcarousel2++;

    // QUE SI LLEGAN AL LIMITE VUELVAN A EMPEZAR.
    if (contadorcarousel0 == arrayimgcarousel.length) {
        contadorcarousel0 = 0;
    }

    if (contadorcarousel1 == arrayimgcarousel.length) {
        contadorcarousel1 = 0;
    }

    if (contadorcarousel2 == arrayimgcarousel.length) {
        contadorcarousel2 = 0;
    }

    // IMPRIMO LAS IMAGENES.
    document.getElementById("imgcarousel1").setAttribute("src", rutaimgcarousel + arrayimgcarousel[contadorcarousel0]);
    document.getElementById("imgcarousel2").setAttribute("src", rutaimgcarousel + arrayimgcarousel[contadorcarousel1]);
    document.getElementById("imgcarousel3").setAttribute("src", rutaimgcarousel + arrayimgcarousel[contadorcarousel2]);
}

// CREO UN SETINTERVAL PARA QUE CADA 2 SEGUNDOS PASE ESTO.
setInterval(function () {

    // QUE LE SUME UNO A CADA CONTADOR PARA QUE LAS IMAGENES SIGAN PARA ADELANTE.
    contadorcarousel0++;
    contadorcarousel1++;
    contadorcarousel2++;

    // QUE SI LLEGAN AL LIMITE VUELVAN A EMPEZAR.
    if (contadorcarousel0 == arrayimgcarousel.length) {
        contadorcarousel0 = 0;
    }

    if (contadorcarousel1 == arrayimgcarousel.length) {
        contadorcarousel1 = 0;
    }

    if (contadorcarousel2 == arrayimgcarousel.length) {
        contadorcarousel2 = 0;
    }

    // IMPRIMO LAS IMAGENES.
    document.getElementById("imgcarousel1").setAttribute("src", rutaimgcarousel + arrayimgcarousel[contadorcarousel0]);
    document.getElementById("imgcarousel2").setAttribute("src", rutaimgcarousel + arrayimgcarousel[contadorcarousel1]);
    document.getElementById("imgcarousel3").setAttribute("src", rutaimgcarousel + arrayimgcarousel[contadorcarousel2]);
}, 2000);

// CAROUSEL END

// SLIDER BEGIN

// CREO LA VARIABLE CONTADOR.
var contadorslider = 0;

// CREO EL ARRAY CON LAS ARCHIVOS PARA LAS IMAGENES DEL SLIDER.
var arrayimgslider = new Array("01.png", "02.png", "03.png");

// LE AGREGO EL ATRIBUTO SRC A LA IMAGEN PARA PODER VER UNA DESDE QUE CARGA LA PAGINA, PONGO LA TERCERA IMAGEN PARA QUE LA PRIMERA NO SE REPITA AL PRINCIPIO.
document.getElementById("sliderimg").setAttribute("src", "assets/img/slider/03.png");

// CREO UN SETINTERVAL PARA QUE CADA 5 SEGUNDOS PASE ESTO.
setInterval(function () {

    // QUE CONCATENE EL ATRIBUTO SRC PARA LA ETIQUETA IMAGEN CON LA POSICION DEL ARRAY.
    document.getElementById("sliderimg").setAttribute("src", "assets/img/slider/" + arrayimgslider[contadorslider]);

    // QUE LE SUME UNO AL CONTADOR PARA QUE CAMBIE LA IMAGEN.
    contadorslider++;

    // QUE SI LLEGAN AL LIMITE VUELVAN A EMPEZAR.
    if (contadorslider == arrayimgslider.length) {
        contadorslider = 0;
    }

}, 5000);

// SLIDER END

// BOTON CSS BEGIN

// HAGO QUE LA FUNCION SE EJECUTE CUANDO CARGUE LA PAGINA.
window.onload = function () {

    // LLAMO AL BOTON Y LE DIGO QUE CUANDO HAGA CLICK EJECUTE TAL FUNCION.
    document.getElementById("botoncss").onclick = botoncss1;

    // LE DIGO A LA FUNCION LO QUE TIENE QUE HACER.
    function botoncss1() {

        // LE DOY CLASES A DISTINTOS ELEMENTOS.
        document.getElementById("nombre").classList.add('imgnueva');
        document.getElementById("presentacion").classList.add('fondogris');
        document.getElementById("caruseleq").classList.add('fondogris');
        document.getElementById("caruseleq2").classList.add('fondogris');
        document.getElementById("formacion").classList.add('fondogris');
        document.getElementById("slider").classList.add('fondogris');
        document.getElementById("trabajos").classList.add('fondogris');
        document.getElementById("servicios").classList.add('fondogris');
        document.getElementById("video").classList.add('fondogris');
        document.getElementById("newsletter").classList.add('fondogris');
        document.getElementById("contenedornews").classList.add('fondogris');
        document.getElementById("contacto").classList.add('fondogris');
    }
}

// BOTON CSS END

// JAVASCRIPT FILE END