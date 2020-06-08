function info(e){
    console.log(localStorage.setItem("e", e.target.id));
    window.location.href="artistasinfo.html"
}

window.onload = console.log(localStorage.getItem("t"));

let t = localStorage.getItem("t");

if (t == "diretor"){
    $("div.diretor").show();
    $("div.ator").hide();
    $("div.dramaturgo").hide();
}else if(t == "ator"){
    $("div.diretor").hide();
    $("div.ator").show();
    $("div.dramaturgo").hide();
}else if(t == "dramaturgo"){

}

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