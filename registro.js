document.addEventListener("DOMContentLoaded", function () {
    const formRegistro = document.getElementById("form-registro");
    const mensajeRegistro = document.getElementById("mensaje-registro");

    formRegistro.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Registra al usuario con Firebase
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                mensajeRegistro.textContent = "¡Registro exitoso!";
                mensajeRegistro.style.color = "green";

                // Guarda los datos del usuario en Firestore
                db.collection("usuarios").doc(user.uid).set({
                    email: user.email,
                    fechaRegistro: new Date()
                });
            })
            .catch((error) => {
                mensajeRegistro.textContent = "Error: " + error.message;
                mensajeRegistro.style.color = "red";
            });
    });
});