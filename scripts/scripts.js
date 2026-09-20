const discordBtn = document.querySelector("#discord-btn");
const emailBtn = document.querySelector("#email-btn");

function copiarTexto(texto, botao, evento) {
    evento.preventDefault();

    navigator.clipboard.writeText(texto).then(() => {
        botao.classList.add("copiado");

        setTimeout(() => {
            botao.classList.remove("copiado");
        }, 2000);
    });
}

emailBtn.addEventListener("click", (evento) => {
    copiarTexto("danielmds64@pm.me", emailBtn, evento);
});