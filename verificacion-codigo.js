// ----------------------------------
// BOTÓN VERIFICAR CÓDIGO DEL MODAL
// ----------------------------------
document.getElementById("btnVerificarCodigo").addEventListener("click", function () {

  const codigo = document.getElementById("codigoInput").value;
  const email = localStorage.getItem("emailParaLogin");

  // Enlace generado por Firebase
  const enlace = window.location.href;

  if (isSignInWithEmailLink(auth, enlace)) {

    signInWithEmailLink(auth, email, enlace)
      .then(() => {
        alert("Sesión iniciada correctamente!");
        // Redirigir a tu página
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error(error);
        alert("Código incorrecto");
      });

  } else {
    alert("No se detectó enlace válido.");
  }

});