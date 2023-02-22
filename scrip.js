function encriptar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var desplazamiento = 3; // Número de posiciones para desplazar
  
    var texto_cifrado = "";
    for (var i = 0; i < texto.length; i++) {
      var letra = texto[i];
      // Solo se encriptan letras minúsculas
      if (letra.match(/[a-z]/i)) {
        var codigo_ascii = texto.charCodeAt(i);
        var codigo_ascii_cifrado = ((codigo_ascii - 97 + desplazamiento) % 60) + 97;
        var letra_cifrada = String.fromCharCode(codigo_ascii_cifrado);
        texto_cifrado += letra_cifrada;
      } else {
        texto_cifrado += letra;
      }
    }
  
    document.getElementById("texto-cifrado").innerHTML = "Texto cifrado: " + texto_cifrado;
  }
  