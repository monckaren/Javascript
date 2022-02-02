function formulario () {
    let nombre = $("#nombre1").val();
    let apellido = $("#apellido").val();
    let ciudad = $("#ciudad").val();
    let provincia = $("#provincia").val();
    let cp = $("#cp").val();
    
    if(nombre == "" ){
        console.log("falta el nombre");
        $('#boton-enviar').html("Hay campos que requieren ser completados");
        $('#nombre1').html("Nombre *");
     
        
    }  
    if (apellido == ""){
        console.log("falta el apellido");
        $('#boton-enviar').html("Hay campos que requieren ser completados");
         $('#apellido').html("Apellido *");
      
    } 
    if (ciudad ==""){
        console.log("falta la ciudad");
        $('#boton-enviar').html("Hay campos que requieren ser completados");
        $('#ciudad').html("Ciudad *");
     
    }
    if (cp == ""){
        console.log("falta el cp");
        $('#boton-enviar').html("Hay campos que requieren ser completados");
         $('#cp').html("Codigo Postal *");
     
    }  else {
        $("#boton-enviar").html("Formulario enviado");
    }
     }

    
$("#boton-enviar").click(function(){
    formulario();
    console.log("formulario enviado");
   
})

