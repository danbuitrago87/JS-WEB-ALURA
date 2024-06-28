//DEFINIR NUMERO ALEATORIO
let numAleatorio=generarNumAleatorio();

//FUNCIÓN PARA ASIGNAR TEXTOS A LOS ELEMENTOS DE HTML
function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
asignarTextoElemento('h1','BIENVENIDO');
asignarTextoElemento('p','Digita un número del 1 al 10');

//FUNCION GENERADORA DE NUMERO ALEATORIO
function generarNumAleatorio(){
    return Math.floor(Math.random()*10 + 1);
}
console.log(numAleatorio);