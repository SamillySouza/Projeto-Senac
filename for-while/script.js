produtos = [];
precos = [];

function add(){
    let produto = document.getElementById("mostrando").value;
    produtos.push(produto);

    if (produto == "" || produto == " ") {
        alert ("Preencha o campo!")
    }
}

function mostrar() {
    let local = document.getElementById("lista");
    local.textContent = " ";
    if (produtos <= 0 )
    {
        alert("Preencha o campo!");
    }

for (posicao = 0; posicao < produtos.length; posicao ++) {
   let texto = document.createElement("li");
   texto.textContent = produtos[posicao] + " ";
   local.appendChild(texto);
   }
}


function mostre() {
    let soma = document.getElementById("num1").value;
    let inp = Number(document.getElementById("num2").value);

    let produtinho = {
        nome: soma,
        valor: inp
    }
     
     if (soma == "" || inp == "") {
        alert ("Preencha o campo!")
    }

    else {
        produtos.push(produtinho);
        precos.push(inp);
        let lista = document.getElementById("resultado");

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

for (let i = 0; i < produtos.length; i++) {
   let textos = document.createElement("li");
   textos.textContent = produtos[i].nome + "  R$" + produtos[i].valor; 
   lista.appendChild(textos);
   }

    }

    
}

function soma(){
   let total = 0;

      for (let i = 0; i < produtos.length; i++) {

        total += precos[i];
          
    }
    document.getElementById("somas").textContent ="Total: R$ " + total;

}

function senha() {
    let senha = document.getElementById("senha").value;
    let local = document.getElementById("local");
    contador = 0;
    local.textContent = " ";
  


    while(senha != "12345" && contador < 3 ) {
        contador = contador + 1;
        local.textContent = "Tentativas: " + contador;
        senha = prompt("Acesso bloqueado. Número máximo de tentativas atingido.");
    }

    if (senha== "12345") {
        let textocor = document.createElement("p");
        textocor.textContent = "Acesso permitido!";
        local.appendChild(textocor);
        textocor.style.color = "violet";
    }
}
let alunos = [];
let notas = [];

function salvar() {

    let aluno = document.getElementById("alunos").value;

    let nota = Number(document.getElementById("nota").value);

    alunos.push(aluno);
    notas.push(nota);
}

function gerar() {

    let listinha = document.getElementById("par");


    listinha.textContent = "";

    let totais = 0;
    let validas = 0;

    for (let i = 0; i < alunos.length; i++) {

        let aparece = document.createElement("li");

        
        if (notas[i] >= 0 && notas[i] <= 10) {

            totais += notas[i];
            validas++;

            if (notas[i] < 6) {

                aparece.textContent =
                    "Nome: " + alunos[i] +
                    " | Nota: " + notas[i] +
                    " | Reprovado!";

            } else {

                aparece.textContent =
                    "Nome: " + alunos[i] +
                    " - Nota: " + notas[i] +
                    " - Aprovado!";
            }

        } else {

            aparece.textContent =
                "Nome: " + alunos[i] +
                " | Nota inválida!";
        }

        listinha.appendChild(aparece);
    }


    let media = totais / validas;

    let resultado = document.createElement("p");

    resultado.textContent =
        "Média das notas válidas: " + media;

    listinha.appendChild(resultado);
}

function conf(){
    let soma = 0;
    let valor = 1;
    let texte = document.getElementById("textin");
    while (valor != 0)
    {
        valor = Number (prompt("Digite um numero, ou 0 para somar"));
        soma = soma + valor;
    }
    texte.textContent = "Soma:  " + soma;

}