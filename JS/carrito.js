
//Se crean las funciones para hacer funcionar el carrito




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
   if(!itemsInCart){
    itemsInCart = [];
}
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
    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/></svg></button></td>
  </tr>`

document.getElementById("lista-compra").innerHTML = cartBody;  
subTotal += parseInt(prenda.precio * prenda.quantity) 
descuento += parseInt(prenda.precio * prenda.quantity) * 0.15;
total += parseInt(prenda.precio * prenda.quantity) - (prenda.precio * prenda.quantity * 0.15);

 
} 
   


$("#subtotal").html(subTotal);
$("#descuento").html(descuento);
$("#total").html(total);

}
//Boton para eliminar los productos seleccionados dentro el carrito
function deleteId(id){
    let carrito = JSON.parse(localStorage.getItem("clothesForCart")) ; 
    let index = carrito.findIndex(x=>x.id===id);
  

    if(carrito[index].quantity > 1){
        carrito[index].quantity -= 1;    
    
   
    } else{
        carrito.splice(index,1);
    } 

   localStorage.setItem("clothesForCart", JSON.stringify(carrito));
    
    AddTable();
    actualizarContador();
    }



