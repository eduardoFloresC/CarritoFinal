const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const productos = [{
        nombre: "Fantasmas",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate aliquid ratione aliquam, nisi labore fugiat illum, rerum laudantium cumque pariatur provident, minima tempore doloribus animi ipsam libero deleniti. Repellendus.",
        imagen: "media/fantasmas.jpg",
        precio: 5000
    },
    {
        nombre: "Cajas",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate aliquid ratione aliquam, nisi labore fugiat illum, rerum laudantiu",
        imagen: "media/sleeves.jpg",
        precio: 1500
    },
    {
        nombre: "Megatin",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate aliquid ratione aliquam, nisi labore fugiat illum, rerum laudantium cumque pariatur provident, minima",
        imagen: "media/lata.jpg",
        precio: 30000
    },
    {
        nombre: "Playmat",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate aliquid ratione aliquam, nisi labore fugiat illum, rerum lau",
        imagen: "media/magos.png",
        precio: 9000
    },
    {
        nombre: "Sobres",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate aliquid ratione aliquam, nisi labore fugiat illum, rerum laudantium cumque pariatur provident, minima",
        imagen: "media/sobres.jpg",
        precio: 6500
    }
]

let productosHTML = "";

for (let index = 0; index < productos.length; index++) {
    productosHTML += `
                <li>
                    <div class="curso">
                        <img src=${productos[index].imagen}
                        alt="foto imagen web">
                        <div class="curso-contenido cta">
                            <h2>${productos[index].nombre}</h2>
                            <h3>Precio $${productos[index].precio}</h3>
                            <p></p>
                            <a href="">Ver + info</a>
                            <input class="boton-agregar-carrito" type="button" value="Agregar al Carrito">
                        </div>
                    </div>
                </li>
    `;

};
const contenedorProductos = document.getElementById("contenedorProductos");

contenedorProductos.innerHTML = productosHTML;

const btnAgregar = document.querySelectorAll(".boton-agregar-carrito");

const listaCarrito = document.querySelector("#carrito ul");

const totalCarrito = document.querySelector("#carrito p");

let totalAPAgar = 0;
const mensajePagarCarrito = document.getElementById("mensajeCarrito");
for (let index = 0; index < btnAgregar.length; index++) {

    function agregarElemCarrito() {
        const elementoLi = document.createElement("li");
        elementoLi.innerText = `Producto ${productos[index].nombre} $${productos[index].precio}`;
        listaCarrito.appendChild(elementoLi);

        totalAPAgar += productos[index].precio;
        console.log(totalAPAgar);
        totalCarrito.innerText = "Total a Pagar. $" + totalAPAgar;
        mensajePagarCarrito.innerText = "";
    }
    btnAgregar[index].addEventListener("click", agregarElemCarrito)

}

const botonBorrar = document.querySelector("#boton-borrar");



function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalCarrito.innerText = "Total a Pagar. $0";
    mensajePagarCarrito.innerText = "";
}

botonBorrar.addEventListener("click", borrarCarrito);

const botonPagar = document.querySelector("#boton-pagar");

function pagarCarrito() {
    if (listaCarrito.innerText === "") {
        mensajePagarCarrito.innerText = "No has seleccionado ningun producto";
    } else {
        window.location.href = "./pagos.html"
    }

}

botonPagar.addEventListener("click", pagarCarrito);