/* Buscador */

document.addEventListener("keyup", e => {

    if(e.target.matches("#buscador")) {
        document.querySelectorAll(".articulo").forEach(card => {
            card.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ? card.classList.remove("ocultar") : card.classList.add("ocultar")
        })
    }
})

/* CARDS */

document.getElementById("limpieza").addEventListener("click", ()=> {
    document.querySelectorAll(".vivienda").forEach(vivienda => {
        vivienda.classList.toggle("ocultar")
    })
    document.querySelectorAll(".comedor").forEach(comedor => {
        comedor.classList.toggle("ocultar")
    })
})

document.getElementById("comedor").addEventListener("click", () => {
    document.querySelectorAll(".vivienda").forEach(vivienda => {
        vivienda.classList.toggle("ocultar")
    })
    document.querySelectorAll(".limpieza").forEach(comedor => {
        comedor.classList.toggle("ocultar")
    })
})

document.getElementById("vivienda").addEventListener("click", () => {
    document.querySelectorAll(".comedor").forEach(vivienda => {
        vivienda.classList.toggle("ocultar")
    })
    document.querySelectorAll(".limpieza").forEach(comedor => {
        comedor.classList.toggle("ocultar")
    })
})

document.getElementById("todos").addEventListener("click", ()=> {
    document.querySelectorAll(".comedor").forEach(vivienda => {
        vivienda.classList.remove("ocultar")
    })
    document.querySelectorAll(".limpieza").forEach(comedor => {
        comedor.classList.remove("ocultar")
    })
    document.querySelectorAll(".vivienda").forEach(elemento => {
        elemento.classList.remove("ocultar")
    })
})

/* Ventana modal */

document.querySelectorAll(".boton-modal").forEach(modal => {
    modal.addEventListener("click", e => {
        e.preventDefault()
        document.getElementById("modal").classList.add("show-modal")
    })
})

document.getElementById("modal").addEventListener("click", e => {
    if(e.target.classList.contains("modal")) {
        document.getElementById("modal").classList.remove("show-modal")
    }
})