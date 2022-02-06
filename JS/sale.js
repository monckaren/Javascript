//Lista de productos 
const prendas = [
    {id:1, nombre:"Campera White", imagen: "ary-milligan-nLVyej-i2N4-unsplash.jpg", precio:"5800", quantity: 0},
    {id:2, nombre: "Remera Black Slim Fit", imagen: "ian-dooley-1yl3jzKoKXg-unsplash.jpg", precio:"2300", quantity:0 },
    {id:3, nombre: "Jean Slim Fit", imagen: "vladimir-fedotov-MPfyh3xJ1iE-unsplash.jpg", precio:"4800", quantity:0 },
    {id:4, nombre: "Jean Holgado Claro ", imagen: "hans-isaacson-QJfXnkKrtlo-unsplash.jpg", precio:"5300", quantity:0 },
    {id:5, nombre: "Jean Roto con Parches", imagen: "alicia-petresc-BciCcl8tjVU-unsplash.jpg", precio:"4300", quantity:0 },
    {id:6, nombre: "Blazer Black", imagen: "joshua-rondeau-3_sGB2ON4X0-unsplash.jpg", precio:"4600", quantity:0 },
    ]
    
    
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
        contenido += "<button type='button' class='btn btn-dark  btn-md ' type='button'  id='boton-agregar"+prenda.id+"' onclick=addElement("+prenda.id+")>Agregar</button>";
        
        contenido += "</div>";
        contenido += "</div>";
        contenido += "</div>";
     
    }
    
    //Se cargan las cards con la info de los productos al HTML
    let prendasOferta = document.getElementById("prendas");
    prendasOferta.innerHTML = contenido;
    
    
    function addElement(prendaId){
        let elToAdd= prendas.find(function(x){
           return x.id===prendaId;
        })
      
        addElsForCart(elToAdd);
    }
    
    
//Animacion para mostrar las prendas 
$("#btnSale").click(() =>{
   $(".prendasSale").fadeIn("fast"); 
   $("#btnSaleUp").show("fast");
});

$("#btnSaleUp").click(() => {
    $(".prendasSale").fadeOut("slow"); 
    $("#btnSaleUp").hide("fast");
})

$("#btnSaleUp").css({
    "margin-top": "20px",
    
});