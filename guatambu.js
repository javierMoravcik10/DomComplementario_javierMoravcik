let choice;  
let productos = [
    {
        id: 1,
        article: "Longboard",
        color: "Azul",
        state: "Fallado"
    },
];

const article = [
    "Mochila.",
    "Campera.",
    "Boxer.",
    "Jeans.",
];

const states = [
    "En proceso.",
    "Revisando detalles.",
    "Finalizado.",
    "Compra cancelada."
];






while(choice !== 4) {
    choice = Number(prompt("Elija una opción para:\n1) Sumar articulo. (➕)\n2) Visualizar compra. (👀)\n3) Eliminar articulo. (❌)\n4) Salir. (🔚)"));

    switch(choice) {
        case 1:
            const article = Number(prompt("Elija el tipo de articulo que desea agregar a su compra:\n 1) Mochila.\n 2) Campera. \n 3) Boxer. \n 4) Jeans."));
            const color = prompt("Elija en que color desea obtener su articulo: ");
            const state = Number(prompt("Ingresa en que estado se encuentra su compra:\n 1) En proceso. \n 2) Revisando detalles. \n 3) Finalizado. \n 4) Compra cancelada."));
            const initId = getLastID() + 1;
                addProducto(initId, article, color, state);
                 
           break;
        case 2:
                getAllProductos();
           break;
        case 3:
            let deletId = Number(prompt("Elija el numero del ID que desea eliminar: "));
                deleteProductos(deletId);
            break;
        case 4:
            alert("Gracias por su visita al sitio web Guatambú, lo esperamos nuevamente en otra ocasión");
            break;
        default:
            alert("Por favor, elija una opcion valida");
           break;
    }
}

function addProducto(id, article, color, state) {
    productos.push({
        id,
        article,
        color,
        state: states[state - 1]
    });
} 

function getAllProductos() {
    // console.log("\n");
    // productos.forEach((producto) => console.log(producto.id +" - "+ article[producto.article - 1]+" - "+ producto.color+" - "+producto.state));
    const menues = document.getElementById("menues");

    for (producto of productos){
        const item = document.createElement("li");
        item.innerHTML = `<h2>${producto.article}</h2>
        <p>${producto.color}</p>
        <p>${producto.state}</p>` 
        menues.append(item);
    }
}

function deleteProductos(id){
    productos = productos.filter(producto => producto.id != id);
}

function getLastID() {
    return productos.length;
}





        // MODIFICANDO EL HTML DESDE JS Y CAMBIANDO EL TEXTO DESDE JS

const h3Producto = document.querySelector("#desdeJs");
// h3Producto.innerText = "Producto: desde Js(DOM)";
h3Producto.innerHTML = "<i>Producto: desde JS con (innerHTML)</i>";

const folder1 = document.querySelector("#Folder");
folder1.textContent = "Modificando el texto desde JS (DOM)";

// MODIFICANDO EL HTML DESDE JS Y CAMBIANDO EL TEXTO DESDE JS



        // TOMANDO VALOR POR ENTRADA Y MODIFICANDO EL HTML SEGUN VALOR INGRESADO


const modificar = document.getElementsByClassName("h3Categorias");
console.log(modificar);

for (el of modificar) {
    if(el.innerText == "CATEGORIAS"){
        const entrada = prompt("Escriba Categorias.Guatambu u otro texto para verlo reflejado");
        el.innerText = entrada;
    }
}


        // TOMANDO VALOR POR ENTRADA Y MODIFICANDO EL HTML SEGUN VALOR INGRESADO
