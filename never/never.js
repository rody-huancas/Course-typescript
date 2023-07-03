// Never=> nunca va a devolver un valor
// la diferencia que tiene con void, es que void puede retornar un valor, pero no importa, ya que no lo toma en cuenta
function throwError(message) {
    if (message)
        throw new Error(message);
    throw new Error(message);
}
