function pesquisar() {
    var input, filtro, ul, li, a, i, texto;
    input = document.getElementById("input");
    filtro = input.value.toUpperCase();
    ul = document.getElementById("textos");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        texto = a.textContent || a.innerText;
        if (texto.toUpperCase().indexOf(filtro) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}