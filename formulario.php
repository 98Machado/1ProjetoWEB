<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<style>
    main{
        text-align: center;
        font-size: 20px;
        padding: 2em; 
        
    }

</style>
<body>
    <header>
    
    </header>
    <main>
    <h1>Resultado do Processamento</h1>
    <br><br><br>
    
    <?php 
        $nome = $_GET["nome"];
        $email = $_GET["email"];
        $assunto = $_GET["assunto"];
        $mensagem = $_GET["mensagem"];

        echo "<p><p>Olá, ".$nome." Tudo bem ?!, Obrigado por entrar em contato conosco!"."<p>";

        echo "<p><p>seu e-mail para retorno do contato é: ".$email."<p>";

        echo "<p><p>O assunto citado foi: ".$assunto."<p>";

        echo "<p><p>A mensagem dita para nós foi: ".$mensagem."<p>";
    
    ?>
    <section></section>
    </main>
</body>
</html>