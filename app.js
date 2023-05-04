const productos = [
    {nombre: "televisor", precio: 100000},
    {nombre: "computadora", precio: 200000},
    {nombre: "telefono", precio: 300000},
    {nombre: "monitor", precio: 50000}
]

let carrito = []

let seleccion = prompt("Bienvenido a la tienda. Desea comprar algun producto? Digite si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("porfavor ingrese si o no en minusculas")
    seleccion = prompt("Bienvenido a la tienda. Desea comprar algun producto? Digite si o no")
}

if(seleccion == "si"){
    alert("A continuacion nuestra lista de productos:")
    let todosLosProductos = productos.map((producto) => producto.nombre + " $"+ producto.precio)
    alert(todosLosProductos.join(" - "))
}   else if (seleccion == "no"){
    alert("Gracias por visitar nuestra tienda!")
}

while(seleccion != "no"){
    let producto = prompt("agregue un producto a su carrito")
    let precio = 0

    if(producto == "televisor" || producto == "computadora" || producto == "monitor" || producto == "telefono"){
        switch(producto){
            case "televisor":
                precio = 100000;
                break;
            case "computadora":
                precio = 200000;
                break;
            case "monitor":
                precio = 50000;
                break;
            case "telefono":
                precio = 300000;
                break;
            default:
                break;

        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por elegirnos")
        carrito.forEach((carritoFinal) =>{
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acumulado, el) => acumulado + el.precio * el.unidades, 0)
alert(`el total a pagar por su compra es: ${total}`)