"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Pau Muñoz Serra i Alba Matamoros Morales
///////////////////////////////////////////////////////////

function init() {
	//TouchEmulator();
	$(document).keydown(function (e) {
		const eventCodiTecla = e.which // Obtiene el código de la tecla presionada
		const tecla = $(`#k${eventCodiTecla}`); // Busca el elemento con ID correspondiente

		if (tecla.length) {
			tecla.addClass('activa');
		}
	});

	$(document).keyup(function (e) {
        const eventCodiTecla = e.which; //r Obtiene el código de la tecla soltada
        const tecla = $(`#k${eventCodiTecla}`); // Selecciona el rectángulo correspondiente a la tecla

        if (tecla.length) { // Si existe el rectángulo
			if (eventCodiTecla >= 48 && eventCodiTecla <= 57) {
				tecla.addClass('black'); // Vuelve a su color original (Numeros)
			} else {
				tecla.addClass('white'); // Vuelve a su color original (Letras)
			}
        }

		tecla.removeClass('activa');
    });
}

$(document).ready(function () {
    init(); // Inicializa cuando el DOM esté listo
});
