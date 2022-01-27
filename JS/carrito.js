


function guardarPrendas2 (prendas){
localStorage.setItem("prendas", JSON.stringify(prendas));
console.log("Guardado");
}

function cargarPrendas2(){
    console.log("cargado");
    return JSON.parse(localStorage.getItem("prendas"));
    
}

guardarPrendas2(prendas);
cargarPrendas2();

function actualizarContador (){
    let total = 0; 
    if (localStorage.getItem("totalCarrito")) {
    total = localStorage.getItem("totalCarrito");
    }
    
    let contador = document.getElementById("datosCarrito");
    contador.innerHTML = "<p>" + total+ " producto(s) </p>"
}

actualizarContador();

function buscarPrendas (id){
    let prendas = cargarPrendas2();
    return prendas.find(x => x.id == id);
}

function cargarCarrito (){
    if (localStorage.getItem("cart")){
    return JSON.parse(localStorage.getItem("cart"));
}
return [];
}

function agregarCarrrito(id){
    let prenda = buscarPrendas(id);
    let prendas = cargarCarrito();
    prendas.push(prenda);
    localStorage.setItem("cart", JSON.stringify(prendas));
    localStorage.setItem("totalCarrito", prendas.length);
    actualizarContador();
   
}


function eliminarCarrito(){
    localStorage.removeItem("cart");
    localStorage.removeItem("totalCarrito");
    console.log("Carrito vacio ");
    actualizarContador();
   
}
 document.getElementById("eliminar").addEventListener("click", eliminarCarrito);


/* let button = document.getElementById("boton-agregar");
button.onclick = () => {
let contenido = agregarCarrrito(prendas.id);
document.getElementById("carrito").innerHTML = contenido;
actualizarContador();
console.log("Se agrego "+prendas.nombre+"al carrito");} */


agregarCarrrito(prendas.id);
console.log("Se agrego al carrito");

let productosCarrito = JSON.parse(localStorage.getItem("cart"));
let total = 0;
let body = "<table class='table'>";
body +="<thead>";
body +="<tr>";  
body +=" <th scope='col'>Cantidad</th>";   
body +="<th scope='col'>Penda</th>";    
body +="<th scope='col'>Descripcion</th>";    
body += "<th scope='col'>Precio</th>";  
body +="<th scope='col'>Cantidad</th>";  
body +="</tr>";  
body +="</thead>";
body +="<tbody>";
  for(let prenda of productosCarrito){
    body += "<tr>"
    body +="<td><img src='//Images/"+prenda.imagen+"' alt='"+prenda.nombre+"' width=80px</td>";
    body +="<td>"+prenda.nombre+"<td>";
    body +="<td>"+prenda.precio+"<td>";
    body +="</tr>";
 
      total += prenda.precio;
  }
  body += "<tr>";
  body +="<td>&nbsp<ts>";
  body +="<td>Total<td>";
  body += "<td>$"+total+"<td>";
  body +="</tr>";
  body +="</tbody>";
  body +="</table>";
  
  document.getElementById("carritoCompras").innerHTML = body; 

  document.getElementById("carritoCompras").addEventListener("click", agregarCarrrito);