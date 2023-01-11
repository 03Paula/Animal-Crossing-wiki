const colorSwitch = document.querySelector('button[type="button"]');
var imagen = document.getElementById('imagenTema');

function cambiarTema(){
    if (document.documentElement.getAttribute("tema") == "claro"){
        document.documentElement.setAttribute("tema","oscuro");
    }
    else{
        document.documentElement.setAttribute("tema","claro");
    }
}

colorSwitch.addEventListener("click", cambiarTema)

