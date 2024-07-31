//Primero declaramos las variables con las letras a codificar
let letraA = 'ai';
let letraE = 'enter';
let letraI = 'imes';
let letraO = 'ober';
let letraU = 'ufat';
let texto;

//una funcion donde traemos el texto para convertir
function encriptarTxt() {
    //Una variable en donde con el click traiga la info y la encripte
    texto = document.getElementById('encriptar').value;
    texto = texto.replace(/e/gi, letraE);
    texto = texto.replace(/i/gi, letraI);
    texto = texto.replace(/a/gi, letraA);
    texto = texto.replace(/o/gi, letraO);
    texto = texto.replace(/u/gi, letraU);
    console.log(`Texto encriptado: ${texto}`);

    //tomo lo que se encuentra en value y lo igualo a lo convertido en texto
    document.getElementById('encriptado').value = texto;


    limpiarCaja();


    //Se solicita que ingrese un texto
    if (texto === "") {
        alert("Por favor, Ingrese texto");
        return;
    }
}

//Falta crear el pase para que el texto encriptado se desencripte
function desencriptarTxt() {
    let texto = document.getElementById('encriptar').value;
    texto = texto.replace(new RegExp(letraA, 'g'), 'a');
    texto = texto.replace(new RegExp(letraE, 'g'), 'e');
    texto = texto.replace(new RegExp(letraI, 'g'), 'i');
    texto = texto.replace(new RegExp(letraO, 'g'), 'o');
    texto = texto.replace(new RegExp(letraU, 'g'), 'u');



    //tomo lo que se encuentra en value y lo igualo a lo convertido en texto
    document.getElementById('encriptar').value = texto;

}


//limpio el primer campo
function limpiarCaja() {
    document.querySelector('#encriptar').value = '';
}

//Boton copiar
function copiartexto(){
    let encriptado = document.getElementById('encriptado').value;
    let btnCopiar = document.getElementById('copiar');
    navigator.clipboard.writeText(encriptado).then.catch;
    btnCopiar.textContent= 'Texto copiado';
}

