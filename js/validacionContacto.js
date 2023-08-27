// Obtener los elementos del formulario
const formulario = document.getElementById('formulario');

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener("submit", (e)=>{
    // Evitar que el formulario se envíe automáticamente
    e.preventDefault();

    // Validar los campos del formulario
    const nombreValido = validarCampo(nombre);        
    const emailValido = validarCampo(email);    
    const mensajeValido = validarCampo(mensaje);    
    
    // Si todos los campos son válidos, enviar el formulario
    if (nombreValido && emailValido && mensajeValido) {
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
