
//Se crean las funciones para hacer funcionar el carrito


//cargar prendas de la local storage
//CON ESTO SE OBTIENEN LAS PRENDAS AÑADIDAS
function cargarPrendas2(){
    console.log("cargado");
    let itemsForCart= JSON.parse(localStorage.getItem("clothesForCart"));
   
    actualizarContador()
    AddTable();
    return itemsForCart;
    
}

//ejecuta las funciones
cargarPrendas2();

//Contador del carrito de compras (aparece debajo del dibujo del carrito)
//CANTIDAD DE PRODUCTOS

function actualizarContador (){
  
    let total = 0; 
    let itemsInCart=JSON.parse(localStorage.getItem("clothesForCart"));
  
    if(itemsInCart && itemsInCart.length>0){
        localStorage.setItem("totalCarrito", itemsInCart.length);
    }else if(itemsInCart && itemsInCart.length === 0){
        localStorage.setItem("totalCarrito",0);

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

//Agrega las prendas al carrito
function agregarCarrrito(id){
    let prenda = buscarPrendas(id);
    let prendas2 = cargarCarrito();
    prendas.push(prenda);
    localStorage.setItem("cart", JSON.stringify(prendas2));
    localStorage.setItem("totalCarrito", prendas2.length);
    actualizarContador();
   
}

//Se cargan las prendas 
function cargarCarrito (){
    if (localStorage.getItem("cart")){
    return JSON.parse(localStorage.getItem("cart"));
}
return [];
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
   let itemsInCart=JSON.parse(localStorage.getItem("clothesForCart"));
    for( let prenda of itemsInCart){
    cartBody += `
    <tr>
    <td> <img src="../Images/${prenda.imagen}" width='100'</td>
    <td> ${prenda.nombre}</td>
    <td>${prenda.precio}</td>
    <td> ${prenda.quantity}</td>
    
    `
    cartBody += `
    <td> ${prenda.precio * prenda.quantity}</td>
    <td> <button class="btn bg-white" onclick="deleteId(`+prenda.id+`)"><svg xmlns="http://www.w3.org/2000/svg" id="deleteBtn" width="16" height="16" fill="currentColor" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
  </svg></button></td>
  </tr>`
  subTotal += parseInt(prenda.precio * prenda.quantity) ;
    
    descuento += parseInt(prenda.precio * prenda.quantity) * 0.15;
    total += parseInt(prenda.precio * prenda.quantity) - (prenda.precio * prenda.quantity * 0.15);
   
    } 
   

    document.getElementById("lista-compra").innerHTML = cartBody;
    $("#subtotal").html(subTotal);
    $("#descuento").html(descuento);
    $("#total").html(total);
  
}
//Boton para eliminar los productos seleccionados dentro el carrito
function deleteId(id){
    let carrito = JSON.parse(localStorage.getItem("clothesForCart")) ; 
    let index = carrito.findIndex(x=>x.id===id);
    carrito.splice(index,1);
    localStorage.setItem("clothesForCart", JSON.stringify(carrito));
    AddTable();
    actualizarContador();

}


