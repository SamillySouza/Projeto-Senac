function idade() {
    let idade = document.getElementById("idade").value;
    if ( idade <= 12 &&  idade >=1 ){
        alert("Você é uma criança.");
    }
    else if ( idade >= 12 &&  idade <= 17 ){
        alert("Você é um adolescente.");
    }
    else if ( idade >=18 && idade <=59){
        alert("Você é adulto.");
    }
    else if ( idade >=60 && idade <=130 ){
        alert("Você é um idoso.");
    }
    else {
        alert("inválido");
    }
}

function entrar() {
    let usuario = document.getElementById("entrar").value;
    let senha = document.getElementById("senha").value;
    if (usuario == "admin" && senha == "1234"){
        alert("Login realizado com sucesso.");
    }
    else if ( usuario == "Professor" && senha == "Senac") {
    alert("Bem-vindo,professor!.");
}
    else if (usuario == "" && senha == "" ){
        alert("Preencha os campos.");
    }
    else {
        alert("Usuário e/ou senha incorreto.");
    }
}

function desconto(){
    let desconto = Number (document.getElementById("compra").value); 
    let vip = document.getElementById("VIP").value;
    let sim = document.getElementById("descontosim").value;
    let par = document.getElementById("uai");
    if ( desconto >= 500 && vip == "sim" && sim == "sim"|| sim == "Sim") {
       par.textContent = ("20% de desconto.");
       sim = desconto * 0.20

        
    }
    else if (desconto >= 300 ||  sim == "sim" ) {
        par.textContent = ("10% de desconto.");
    }
    else if ( desconto <= 300 && sim == "Não" || sim =="não") {
        par.textContent = ("Não é possível aplicar desconto");
    }
    else if ( desconto == "" || desconto <= 0 && par == "") {
        alert("Atenção, campo em branco ou valor inválido"); 
    }
    else {
        alert("Erro.");
    }

}

function nota() {
    let nota = document.getElementById("nota").value;
    let frec = document.getElementById("frec").value;
    let par2 = document.getElementById("par2");
    
    if (nota == 0  || frec == 0 ) {
    alert("Preencha o campo.");
}
    else if (nota >= 100 || frec >= 100 || nota <=0 || frec <= 0 ) {
     par2.textContent = ("Valor inválido.");
    }
    else if (nota >= 60 && frec >= 75){
        par2.textContent =("₊ ⊹Aprovado₊ ⊹");
    }
    else if (nota <= 40 && frec <=75 ) {
        par2.textContent = ("Recuperação.");
    }
    else if (nota >=40 || frec <= 75) {
        par2.textContent = ("Reprovado.");
    }
    else {
        alert("Valores inválidos.")
    }
}