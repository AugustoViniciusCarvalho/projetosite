window.onload = console.log(localStorage.getItem("e"));

let e = localStorage.getItem("e");

let texto = document.getElementById("texto");
let imagem = document.getElementById("imagem");
imagem.src=`imagens/${e}hd.png`;
texto.src=`textos/${e}.txt`;