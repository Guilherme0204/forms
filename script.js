
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.elements["nome"].value;
        const email = form.elements["email"].value;
        const message = form.elements["mensagem"].value;
        if(name.length === 0){
            alert("Nome necessário")
        }

        const result = `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`;

        alert(result);
    });