window.onload = console.log(localStorage.getItem("t"));

let t = localStorage.getItem("t");

if (t == "todos"){
  $("div.artista").show();
  $("div.teatro").show();
  $("div.evento").show();
} else if (t == "teatro"){
  $("div.artista").hide();
  $("div.teatro").show();
  $("div.evento").hide();

  sumir("div.artista");
  sumir("span.artista");
  sumir("div.evento");
  sumir("span.evento");
} else if (t == "artista"){
  $("div.artista").show();
  $("div.teatro").hide();
  $("div.evento").hide();

  sumir("div.evento");
  sumir("span.evento");
  sumir("div.teatro");
  sumir("span.teatro");
  sumir("span.teatro");
} else if (t == "evento"){
  $("div.artista").hide();
  $("div.teatro").hide();
  $("div.evento").show();

  sumir("div.teatro");
  sumir("span.teatro");
  sumir("div.artista");
  sumir("span.artista");
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