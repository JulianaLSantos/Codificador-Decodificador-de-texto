

document.addEventListener('DOMContentLoaded', function() {
    const linkCodificar = document.getElementById('linkCodificar');
    const linkDecodificar = document.getElementById('linkDecodificar');



linkCodificar.onclick = function() {
    const textoInput = document.getElementById('inputTextCodificar').value;
    const textoCodificado = codificar(textoInput);
    document.getElementById('output').innerText = textoCodificado;
};

linkDecodificar.onclick = function() {
    const textoInputDecodificar = document.getElementById('inputTextDecodificar').value;
    const textoDecodificado = descriptografar(textoInputDecodificar);
    document.getElementById('output').innerText = textoDecodificado;
};

function codificar(texto) {
let letraSecreta = '';
for (let i = 0; i < texto.length; i++) {
switch (texto[i].toLowerCase()) {
    case 'e':
    letraSecreta += 'enter';
    break;
    case 'i':
    letraSecreta += 'imes';
    break;
    case 'a':
    letraSecreta += 'ai';
    break;
    case 'o':
    letraSecreta += 'ober';
    break;
    case 'u':
    letraSecreta += 'ufat';
    break;
    default:
    letraSecreta += texto[i];
}
}
return letraSecreta;
}


function descriptografar(texto) {
    let resultado = "";
    let i = 0;
    while (i < texto.length) {
        if (texto.slice(i, i + 5) === "enter") {
            resultado += "e";
            i += 5;
        } else if (texto.slice(i, i + 4) === "imes") {
            resultado += "i";
            i += 4;
        } else if (texto.slice(i, i + 2) === "ai") {
            resultado += "a";
            i += 2;
        } else if (texto.slice(i, i + 4) === "ober") {
            resultado += "o";
            i += 4;
        } else if (texto.slice(i, i + 4) === "ufat") {
            resultado += "u";
            i += 4;
        } else {
            resultado += texto[i];
            i++;
        }
    }
    return resultado;

}
});