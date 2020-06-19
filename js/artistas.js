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
} else if (t == "diretor") {
  $("div.diretor").show();
  $("div.ator").hide();
  $("div.dramaturgo").hide();

  sumir("div.dramaturgo");
  sumir("div.ator");
  sumir("span.dramaturgo");
  sumir("span.ator");

} else if (t == "ator") {
  $("div.diretor").hide();
  $("div.ator").show();
  $("div.dramaturgo").hide();

  sumir("div.dramaturgo");
  sumir("div.diretor");
  sumir("span.dramaturgo");
  sumir("span.diretor");

} else if (t == "dramaturgo") {
  $("div.diretor").hide();
  $("div.ator").hide();
  $("div.dramaturgo").show();

  sumir("div.diretor");
  sumir("div.ator");
  sumir("span.diretor");
  sumir("span.ator");
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