"use strict";

fetch('https://fakestoreapi.com/products')
.then(resp => resp.json())
.then(data => {
    
    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    let crearCard = (producto) => {
        let card = document.createElement("div");
        card.classList.add("producto");

        let title = document.createElement("h2");
        title.innerHTML = `${producto.title}`;
        card.appendChild(title);

        let imagen = document.createElement("img");
        imagen.classList.add("imagen")
        imagen.src = `${producto.image}`;
        card.appendChild(imagen);
        
        let listadoDatos = document.createElement("ul");
        for (let key in producto) {
            if (key !== "title" && key !== "image" && key !== "rating") {
                let listItem = document.createElement("li");
                listItem.innerHTML = `${key}: ${producto[key]}`;
                listadoDatos.appendChild(listItem);
            }
        }
        card.appendChild(listadoDatos);
        contenedor.appendChild(card);
    };
    for (let i = 0; i < data.length; i++) {
            crearCard(data[i]);
    }
    document.body.appendChild(contenedor);
})
.catch(err => console.log(err));
