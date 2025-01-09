"use strict";


///////////////////////////////////////////////////////////
// Alumnes: Pau Muñoz Serra i Alba Matamoros Morales
///////////////////////////////////////////////////////////

function init() {
	//TouchEmulator();
	$(document).keydown(function (eventCodiTecla) {
		const eventCodiTecla = e.which // Retorna l'id de la tecla que s'ha premut
		const eventIdTecla = $(`#c${eventCodiTecla}`);
		const tecla = $(`#${eventIdTecla}`);

		if (tecla.length) {
			tecla.css("fill", "red");
		}
	});
}

init();
