// ENUMS

// En js podríamos hacer algo así
/*
const ERROR_TYPES = {
  NOT_FOUND: "Not Found",
  UAUTHORIZED: "Authorized",
  FORBIDDEN: "Forbidden",
};

function mostrarMensaje(tipoDeError) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UAUTHORIZED) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No se encuentra el recurso");
  }
}
*/

// Pero en ts lo mejor sería que usaramos enums
// los enums se usan con datos finitos, que puedas controlar, como los días de la semana, los meses del año, etc
const enum ERROR_TYPES {
  NOT_FOUND, //0
  UAUTHORIZED, //1
  FORBIDDEN, //2
}

function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UAUTHORIZED) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No se encuentra el recurso");
  }
}
