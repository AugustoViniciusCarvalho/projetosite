window.onload = console.log(localStorage.getItem("e"));

let e = localStorage.getItem("e");

let botao = document.getElementsByClassName("botao")[0];
let texto = document.getElementById("texto");
let imagem = document.getElementById("imagem");
let imgdemo1 = document.getElementById("imgdemo1");
imgdemo1.src = `imagens/${e}.png`;
imagem.src = `Artistas Imagens/${e}.png`;
texto.data=`Artistas textos/${e}.txt`;
botao.id = `${e}`;
console.log(botao.id);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function tipo(t){
    console.log(localStorage.setItem("t", t.target.id));
    window.location.href="artistas.html";
}

function textos(te){
  console.log(localStorage.setItem("te", te.target.id));
  window.location.href="textosdramaturgicos.html";
}

function vermais(i){
  console.log(localStorage.setItem("i", i.target.id));
  window.location.href="galeriadoartista.html";
}