// id="contactoForm"
const form = document.getElementById('contactoForm'); //  id="contactoForm" en el <form> en HTML

form.addEventListener('submit', function(event) {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    let isValid = true;

    // Validación simple: que no estén vacíos
    if (nombreInput.value.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        isValid = false;
        nombreInput.focus(); // Pone el foco en el campo inválido
    } else if (emailInput.value.trim() === '') {
        alert('Por favor, ingresa tu email.');
        isValid = false;
        emailInput.focus();
    }
    // Podríamos añadir validación de formato de email con expresiones regulares

    if (!isValid) {
        event.preventDefault(); // ¡Importante! Detiene el envío del formulario si no es válido
    } else {
        console.log('Formulario válido, enviando (simulado)...');
        // En una app real, aquí podría ir una llamada AJAX para enviar los datos
    }
});
