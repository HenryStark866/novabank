document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    
    header.addEventListener("mouseover", function () {
        header.style.backgroundColor = "#0077B6";
    });
    
    header.addEventListener("mouseout", function () {
        header.style.backgroundColor = "#00A8E8";
    });

    alert("Bienvenido a NOVA BANK, la revolución de la banca digital.");
});