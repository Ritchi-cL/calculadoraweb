/*
    Función para que al clickear el button el navegador seleccione el número presionado
    en el input text 
*/

function valor(x) {
    document.getElementById("display").value += x;
}

function borrarDisplay(y) {
    document.getElementById("display").value = y;
}

function calculoResultado() {
    var resultados = eval(document.getElementById("display").value);
    document.getElementById("display").value = resultados;
}