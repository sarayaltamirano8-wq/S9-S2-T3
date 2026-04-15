const form = document.getElementById("formulario");
const modal = document.getElementById("modal");
const datos = document.getElementById("datos");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const curso = document.getElementById("curso").value;

    datos.innerHTML = `
        <b>Nombre:</b> ${nombre} <br>
        <b>Correo:</b> ${correo} <br>
        <b>Teléfono:</b> ${telefono} <br>
        <b>Curso:</b> ${curso}
    `;

    modal.style.display = "block";

    // Limpia el formulario
    form.reset();
});

function cerrarModal() {
    modal.style.display = "none";
}
