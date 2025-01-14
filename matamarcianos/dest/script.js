"use strict";

function moureNauEsquerra() {
    // Lògica per moure la nau a l'esquerra
    let nau = $('svg #nau');
    let pos = nau.position();
    nau.css('left', pos.left - 10 + 'px');
}
function moureNauDreta() {
    // Lògica per moure la nau a la dreta
    let nau = $('#nau');
    let pos = nau.position();
    nau.css('left', pos.left + 10 + 'px');
}
function moureNauAmunt() {
    // Lògica per moure la nau cap amunt
}
function moureNauAvall() {
    // Lògica per moure la nau cap avall
}
function atacar() {
    // Lògica per atacar
}
function init() {
    
    $(document).keydown(function (e) {
		const eventCodiTecla = e.which // Obtiene el código de la tecla presionada
        console.log('1--------' + eventCodiTecla);
		const eventTecla = $(`#k${eventCodiTecla}`); // Busca el elemento con ID correspondiente
        console.log('2---------' + eventTecla);
		const idTeclaSeleccionada = eventTecla.attr('id');
		console.log('3--------------' + idTeclaSeleccionada);

		if (eventTecla.length) {
			

		}
	});

	$(document).keyup(function (e) {
        const eventCodiTecla = e.which; //r Obtiene el código de la tecla soltada
        const eventTecla = $(`#k${eventCodiTecla}`); // Selecciona el rectángulo correspondiente a la tecla

        if (eventTecla.length) { // Si existe el rectángulo
			if (eventCodiTecla >= 48 && eventCodiTecla <= 57) {
				eventTecla.addClass('black'); // Vuelve a su color original (Numeros)
			} else {
				eventTecla.addClass('white'); // Vuelve a su color original (Letras)
			}
        }

		eventTecla.removeClass('activa');
    });
    // Atacar amb tecles
}
init();
//# sourceMappingURL=script.js.map