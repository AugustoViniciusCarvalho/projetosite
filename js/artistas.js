function info(e) {
  console.log(localStorage.setItem("e", e.target.id));
  window.location.href = "artistasinfo.html"
}

window.onload = console.log(localStorage.getItem("t"));

let t = localStorage.getItem("t");

if (t == "todos") {
  $("div.diretor").show();
  $("div.ator").show();
  $("div.dramaturgo").show();
  $("div.pesquisador").show();
  $("div.produtor").show();
} else if (t == "diretor") {
  $("div.diretor").show();
  $("div.ator").hide();
  $("div.dramaturgo").hide();
  $("div.pesquisador").hide();
  $("div.produtor").hide();

  sumir("div.dramaturgo");
  sumir("div.ator");
  sumir("div.pesquisador");
  sumir("div.produtor");
  sumir("span.dramaturgo");
  sumir("span.ator");
  sumir("span.pesquisador");
  sumir("span.produtor");

} else if (t == "ator") {
  $("div.diretor").hide();
  $("div.ator").show();
  $("div.dramaturgo").hide();
  $("div.pesquisador").hide();
  $("div.produtor").hide();

  sumir("div.dramaturgo");
  sumir("div.diretor");
  sumir("div.pesquisador");
  sumir("div.produtor");
  sumir("span.dramaturgo");
  sumir("span.diretor");
  sumir("span.pesquisador");
  sumir("span.produtor");

} else if (t == "dramaturgo") {
  $("div.diretor").hide();
  $("div.ator").hide();
  $("div.dramaturgo").show();
  $("div.pesquisador").hide();
  $("div.produtor").hide();

  sumir("div.diretor");
  sumir("div.ator");
  sumir("div.pesquisador");
  sumir("div.produtor");
  sumir("span.diretor");
  sumir("span.ator");
  sumir("span.pesquisador");
  sumir("span.produtor");
} else if (t == "pesquisador"){
  $("div.diretor").hide();
  $("div.ator").hide();
  $("div.dramaturgo").hide();
  $("div.pesquisador").show();
  $("div.produtor").hide();

  sumir("div.diretor");
  sumir("div.ator");
  sumir("div.dramaturgo");
  sumir("div.produtor");
  sumir("span.diretor");
  sumir("span.ator");
  sumir("span.dramaturgo");
  sumir("span.produtor");
} else if (t == "produtor"){
  $("div.diretor").hide();
  $("div.ator").hide();
  $("div.dramaturgo").hide();
  $("div.pesquisador").hide();
  $("div.produtor").produtor();

  sumir("div.diretor");
  sumir("div.ator");
  sumir("div.dramaturgo");
  sumir("div.pesquisador");
  sumir("span.diretor");
  sumir("span.ator");
  sumir("span.dramaturgo");
  sumir("span.pesquisador");
}

function sumir(string){
  for (let i = 0; i < $(string).length + 1; i++) {
    for (let i = 0; i < $(string).length; i++) {
      let id = $(string)[i].id;
      let dramaturgo = document.getElementById(id);
      dramaturgo.remove();
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