document.addEventListener("DOMContentLoaded", function () {
    // Botón de prueba
    const btnPrueba = document.getElementById("btn-prueba");

    if (btnPrueba) {
        btnPrueba.addEventListener("click", function () {
            alert("¡Botón presionado! Acción en desarrollo...");
        });

        btnPrueba.addEventListener("mouseover", function () {
            btnPrueba.style.backgroundColor = "#00ccff"; // Cambio de color al pasar el mouse
        });

        btnPrueba.addEventListener("mouseout", function () {
            btnPrueba.style.backgroundColor = ""; // Regresa al color original
        });
    }
});
