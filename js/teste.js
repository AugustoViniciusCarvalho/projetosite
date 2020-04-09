window.onload = console.log(localStorage.getItem("e"));

let e = localStorage.getItem("e");

let imagem = document.getElementById("imagem");
imagem.src=`imagens/${e}hd.png`