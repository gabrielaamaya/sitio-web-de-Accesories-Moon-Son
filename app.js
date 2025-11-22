document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let datos = new FormData(this);

    fetch("enviarCorreo.php", {
        method: "POST",
        body: datos
    })
    .then(res => res.text())
    .then(data => {
        if (data == "OK") {
            document.getElementById("respuesta").innerHTML = "📩 Correo enviado correctamente";
        } else {
            document.getElementById("respuesta").innerHTML = "❌ Error al enviar el correo";
        }
    });
});
