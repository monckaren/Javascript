//Se creo este archivo JS igual a contador.js para utilizar el mismo codigo del contador sin alterar el procedimiento comentando addTable()

//Contador del carrito de compras (aparece debajo del dibujo del carrito)
//CANTIDAD DE PRODUCTOS

//cargar prendas de la local storage
//CON ESTO SE OBTIENEN LAS PRENDAS AÑADIDAS
function cargarPrendas2(){
    console.log("cargado");
    let itemsForCart= JSON.parse(localStorage.getItem("clothesForCart"));
   
    actualizarContador()
    //AddTable();
    return itemsForCart;
    
}

//ejecuta las funciones
cargarPrendas2();


//Se buscan las prendas por id
function buscarPrendas (id){
    let prendas = cargarPrendas2();
    return prendas.find(x => x.id == id);
}

//Agrega las prendas al carrito
function agregarCarrito(id){
    let prenda = buscarPrendas(id);
    let prendas2 = cargarCarrito();
    prendas2.push(prenda);
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

function actualizarContador (){
  
   let total = 0;
    let itemsInCart=JSON.parse(localStorage.getItem("clothesForCart"));

    if(!itemsInCart){
        itemsInCart = [];
    }
  
    const sumaTotal = itemsInCart.reduce( (p1, p2) => ({quantity: p1.quantity + p2.quantity}));
    console.log(sumaTotal);
  

    let contador = document.getElementById("datosCarrito");
    contador.innerHTML = "<p>" + sumaTotal.quantity+ " producto(s) </p>"
}