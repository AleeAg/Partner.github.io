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