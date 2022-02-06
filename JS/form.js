function formulario () {
    let nombre = $("#nombre1").val();
    let apellido = $("#apellido").val();
    let ciudad = $("#ciudad").val();
    let provincia = $("#provincia").val();
    let cp = $("#cp").val();
    
    if(nombre == "" ){
        console.log("falta el nombre");
        $('#mostrarMensaje').html("Hay campos que requieren ser completados");
        $('#nombreLabel').html("Nombre *");
     
        
    }  
    if (apellido == ""){
        console.log("falta el apellido");
        $('#mostrarMensaje').html("Hay campos que requieren ser completados");
         $('#apellidoLabel').html("Apellido *");
      
    } 
    if (ciudad ==""){
        console.log("falta la ciudad");
        $('#mostrarMensaje').html("Hay campos que requieren ser completados");
        $('#ciudadLabel').html("Ciudad *");
     
    }
    if (cp == ""){
        console.log("falta el cp");
        $('#mostrarMensaje').html("Hay campos que requieren ser completados");
         $('#cpLabel').html("Codigo Postal *");
     
    }  else {
        $("#mostrarMensaje").html("Formulario enviado");
    }
     }

    
$("#boton-enviar").click(function(){
    formulario();
    console.log("formulario enviado");
   
})

