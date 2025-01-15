// Seleção de elementos
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
};

function gerarSenha() {
    let senha = "";
    let tamanhoSenha = sliderElement.value;

    for (let i = 0, n = charset.length; i < tamanhoSenha; i++) {
        senha += charset.charAt(Math.floor(Math.random() * n));
    }

    novaSenha = senha;
    containerPassword.classList.remove("hide");
    password.innerHTML = novaSenha;
}

function copiarSenha(){
    alert("Senha copiada com sucesso!"); 
    navigator.clipboard.writeText(novaSenha);
}