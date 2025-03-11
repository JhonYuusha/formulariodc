document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
 
    // Limpar mensagens de erro anteriores
    clearErrors();
 
    // Obter valor da seleção
    const personagem = document.getElementById("personagem").value;
 
    let validado = true;
 
    // Validar a escolha do personagem
    if (personagem === "") {
        showError("erro-personagem", "Por favor, escolha um personagem.");
        validado = false;
    }
 
    // Se validado for verdadeiro, pode mostrar o confete
    if (validado) {
        alert("Formulário enviado com sucesso! Personagem escolhido: " + personagem);
        startConfetti(); // Chama o efeito de confete
    }
});
 
// Função para exibir erro
function showError(id, mensagem) {
    const elementoErro = document.getElementById(id);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
}
 
// Função para limpar mensagens de erro
function clearErrors() {
    const erros = document.querySelectorAll(".erro");
    erros.forEach(erro => erro.style.display = "none");
}
 
// Função para ativar o efeito de confete
function startConfetti() {
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 } // Confete começa na metade superior da tela
    });
}