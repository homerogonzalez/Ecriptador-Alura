function encriptar() {
    let texto = document.getElementById('mensaje').value;
    //onsole.log(texto);
    texto = texto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");   
    document.getElementById('mensaje2').innerHTML = texto;
    return;
}

function desencriptar() {
    let texto = document.getElementById('mensaje').value;
    texto = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");   
    document.getElementById('mensaje2').innerHTML = texto;
    return;
}

function copiar() {
    let texto2 = document.getElementById('mensaje2').innerHTML;
    navigator.clipboard.writeText(texto2);
    alert("Texto copiado al portapapeles: " + texto2)
    return;    
}

