// ENUMS
function mostrarMensaje(tipoDeError) {
    if (tipoDeError === 0 /* ERROR_TYPES.NOT_FOUND */) {
        console.log("No se encuentra el recurso");
    }
    else if (tipoDeError === 1 /* ERROR_TYPES.UAUTHORIZED */) {
        console.log("No se encuentra el recurso");
    }
    else if (tipoDeError === 2 /* ERROR_TYPES.FORBIDDEN */) {
        console.log("No se encuentra el recurso");
    }
}
