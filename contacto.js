const camposForm = {
    "nombre": null,
    "email": null,
    "telefono": null,
    "mensaje": null
};

document.addEventListener("DOMContentLoaded", () => {
    initPageLoad();
});

function initPageLoad() {
    camposForm.nombre = document.getElementById("nombre");
    camposForm.email = document.getElementById("email");
    camposForm.telefono = document.getElementById("telefono");
    camposForm.mensaje = document.getElementById("mensaje");
    console.log("Formulario Cargado", camposForm);

    // Corregir ID del formulario
    document.getElementById("formulario").addEventListener("submit", (e) => {
        const [errors, isValid] = validarForm();
        if (!isValid) {
            alert("Formulario no válido");
            console.log("Errores en el formulario:", errors);
            e.preventDefault();
            e.stopPropagation();
        } else {
            // El formulario se enviará, pero se limpian los campos antes para el siguiente uso.
            vaciarCamposFormulario();
            alert("Formulario enviado correctamente. Gracias por contactarte con la cafe el buen sabor.");
        }
    });
}

function validarForm() {
    let errors = [];

    if (isEmpty(camposForm.nombre.value)) {
        errors.push("El campo nombre no puede estar vacío.");
    }
    if (!isEmail(camposForm.email.value)) {
        errors.push("El campo email no es válido.");
    }
    if (!isPhone(camposForm.telefono.value)) {
        errors.push("El campo teléfono no es válido.");
    }
    if (isEmpty(camposForm.mensaje.value)) {
        errors.push("El campo mensaje no puede estar vacío.");
    }

    return [errors, errors.length == 0];
}

function isEmpty(value) {
    return /^\s*$/.test(value);
}

function isEmail(value) {
    return /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
}

function isPhone(value) {
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
}

function vaciarCamposFormulario() {
    camposForm.nombre.value = "";
    camposForm.email.value = "";
    camposForm.telefono.value = "";
    camposForm.mensaje.value = "";
}
