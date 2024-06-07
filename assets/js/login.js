document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const inputNome = document.getElementById("login");
    const inputSenha = document.getElementById("senha");
    const loginError = document.getElementById("login-error");
    const senhaError = document.getElementById("senha-error");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Verifica se o nome de usuário e senha correspondem aos valores esperados
        if (inputNome.value === "Admin" && inputSenha.value === "12345") {
            alert("Login bem sucedido!");
            console.log("Redirecionando..."); // Verifica no console
            window.location.href = "../../index.html"; // Redireciona para index.html
        } else {
            if (inputNome.value !== "Admin") {
                loginError.textContent = "Nome incorreto";
                loginError.style.display = "block";
            } else {
                loginError.style.display = "none";
            }

            if (inputSenha.value !== "12345") {
                senhaError.textContent = "Senha incorreta";
                senhaError.style.display = "block";
            } else {
                senhaError.style.display = "none";
            }
        }
    });
});