let ToggleBG = document.querySelector(".fa-sun")
ToggleBG.addEventListener("click", () =>{
    ToggleBG.classList.toggle("fa-moon")
    document.querySelector("body").classList.toggle("active")
})

let ToggleSB = document.querySelector(".fa-bars")
ToggleSB.addEventListener("click", () =>{
    ToggleSB.classList.toggle("fa-xmark")
    document.querySelector("#Navul").classList.toggle("active") 
})