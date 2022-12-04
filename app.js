let openMenuBtn = document.getElementById("openMenu");
let closeMenuBtn = document.getElementById("closeMenu");

let sidebar = document.getElementById("sidebar");

let btnEliminar = document.getElementsByClassName("eliminar");





let openMenu = (e)=>{
    console.log(e)
    sidebar.classList.remove("hidden");
    openMenuBtn.classList.add("displayNone");
    closeMenuBtn.classList.remove("displayNone");
    document.body.classList.add("bodyFullScreen")
}






openMenuBtn.addEventListener("click", openMenu)




let closeMenu = (e)=>{
    console.log(e)
    
    openMenuBtn.classList.remove("displayNone");
    closeMenuBtn.classList.add("displayNone");
    sidebar.classList.add("hidden");
    document.body.classList.remove("bodyFullScreen");
}

closeMenuBtn.addEventListener("click", closeMenu);




let eliminarTarjeta = (e)=>{
    let cardsGridElement=e.path[4];
    let cardElement = e.path[3]
    cardsGridElement.removeChild(cardElement)
    
};


for(let item of btnEliminar){
item.addEventListener("click", eliminarTarjeta);
}