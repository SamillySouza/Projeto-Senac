<?php
$servidor = "sql301.infinityfree.com"; 
$usuarioBanco = "if0_41556634";
$senhaBanco = "l89YHjkpycMjeRy";
$nomeBanco = "if0_41556634_projeto_integrador";

$conexao = mysqli_connect($servidor, $usuarioBanco, $senhaBanco, $nomeBanco);

if (!$conexao) {
    die("Erro ao conectar com o banco de dados: " . mysqli_connect_error());
}

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND senha = '$senha'";

$resultado = mysqli_query($conexao, $sql);

if (mysqli_num_rows($resultado) > 0) {
    echo "<h1>Login realizado com sucesso!</h1>";
    echo "<p>Bem-vindo, $usuario!</p>";
} else {
    echo "<h1>Usuário ou senha incorretos!</h1>";
    echo "<a href='login.html'>Tentar novamente</a>";
}

mysqli_close($conexao);
?>