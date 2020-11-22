function pesquisar() {
    var input, filtro, ul, li, a, i, texto;
    input = document.getElementById("input");
    filtro = input.value.toUpperCase();
    ul = document.getElementById("textos");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        texto = a.textContent || a.innerText;
        if (texto.toUpperCase().indexOf(filtro) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunctionGaleria() {
  document.getElementById("myDropdownGaleria").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns1 = document.getElementsByClassName("dropdown-content");
    var dropdowns2 = document.getElementsByClassName("dropdown-contentGaleria");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown = dropdowns1[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown = dropdowns2[i];
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

function tipoGaleria(t){
console.log(localStorage.setItem("t", t.target.id));
window.location.href="galeria.html";
}

function info(e){
  console.log(localStorage.setItem("e", e.target.id));
  window.location.href="dramaturgiainfo.html"
}