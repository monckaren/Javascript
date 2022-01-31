//Lista de productos 
const prendas = [
{id:1, nombre:"Campera White", imagen: "ary-milligan-nLVyej-i2N4-unsplash.jpg", precio:"5800", quantity: 0},
{id:2, nombre: "Remera Black Slim Fit", imagen: "ian-dooley-1yl3jzKoKXg-unsplash.jpg", precio:"2300", quantity:0 },
{id:3, nombre: "Jean Slim Fit", imagen: "vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg", precio:"4800", quantity:0 },
{id:4, nombre: "Jean Holgado Claro ", imagen: "hans-isaacson-QJfXnkKrtlo-unsplash.jpg", precio:"5300", quantity:0 },
{id:5, nombre: "Jean Roto con Parches", imagen: "alicia-petresc-BciCcl8tjVU-unsplash.jpg", precio:"4300", quantity:0 },
{id:6, nombre: "Blazer Black", imagen: "joshua-rondeau-3_sGB2ON4X0-unsplash.jpg", precio:"4600", quantity:0 },
]

//Se guardan los productos en la local storage
function guardarPrendas (prendas){
    localStorage.setItem("prendas", JSON.stringify(prendas));
    console.log("las prendas fueron guardadas correctamente");
}

//Se guardan los productos para el carrito

//AÑADIR ELEMENTOS AL CARRITO
function addElsForCart(prenda){
    // Parse any JSON previously stored in allEntries
 
    let clothesArr = JSON.parse(localStorage.getItem("clothesForCart"));
    if(clothesArr == null) clothesArr = [];
    if(clothesArr.some(x=> x.id===prenda.id)){
        let index=clothesArr.findIndex(x=>x.id===prenda.id);
        clothesArr[index].quantity+=1; 
       
    }else{
        prenda.quantity=1;
        clothesArr.push(prenda);
    }
    // Save allEntries back to local storage
    localStorage.setItem("clothesForCart", JSON.stringify(clothesArr));
    cargarPrendas2();
}


//Se cargan los productos de la local storage
function cargarPrendas (){
    console.log("Las prendas fueron cargadas correctamente");
    return JSON.parse (localStorage.getItem("prendas"));
}

guardarPrendas(prendas);
let prendasCargadas = cargarPrendas();
console.log(prendasCargadas);
let contenido = "";


//Se genera el codigo HTML para cargar las cards con la info de los productos 
for (let prenda of prendas) {

  
    contenido += " <div class=' card p-2 g-4' style='width: 15rem;'>";
    contenido += "<h3 class='card-tittle fs-3 text-danger'> -15%</h3>";
    contenido += "<img src='../Images/"+prenda.imagen +"' class='card-img-top' alt='"+prenda.nombre +"'>";
    contenido += "<div class='card-body'>";
    contenido += "<h5 class='card-title '>"+prenda.nombre+"</h5>";
    contenido += "<div class='row mb-2'>";
    contenido += "<div class=' card-text text-muted text-decoration-line-through'><span>$" +prenda.precio+"</span></div>";
    contenido += "<div class=' card-text'><span>"+prenda.precio*0.85+"</span></div>";
    contenido += "<div class=' card-text bg-dark text-light'><span>6 cuotas sin interes</span></div>";
    contenido += "</div>";
    contenido += "<div>";
    //EVENTO PARA EL BOTON, AL HACER CLICK SE EJECUTA ADD ELEMENT
    contenido += "<button type='button' class='btn btn-dark  btn-md ' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasRight' aria-controls='offcanvasRight'Toggle right offcanvas id='boton-agregar"+prenda.id+"' onclick=addElement("+prenda.id+")>Agregar</button>";
    contenido += "<div class='offcanvas offcanvas-end' tabindex='-1' id='offcanvasRight' aria-labelledby='offcanvasRightLabel'>";
    contenido += "<div class='offcanvas-header'>";
    contenido += "<h5 id='offcanvasRightLabel'>Carrito</h5>";
    contenido += "<button type='button' class='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close'></button>";
    contenido += " </div>"
    contenido += "<div class='offcanvas-body'>";
    contenido += `
                <table id="lista-carrito" class="tableOffCanvas">
                <thead>
                <tr>
                    <th>Imagen </th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th></th>
                </tr>
                    </thead>
                    <tbody></tbody>
                </table>

                <a href="#" id="vaciar-carrito" class="btn btn-primary btn-block">Vaciar Carrito</a>
                <a href="#" id="procesar-pedido" class="btn btn-danger btn-block">Procesar
                    Compra</a>`
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";
 
}

//Se cargan las cards con la info de los productos al HTML
let prendasOferta = document.getElementById("prendas");
prendasOferta.innerHTML = contenido;


function addElement(prendaId){
    //let elToAdd=prendas.find(x => x.id === prenda);
    let elToAdd= prendas.find(function(x){
       return x.id===prendaId;
    })
  
    addElsForCart(elToAdd);
}

