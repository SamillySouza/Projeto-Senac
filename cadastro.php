<?php
$servidor = "sql301.infinityfree.com"; 
$usuarioBanco = "if0_41556634";
$senhaBanco = "l89YHjkpycMjeRy";
$nomeBanco = "if0_41556634_projeto_integrador";

$conexao = mysqli_connect($servidor, $usuarioBanco, $senhaBanco, $nomeBanco);

// Verificando se conectou
if (!$conexao) {
    die("Erro ao conectar com o banco de dados: " . mysqli_connect_error());
}

// Pegando os dados do formulário
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

// Comando SQL para inserir no banco
$sql = "INSERT INTO usuarios (usuario, senha) VALUES ('$usuario', '$senha')";

// Executando o comando
if (mysqli_query($conexao, $sql)) {
    echo "<h1>Usuário cadastrado com sucesso!</h1>";
    echo "<a href='login.html'>Ir para o login</a>";
} else {
    echo "Erro ao cadastrar: " . mysqli_error($conexao);
}

// Fechando conexão
mysqli_close($conexao);
?>