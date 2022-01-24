//Lista de productos 
const prendas = [
{nombre:"Campera White", imagen: "ary-milligan-nLVyej-i2N4-unsplash.jpg", precio:"5800"},
{nombre: "Remera Black Slim Fit", imagen: "ian-dooley-1yl3jzKoKXg-unsplash.jpg", precio:"2300" },
{nombre: "Jean Slim Fit", imagen: "vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg", precio:"4800" },
{nombre: "Jean Holgado Claro ", imagen: "hans-isaacson-QJfXnkKrtlo-unsplash.jpg", precio:"5300" },
{nombre: "Jean Roto con Parches", imagen: "alicia-petresc-BciCcl8tjVU-unsplash.jpg", precio:"4300" },
{nombre: "Blazer Black", imagen: "joshua-rondeau-3_sGB2ON4X0-unsplash.jpg", precio:"4600" },
]
//Defino las variables 
class ropa {
    constructor (denim){
        this.nombre = denim.nombre;
        this.precio = denim.precio;
        this.imagen = denim.imagen;
        this.descuento = 0.85;
        this.iva = 1.21;}
        //calculo del precio con descuento 
        aplicarDescuento(){ 
            return (this.precio * this.descuento)};
        
           
        
    }

//Se guardan los productos en la local storage
function guardarPrendas (prendas){
    localStorage.setItem("prendas", JSON.stringify(prendas));
    console.log("las prendas fueron guardadas correctamente");
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
for (let prendaCargada of prendasCargadas) {
    
    let Ropa = new ropa(prendaCargada);
   
    contenido += " <div class=' card p-2 g-4' style='width: 15rem;'>";
    contenido += "<h3 class='card-tittle fs-3 text-danger'> -15%</h3>";
    contenido += "<img src='/Images/"+Ropa.imagen +"' class='card-img-top' alt='"+Ropa.nombre +"'>";
    contenido += "<div class='card-body'>";
    contenido += "<h5 class='card-title '>"+Ropa.nombre+"</h5>";
    contenido += "<div class='row mb-2'>";
    contenido += "<div class=' card-text text-muted text-decoration-line-through'><span>$" +Ropa.precio+"</span></div>";
    contenido += "<div class=' card-text'><span>"+Ropa.aplicarDescuento()+"</span></div>";
    contenido += "<div class=' card-text bg-dark text-light'><span>6 cuotas sin interes</span></div>";
    contenido += "</div>";
    contenido += "<button type='button' class='btn btn-light btn-outline-dark btn-md id='boton-agregar''>Agregar</button>";
    contenido += "</div>";
    contenido += "</div>";
 
 
}


//Se cargan las cards con la info de los productos al HTML
let prendasOferta = document.getElementById("prendas");
prendasOferta.innerHTML = contenido;

/*let boton = document.getElementById("boton-agregar");
boton.onclick = () => {
var contenido = "<p class='alert bg-dark '> Se agrego "+ropa.nombre+" al carrito </p>";
document.getElementById("boton-agregar").innerHTML = contenido;
}*/


