function verificar () {
    let idade= document.getElementById ("caixaidade").value;
    if (idade == 10){
        alert ("acertou");
}
   else {
    alert("ERROU,quer dica?")
    alert ("5x2")
   }
    }
    
function nome(){
    let name= document.getElementById("nome").value; 
    if (name== "Samilly")
        {
            alert ("Samilly de Souza Silva");
        }
        else {
            alert("Se eu descobrir fico chateada.");
        }
    }

function ok(){
    let okk= document.getElementById("ok").value; 
    if (okk== "Ok" || okk == "OK" || okk == "ok")
        {
            alert ("Era um ok");
        }
}
function cinco(){
    let cincos = document.getElementById("cinco").value; 
    if (cincos == 5)
        {
            alert ("Era um 5");
        }
    else{
        alert("Escreveu Errado!");
    }
     }

function bot(){
        let corr1= document.getElementById("bot").value;
        if (corr1== "admin") {
            let par1 = document.getElementById("par");
            par1.textContent = "Correto"
        }
        }

function teste(){
    let testando = document.getElementById("teste").value; 
    if ( testando == "teste"){
    let par = document.getElementById("testes");
    par.textContent = (" Senac é tudo");
    }
}

function azul(){
    let cor = document.getElementById("azul").value;
    if (cor == "azul" || cor=="Azul"){
        let blue = document.getElementById("blue");
        blue.style.background = ("blue");
        
    }
}

function num(){
    let num= document.getElementById ("caixa").value;
    if (num > 10 ){
     alert("Tenha um dia bom!");
}
   else {
    alert("Número maior que 10 por favor ");
   
   }
    }

function menos(){
    let numer= document.getElementById ("menos").value;
    if (numer < 50 ){
     alert("Eu que mando");
}
   else {
    alert("Nam");
   
   }
    }
function testa(){
    let testandos = document.getElementById("testa").value; 
    if ( testandos == "senha"){
    let par3 = document.getElementById("testas");
    par3.textContent = ("muda o texto");
    }
    else {
        alert("dica: *senha* para saber oq acontece");
    }
}

function modos() {
 let fundo = document.getElementById("modo").value;
 if ( fundo == "escuro"){
    let corpo = document.getElementById("modos");
    corpo.style.background = ("black");
    corpo.style.color = ("white")
 }
 else {
    alert("dica: *Escuro*");
 }
}

function mude() {
    let mudar = document.getElementById("tamanho").value; 
    if (mudar =="Correto" || mudar == "correto"){
       let mudares = document.getElementById("Tamanho");
       mudares.textContent = ("pão com queijo e café");
       mudares.style.color = ("purple"); 
    }
    else {
        alert("correto*");
    }
}

function tudo() {
    let tudo = document.getElementById("tudo").value; 
    if (tudo == "Ok" || tudo == "ok" ){
    let todo = document.getElementById("par");
    let todos = document.getElementById("testes");
    todo.textContent = ("mudou algo?");
    todos.textContent = ("mudou algo?");
}
    else {
        alert("tem algo errado, ok?");
    }
    }

    function fonte() {
        let fonteb = document.getElementById("fontes").value;
        if ( fonteb > 20) {
        let stop = document.getElementById("fonte");
        stop.style.fontSize = ("40px");
    }
    else {
        alert("maior que 20 migo");
    }
    }

    function dnv() {
 let fundo = document.getElementById("dnv").value;
 if ( fundo == "admin"){
    alert("Bem-vindo");
  }
  else{
    alert("Erro")
  }
}

function chat(){
    let chato = document.getElementById("aff");
    let chatin = document.getElementById("chat").value;
    if (chatin = 1){
    chato.style.background =("pink");
    chato.style.fontSize = ("60px");
    chato.style.color = ("red");
     chato.textContent= ("Nossa, nossa");
    }
}
function tudos(){
    let tudos = document.getElementById("tudos").value; 
    if (tudos == "verdadeira" ){
    let todi = document.getElementById("par");
    let tod3 = document.getElementById("testes");
    let toddy = document.getElementById("modos");
    todi.textContent = ("BUM");
    tod3.textContent = ("BUM");
    toddy.style.background = ("blue");
    todi.style.color = ("red");
    tod3.style.color = ("red");
}
    else {
        alert("É verdadeira?");
    }
}
function seq(){
    let nem = document.getElementById("seq").value;
    if ( nem > 100 ){
    let funde = document.getElementById("modos");
    funde.style.background = ("red");
    }
    else {
        alert("+100 colega");
    }
}
function inveja(){
    let inv = document.getElementById("oi").value;
    let haha = document.getElementById("inveja").value;
    if (haha == "Copiar")
    {
        let eu = document.getElementById("inv");
        haha.textContent = inv;
        eu.textContent = inv;
    }

}

function divas() {
    let div = document.getElementById("dive").value;
    if( div = 2) {
        let divassoura = document.getElementById("diva1");
        let divass = document.getElementById("diva2");
        divassoura.style.background = ("black");
        divass.style.background = ("black");
        divassoura.style.display = ("flex");
        divass.style.display = ("flex");
        divassoura.style.marginTop = ("20px");
        divassoura.style.maxWidth = ("70%");
        divass.style.maxWidth = ("50%");
        divassoura.style.justifySelf = ("center");
        divass.style.justifySelf = ("center");
}
}

function sou(){
    let ser = document.getElementById("sou").value;
    let soun = document.getElementById("modos");
    if (ser = "Natiruts (quero ser feliz também)") {
        soun.style.color = ("white");
        let vi = document.getElementById("viva");
        vi.style.fontSize = ("100px");
        vi.textContent = ser;
        vi.style.color = ("Blue");
    }
}

    



