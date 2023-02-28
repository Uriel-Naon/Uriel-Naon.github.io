
const tabs = document.querySelectorAll ("[data-tab-selector]")
const tabContents = document.querySelectorAll("[data-tab-contenido]")

tabs.forEach( tab => {
    tab.addEventListener("click", () => {
        const selector = document.querySelector(tab.dataset.tabSelector)
        tabContents.forEach(tabContents => {
            tabContents.classList.remove("activo")
        })
        tabs.forEach(tab => {
            tab.classList.remove("activo")
        })
        tab.classList.add("activo")
            selector.classList.add("activo")
    })
})