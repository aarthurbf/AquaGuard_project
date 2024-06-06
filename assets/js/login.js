document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário
        const inputNome = document.getElementById("login");
        const inputSenha = document.getElementById("senha");

        // Verifica se o nome de usuário e senha correspondem aos valores esperados
        if (inputNome.value === "Admin" && inputSenha.value === "12345") {
            alert("Login bem sucedido!");
            console.log("Redirecionando..."); // Verifica no console
            window.location.href = "../../index.html"; // Redireciona para index.html
        } else {
            alert("Usuário ou senha incorretos");
        }
    });
});