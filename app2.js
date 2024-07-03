//DEFINIR NUMERO ALEATORIO A TRAVES DE LA FUNCION GENERADORA
let numAleatorio=generarNumAleatorio();
let intentos=0;

//FUNCIÓN PARA ASIGNAR TEXTOS A LOS ELEMENTOS DE HTML
function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}
condicionesIniciales();

//FUNCION GENERADORA DE NUMERO ALEATORIO
function generarNumAleatorio(){
    return Math.floor(Math.random()*10 + 1);
}
console.log("Número aleatorio: " +numAleatorio);

//FUNCION PETICIÓN AL USUARIO DE NÚMERO
function peticionNumero(){
    let numUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log("Número de Usuario: " +numUsuario);
    intentos++;
        if (numUsuario==numAleatorio){
            asignarTextoElemento('p',`ACERTASTE EN ${intentos} ${(intentos==1 ? 'VEZ':'VECES')} `);
            document.getElementById('reiniciar').removeAttribute('disabled');//El m+étodo removeattribute elimina el atributo disabled del elemento boton Nuevo Juego que tiene el Id "reiniciar"
        } else{            
            console.log("intentos: " + intentos);
            if (numUsuario<numAleatorio){
                asignarTextoElemento('p','El número es mayor');                
            }else{
                if (numUsuario>numAleatorio){
                    asignarTextoElemento('p','El número es menor');
                    
                }
            }
            if (intentos==3){
                asignarTextoElemento('p','FALLASTE');
                document.getElementById('reiniciar').removeAttribute('disabled');
            }
            limpiarcaja();
        }
    }
    
//FUNCION PARA LIMPIAR CAJA
function limpiarcaja(){
    let valorCaja=document.querySelector('#valorUsuario');//El # lo usamos para llamar al elemento por Id
    valorCaja.value='';
}

//FUNCION PARA VOLVER A LAS CONDICIONES INICIALES
function condicionesIniciales(){
    asignarTextoElemento('h1','BIENVENIDO');
    asignarTextoElemento('p','Digita un número del 1 al 10');
    numeroSecreto=generarNumAleatorio();
    intentos=0;
}

//FUNCION PARA REINICIAR JUEGO
function reiniciarJuego(){
    //LIMPIAR CAJA
    limpiarcaja();
    //REINICIAR MENSAJES DE INICIO
    //GENERAR EL NÚMERO ALEATORIO
    //INICIALIZAR NÚMERO DE INTENTOS
    condicionesIniciales();
    //DESABILITAR EL BOTON DE NUEVO JUEGO
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
