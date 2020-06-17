window.onload = console.log(localStorage.getItem("e"));

let e = localStorage.getItem("e");

let texto = document.getElementById("texto");
let imagem = document.getElementById("imagem");
imagem.src = `Artistas Imagens/${e}.png`;
texto.src=`Artistas textos/${e}.txt`;

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
    window.location.href="artistas.html"
}