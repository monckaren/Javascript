
//Se crean las funciones para hacer funcionar el carrito

//Guardar prendas en local storage
function guardarPrendas2 (prendas){
localStorage.setItem("prendas", JSON.stringify(prendas));
console.log("Guardado");
}

//cargar prendas de la local storage
//CON ESTO SE OBTIENEN LAS PRENDAS AÑADIDAS
function cargarPrendas2(){
    console.log("cargado");
    let itemsForCart= JSON.parse(localStorage.getItem("clothesForCart"));
   
    actualizarContador()
    return itemsForCart;
    
}

//ejecuta las funciones
guardarPrendas2(prendas);
cargarPrendas2();

//Contador del carrito de compras (aparece debajo del dibujo del carrito)
//CANTIDAD DE PRODUCTOS
function actualizarContador (){
    let total = 0; 
    let itemsInCart=JSON.parse(localStorage.getItem("clothesForCart"));
  
    if(itemsInCart && itemsInCart.length>0){
        localStorage.setItem("totalCarrito", itemsInCart.length);
    }

    if (localStorage.getItem("totalCarrito")) {
        total = localStorage.getItem("totalCarrito");
    }else{
        localStorage.setItem("totalCarrito", 0)
        total = localStorage.getItem("totalCarrito");
    }
    
    let contador = document.getElementById("datosCarrito");
    contador.innerHTML = "<p>" + total+ " producto(s) </p>"
}
//Se buscan las prendas por id
function buscarPrendas (id){
    let prendas = cargarPrendas2();
    return prendas.find(x => x.id == id);
}
//Se cargan las prendas 
function cargarCarrito (){
    if (localStorage.getItem("cart")){
    return JSON.parse(localStorage.getItem("cart"));
}
return [];
}

//Agrega las prendas al carrito
function agregarCarrrito(id){
    let prenda = buscarPrendas(id);
    let prendas2 = cargarCarrito();
    prendas.push(prenda);
    localStorage.setItem("cart", JSON.stringify(prendas2));
    localStorage.setItem("totalCarrito", prendas2.length);
    actualizarContador();
   
}

//Eliminar todas las prendas del carrito
function eliminarCarrito(){
    localStorage.removeItem("totalCarrito");
    localStorage.removeItem("clothesForCart");
    console.log("Carrito vacio ");
    actualizarContador();
   
}
//Boton para eliminar todo
 document.getElementById("vaciar-carrito").addEventListener("click", eliminarCarrito);

 //Agregar prendas seleccionadas con bototn agregar a carrito.html
 function AddTable(){
   let subTotal = 0;
   let descuento = 0;
   let total = 0;
   let cartBody = "";

    for( let prenda of itemsForCart){
    cartBody += `
    
    <td> <img src="../Images/${prenda.imagen}" width='100'</td>
    <td> ${prenda.nombre}</td>
    <td>${prenda.precio}</td>
    <td> ${prenda.quantity}</td>
    //boton para eliminar la prenda seleccionada
    <td> <a href='#' class='delete fas fa-times-circle' data-id=${prenda.id} id='deleteBtn'</td>
    `
    subTotal += prenda.precio;
    descuento += prenda.precio * 0.85;
    total += parseFloat(prenda.precio - descuento);
    const idPrenda = prenda.id;
    
    document.getElementById("deleteBtn").onclick = async () => {
    localStorage.removeItem(idPrenda);
    localStorage.removeItem("clothesForCart");
    console.log("Se elimino el producto "+idPrenda+"");
    actualizarContador();}
    } 
    cartBody += `<td>${subTotal}</td>;
    <td> ${descuento}</td>;
    <td> ${total} </td>;`


    }

//Insertar en la tabla de carrito.html
document.getElementById("lista-compra").innerHTML = cartBody;
actualizarContador();

 


