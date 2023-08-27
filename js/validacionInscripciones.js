// Obtener los elementos del formulario
const formulario = document.getElementById('formulario');

const nombreTutor = document.getElementById('nombreTutor');
const apellidoTutor = document.getElementById('apellidoTutor');

const nombreAlumno = document.getElementById('nombreAlumno');
const apellidoAlumno = document.getElementById('apellidoAlumno');

const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');
const turno = document.getElementById("turno");

formulario.addEventListener("submit", (e)=>{
    // Evitar que el formulario se envíe automáticamente
    e.preventDefault();

    // Validar los campos del formulario
    const nombreTutorValido = validarCampo(nombreTutor);    
    const apellidoTutorValido = validarCampo(apellidoTutor);

    const nombreAlumnoValido = validarCampo(nombreAlumno);
    const apellidoAlumnoValido = validarCampo(apellidoAlumno);

    const emailValido = validarCampo(email);
    const telefonoValido = validarCampo(telefono);
    const mensajeValido = validarCampo(mensaje);
    const turnoValido = validarCampo(turno);
    
    // Si todos los campos son válidos, enviar el formulario
    if (nombreTutorValido && apellidoTutorValido && nombreAlumnoValido 
            && apellidoAlumnoValido && emailValido && telefonoValido && mensajeValido && turnoValido) {
        formulario.submit();
    }

});

// Función de validación de campo
function validarCampo(campo) {
    // Comprobar si el campo está vacío
    if (campo.value.trim() === '') {
        mostrarError(campo, 'Este campo es obligatorio');
        return false;
    }

    // Comprobar si el campo email tiene un formato válido
    if (campo.type === 'email' &&!validarEmail(campo.value)) {
        mostrarError(campo, 'El formato de email es incorrecto');
        return false;
    }

    // Comprobar si el campo telefono tiene un formato válido
    if (campo.type === 'tel' &&!validarTelefono(campo.value)) {
        mostrarError(campo, 'El formato de telefono es incorrecto');
        return false;
    }

    // Si el campo es válido, borrar el mensaje de error
    borrarError(campo);
    return true;
}


// Función para mostrar mensaje de error
function mostrarError(campo, mensaje) {
    // Crear un elemento de error si no existe
    if (!campo.parentNode.querySelector('.error')) {
        const error = document.createElement('div');
        error.classList.add('error');
        error.classList.add('text-danger');
        campo.parentNode.insertBefore(error, campo.nextSibling);
    }

    // Mostrar el mensaje de error
    campo.parentNode.querySelector('.error').textContent = mensaje;
}

// Función para borrar el mensaje de error
function borrarError(campo) {
    const error = campo.parentNode.querySelector('.error');
    if (error) {
    error.remove();
    }
}

// Función para validar el formato de email
function validarEmail(email) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);
}

function validarTelefono(telefono){
    const expresion = /[0-9]{4}-[0-9]{1}-[0-9]{6}/;    
    return expresion.test(telefono);
}
