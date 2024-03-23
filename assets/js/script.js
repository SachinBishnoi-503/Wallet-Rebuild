
let toggle_box = document.querySelector(".toggle-circle")

toggle_box.addEventListener("click", function () {
    toggle_box.classList.toggle("toggle-circle-right")
})


let menuicons = document.querySelector(".menuicon")
let navlist = document.querySelector(".nav-items")

menuicons.addEventListener("click", () => {
    navlist.classList.toggle("show");
})
