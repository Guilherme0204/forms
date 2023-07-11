const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements["nome"].value;
    const email = form.elements["email"].value;
    const message = form.elements["mensagem"].value;
    const result = `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`;
    if (name.length === 0 && email.length === 0 && message.length === 0) {
        alert("Todos os campos são necessários para continuar");

    } else {

        if (name.length === 0 && email.length > 0 && message.length > 0) {
            alert("Nome Necessário para continuar");
        } else if (name.length > 0 && email.length === 0 && message.length > 0) {
            alert("Informe o email para continuar");
        } else if (name.length > 0 && email.length > 0 && message.length === 0) {
            alert("Informe a mensagem para continuar");
        } else if (name.length === 0 || email.length === 0 || message.length === 0) {
            alert("Todos os campos são necessários para continuar");

        } else {
            alert(result);
        }

    }


});