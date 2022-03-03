
//Aplicando AJAX
//Se muestra el catalogo con los productos en el array mediante la busqueda en JSON
cargarPrendas2(false);

$(".catalogo").append(`<button class="btn btn-outline-success" id="btnSearch" type="button">Buscar</button>`);
$("#btnSearch").click(() =>{
    $.get("../JSON/productos.json", function(respuesta, status){
        console.log(respuesta);
        console.log(status);
     
        if (status === "success"){
            let productos = respuesta;
            console.log(productos);
        for (const producto of productos){
                $(".innercatalogo").append(
                ` 
                <div class="row">
                <h3>${producto.nombre} </h3>
                <p><img src="../Images/${producto.imagen}" width="120px"<br>$ ${producto.precio}</p> 
               
                <hr>
                </div>
              `
                )
            }
        }
    })
});