var nombre;
//Busca la variable en el cache
document.getElementById("mostrar").innerHTML = localStorage.getItem("nombre");

function enviar(){
    nombre = document.getElementById("name").value
    //Guarda la variable en el cache
    localStorage.setItem("nombre", nombre);
    //Redirige a otra página
    window.location.href = "otraPagina.html";
}