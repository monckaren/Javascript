//Array
/*const categoriasDisponibles = ["Zapatos", "Remeras", "Pantalones", "Accesorios"];
categoriasDisponibles.sort();
alert("Bienvenida/o, aca podes encontrar "+categoriasDisponibles.length +" tipos de categorias para agilizar tu compra");
console.log("Cantidad de categorias: "+categoriasDisponibles.length);
console.log("Categorias: "+ categoriasDisponibles.toString());


//Se definen las constantes 
const constantes = {
    iva : 1.21,
    minProductos : 3,
    descuento : 0.15,
};

//Imprime las constantes
console.log (constantes);

//Defino variables 
let variables = {
    nombre : prompt ("Ingrese el nombre del producto: "),
   precio : parseFloat(prompt("Ingrese el precio: ")),
   cantidad : parseInt(prompt("Ingrese la cantidad de productos a comprar: ")),

};

//Imprime el nombre del producto
let nombre = console.log ("Nombre del producto: " +variables.nombre);
//Imprime el precio del producto
let precio = console.log("Precio:" +variables.precio);
//Imprime la cantidad del producto
let cantidad = console.log("Cantidad: "+variables.cantidad);

// Se Verifica que la cantidad de producto a ingresar sea mayor a 3
while (variables.cantidad < constantes.minProductos){

    alert ("Debe ingresar 3 producto o mas");
    variables.cantidad = parseInt(prompt("Ingrese la cantidad de productos a comprar: "));
    
}

//Calculo del precio total a pagar
class total_a_pagar{
    constructor(precio, cantidad){
    
    //llamo a los valores de cada constructor
    this.precio = precio;
    this.cantidad = cantidad;
    this.iva = constantes.iva;
    this.descuento = constantes.descuento; }
    //Calculos a efectuar
    get calcsinIva(){
         return this.sinIva()}
    sinIva(){
        return  this.precio * this.cantidad
         }
      
    get calcconIva()  {
       return this.conIva()}
    conIva() { return this.precio * this.cantidad * this.iva};
    get calcconDescuento() {
      return this.conDescuento()}
    conDescuento(){
      return (this.precio * this.cantidad * this.iva) - (this.precio * this.cantidad * this.iva * this.descuento)};
    }

 let objTotal = new total_a_pagar (variables.precio, variables.cantidad);  
 
 if (objTotal.cantidad <= 10 ) {
        
    alert("La cantidad de productos: " + objTotal.cantidad);
    //alert("No aplica descuento");
    console.log("No aplica el descuento");
    //precio sin iva 
   alert("El precio sin IVA es: "+ objTotal.calcsinIva);
   console.log ("El precio sin IVA es: "+objTotal.calcsinIva);
   console.log("El precio con IVA es: "+objTotal.calcconIva);
   alert("El precio con IVA es: "+objTotal.calcconIva);
    
    
} else {

    alert("La cantidad de productos: " + objTotal.cantidad);
    alert("Si aplica descuento");
    console.log("Si aplica el descuento");
    
    //imprime el precio sin iva
    console.log( "El total sin IVA es: "+objTotal.calcsinIva);
    //precio con iva
     //imprime el precio con iva
    console.log( "El total con IVA es: "+objTotal.calcconIva);
  
     //imprime el precio con descuento
    console.log( "El total con descuento es: "+objTotal.calcconDescuento);
    alert("El total con descuento es: "+objTotal.calcconDescuento);
}*/
    

   


