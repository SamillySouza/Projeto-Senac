function funcao() {
    let par= document.getElementById ("paragrafo");
    let cax= document.getElementById ("caixa");
    let escrita= par.textContent;
     caixa.value = escrita;

}

function soma() {
     let num1= Number(document.getElementById ("num1").value);
     let num2= Number(document.getElementById ("num2").value);
     let resultado= num1 + num2;
     let local = document.getElementById ("resultado");
    local.textContent = resultado;
}

function alerta(){
    alert ("Ola mundo")
}

function alerta2(){
    let nome = ("Samilly");
    alert(nome);
}

function alerta3(){
    let num1 = 20;
    let num2 = 15;
    let soma = num1 + num2;
    alert(soma);
}
function texto(){
    let nome = document.getElementById("Nome");
    nome.textContent = ("Samilly de Souza Silva");
}
function Mudar(){
    let div = document.getElementById("mudarcor");
    div.style.background=("blue");
}
function par(){
    let mudara = document.getElementById("mudar");
    mudara.textContent = ("Mudouuu!");
}
function sumir(){
    let apagar = document.getElementById("Sumira");
    apagar.textContent = ("");
}
function Alterar(){
    let mudar = document.getElementById("pag");
    mudar.style.background = ("pink");
}
function Voltar(){
    let mudar = document.getElementById("pag");
    mudar.style.background = ("white");
}
function crescer(){
    let crescer = document.getElementById("Tamanho");
    crescer.style.fontSize = ("20px");
}
function diminuir(){
    let diminuir = document.getElementById("Tamanho");
    diminuir.style.fontSize = ("15px");
}
function Pink(){
    let cor = document.getElementById("cores");
    cor.style.color = ("pink");
}
function BLue(){
    let cor = document.getElementById("cores");
    cor.style.color = ("blue");

}function Purple(){
    let cor = document.getElementById("cores");
    cor.style.color = ("purple");
}
function cor(){
    let mesmotempo = document.getElementById("isso");
    mesmotempo.style.background = ("black");
    mesmotempo.style.color = ("white");
    mesmotempo.style.borderRadius = ("10px");
    let msm = document.getElementById("também");
    msm.style.background = ("black");
    msm.style.color = ("white");
    msm.style.borderRadius = ("10px");
}

function Mudaras3(){
    let mudei = document.getElementById("p1");
    let mudei2 = document.getElementById("p2");
    let mudei3 = document.getElementById("p3");
    mudei.textContent = ("Mudou!!");
    mudei2.textContent = ("Mudou!!");
    mudei3.textContent = ("Mudou!!");
}

function dif() {
    let niveis = document.getElementById("dificil");
    niveis.textContent =("se vc está lendo, deu certo");
    niveis.style.background =("Blue");
    niveis.style.color =("white");
    niveis.style.fontSize =("25px");
}

function volte() {
    let niveis = document.getElementById("dificil");
    niveis.style.background =("white");
    niveis.style.color =("black");
    niveis.style.fontSize =("15px");
     niveis.textContent =("Calma vai mudar");
}

function nivel(){
    let sobre = document.getElementById("nivel").value;
    let lugar1 = document.getElementById("Nome");
    let lugar2 = document.getElementById("Tamanho");
    lugar1.textContent = sobre;
    lugar2.textContent = sobre;
}

function text(){
 let mudar = document.getElementById("uaitrem");
    mudar.textContent = ("Vixi");

}

function corr(){
     let mude = document.getElementById("uaitrem");
    mude.style.color = ("red")
}
 
function taman(){
     let tamanho = document.getElementById("uaitrem");
    tamanho.style.fontSize = ("30px")
}

function botão() {
   let pronto = document.getElementById("samilly").style.backgroundColor="red"
    document.getElementById("sami").style.fontSize="30px"
}

function dificuldade(){
    let dificul = document.getElementById("difi").value;
    let dif = document.getElementById("eu");
   dif.textContent = dificul;
   dif.style.color = ("blue");
}

function somar(){
     let num01= Number(document.getElementById ("num01").value);
     let num02= Number(document.getElementById ("num02").value);
     let resultado= num01 + num02;
     let local = document.getElementById ("result");
    local.textContent = resultado;
}

function limpar (){
   document.getElementById("result").textContent = "";
    }

function bot(){
    let corpinho= document.getElementById("corpo");
    corpinho.style.background = "black";
    corpinho.style.color = "white";
}