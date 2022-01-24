

//Declaro los elementos del formulario

let nombre = document.getElementById("nombre1");
let apellido = document.getElementById("apellido");
let ciudad = document.getElementById("ciudad");
//let provincia = document.getElementById("provincia");
let cp = document.getElementById("cp");

//Defino el boton enviar
let boton = document.getElementById("boton-enviar");
//Defino el evento a ejecutar
boton.addEventListener("click", eventoclick);

// funcion con condicionales para ejecutar el boton enviar
function eventoclick () {

    if(nombre.value == ""){
    
        var contenido = "<p class='bg-light text-danger'>Hay campos que requieren ser completados</p>"
        document.getElementById("boton-enviar").innerHTML = contenido;
        var contenido = "<p class ='bg-light text-danger'> Nombre * </p>"
        document.getElementById("nombre1").innerHTML = contenido;

    }else{
        
        var contenido = "<p class='bg-dark text-white'>Formulario enviado</p>"
        document.getElementById("boton-enviar").innerHTML = contenido;
    }

 

}




//funcion guardada para mas adelante
/*
//constantes
const C1 = 1;
const C2 = 3;
const C3 = 6;

function calcularCuotas() {

  //var boton = document.getElementById("boton-enviar");
  var boton2 = document.getElementById("botonCalcular");

  if (cuotas = 1) {

      total = aplicarDescuento();
      console.log (total);

  }

}

*/