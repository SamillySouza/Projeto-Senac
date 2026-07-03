function cadastrar(){
    let nomes = document.getElementById("nome").value;
    let email = document.getElementById("nome1").value;
    let number = document.getElementById("nome2").value;
    let paragra = document.getElementById("psr");
    if (
    nomes.length > 3 && !/[0-9]/.test(nomes) &&
    (email.includes("@gmail.com") || email.includes("@icloud.com")) &&
    number.length <= 11
) {
    alert("Cadastro realizado com sucesso!");
    window.location.replace("planos.html");
} else {
    alert("Verifique os dados!");
}
}

function preco1() {
    let caixa = document.getElementById("caixa1");

    if (caixa.style.display === "block") {
        caixa.style.display = "none";
    } else {
        caixa.style.display = "block";
    }
}

function preco2() {
    let caixa = document.getElementById("caixa2");

    if (caixa.style.display === "block") {
        caixa.style.display = "none";
    } else {
        caixa.style.display = "block";
    }
}

function preco3() {
    let caixa = document.getElementById("caixa");

    if (caixa.style.display === "block") {
        caixa.style.display = "none";
    } else {
        caixa.style.display = "block";
    }
}

const imagens = [
   
     "imagem_mudar.png",
    "imagem_2.png",
     "imagem_3.png",
     "imagem_4.png",
     "imagem_5.png",
     "imagem_6.png"
];

let indice = 0;

function mostrarImagem() {
    document.getElementById("foto").src = imagens[indice];
}

function proxima() {
    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    mostrarImagem();
}

function anterior() {
    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    mostrarImagem();
}

function traduzirPagina1() {
    window.location.href = "login2.html";
}

function traduzirPagina2() {
    window.location.href = "login.html";
}
function traduzirPagina3() {
    window.location.href = "index2.html";
}
function traduzirPagina4() {
    window.location.href = "index.html";
}
function traduzirPagina5() {
    window.location.href = "sobre2.html";
}
function traduzirPagina6() {
    window.location.href = "sobre.html";
}
function traduzirPagina7() {
    window.location.href = "planos2.html";
}
function traduzirPagina8() {
    window.location.href = "planos.html";
}
function traduzirPagina9() {
    window.location.href = "galeria2.html";
}
function traduzirPagina10() {
    window.location.href = "galeria.html";
}
function traduzirPagina11() {
    window.location.href = "cadastro2.html";
}
function traduzirPagina12() {
    window.location.href = "cadastro.html";
}