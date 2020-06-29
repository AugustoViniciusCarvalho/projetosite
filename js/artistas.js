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

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
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

function tipo(t) {
  console.log(localStorage.setItem("t", t.target.id));
  window.location.href = "artistas.html"
}