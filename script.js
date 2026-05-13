let produtos = [];

function cadastrar() {
    let nome = document.getElementById("textodotrem").value;
    let preço = document.getElementById("numberdotrem").value;
    let msg = document.getElementById("msg");
    if(nome == "") {
        msg.textContent = "digite o nome do produto";
        msg.style.color = "red";
    }

else {
    produtos.push(nome);
    produtos.push(preço);
    msg.textContent = "Produto Adicionado";
    msg.style.color = "green";
    mostrarproduto();

}

}

function mostrarproduto() {
    let lista = document.getElementById("lista1");
    lista.textContent = "";


    for (let i = 0;i < produtos.length; i++) {
        let item = document.createElement("li");
        item.textContent = produtos[i];
        lista.appendChild(item);
    }
}