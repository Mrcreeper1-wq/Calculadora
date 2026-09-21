let pantalla = document.getElementById("pantalla");

function Agregar(dato){
    pantalla.value += dato;
}
function Eliminar(dato){
    pantalla.value = "";
}
function Calcular(){
    pantalla.value = eval(pantalla.value);
}