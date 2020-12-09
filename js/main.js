//Objetos

class producto {
    constructor(nombre, codigo, precio) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }
    agregar_producto(numero_producto) {
        if (numero_producto == this.codigo) {
            return "Selección: " + this.nombre + " $ " + this.precio;
        }
    }
}

//Productos

var producto01 = new producto("Soporte de Auriculares", 1, 600);
var producto02 = new producto("Mate Darth Vader", 2, 750);
var producto03 = new producto("Mate Baby Groot", 3, 750);
var producto04 = new producto("Cortantes para Galletas", 4, 600);
var producto05 = new producto("Mate Robocop", 5, 950);
var producto06 = new producto("Organizador de Pared", 6, 600);
var producto07 = new producto("Mate Baby Groot II", 7, 850);
var producto08 = new producto("Mate Terminator", 8, 850);
var producto09 = new producto("Mate Death Star", 9, 750);
var producto10 = new producto("Muñeco Among Us", 10, 600);
var producto11 = new producto("Portaretrato de Pared", 11, 600);
var producto12 = new producto("Organizador Stormtrooper", 12, 850);

//Lista de Productos

let lista_productos = [];

lista_productos.push(producto01);
lista_productos.push(producto02);
lista_productos.push(producto03);
lista_productos.push(producto04);
lista_productos.push(producto05);
lista_productos.push(producto06);
lista_productos.push(producto07);
lista_productos.push(producto08);
lista_productos.push(producto09);
lista_productos.push(producto10);
lista_productos.push(producto11);
lista_productos.push(producto12);

console.log(lista_productos.length);

//Buscar productos

let critero_busqueda = prompt ("Buscar: ");
for (let producto of lista_productos) {
    for(let codigo in producto){
        if(producto[codigo] == critero_busqueda) {
            alert ("Producto encontrado: " + producto.codigo + " - " + producto.nombre)
        }
    }
}

//Elegir productos

let elegir_producto = prompt("Seleccionar producto");

//Función

function seleccionar_producto(numero_producto) {
    switch (numero_producto) {
        case "1":
            alert(producto01.agregar_producto(numero_producto));
            break;
        case "2":
            alert(producto02.agregar_producto(numero_producto));
            break;
        case "3":
            alert(producto03.agregar_producto(numero_producto));
            break;
        case "4":
            alert(producto04.agregar_producto(numero_producto));
            break;
        case "5":
            alert(producto05.agregar_producto(numero_producto));
            break;
        case "6":
            alert(producto06.agregar_producto(numero_producto));
            break;
        case "7":
            alert(producto07.agregar_producto(numero_producto));
            break;
        case "8":
            alert(producto08.agregar_producto(numero_producto));
            break;
        case "9":
            alert(producto09.agregar_producto(numero_producto));
            break;
        case "10":
            alert(producto10.agregar_producto(numero_producto));
            break;
        case "11":
            alert(producto11.agregar_producto(numero_producto));
            break;
        case "12":
            alert(producto12.agregar_producto(numero_producto));
            break;
        default:
            alert("El producto seleccionado es incorrecto");
            break;
    }
}

//Bucle

while (elegir_producto != "ESC") {
    seleccionar_producto(elegir_producto);
    elegir_producto = prompt("Seleccionar producto");
}