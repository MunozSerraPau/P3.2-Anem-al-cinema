"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Pau Muñoz Serra i Alba Matamoros Morales
///////////////////////////////////////////////////////////

function init() {
	//TouchEmulator();
	$(document).keydown(function (e) {
		const eventCodiTecla = e.which // Obtiene el código de la tecla presionada
		const eventTecla = $(`#k${eventCodiTecla}`); // Busca el elemento con ID correspondiente
		const idTeclaSeleccionada = eventTecla.attr('id'); // Obtiene el ID de la tecla seleccionada (Lo utilizamos para el sonido)

		if (eventTecla.length) {
			eventTecla.addClass('activa');
			soTecla(idTeclaSeleccionada); // Reproduce el sonido correspondiente
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
}

$(document).ready(function () {
    init(); // Inicializa cuando el DOM esté listo
});

function soTecla (so) {
	const teclaISoroll = {
        65: 'a1',  // Tecla 'A'
        83: 'a1s', // Tecla 'S'
        68: 'a2',  // Tecla 'D'
        70: 'a2s', // Tecla 'F'
        71: 'b1',  // Tecla 'G'
        72: 'b2',  // Tecla 'H'
        74: 'c1',  // Tecla 'J'
        82: 'c1s', // Tecla 'R'
        84: 'c2',  // Tecla 'T'
        89: 'c2s', // Tecla 'Y'
        85: 'd1',  // Tecla 'U'
        73: 'd2',  // Tecla 'I'
        79: 'd2s', // Tecla 'O'
        80: 'e1',  // Tecla 'P'
        49: 'k1',  // Tecla '1'
        50: 'k2',  // Tecla '2'
        51: 'k3',  // Tecla '3'
        52: 'k4',  // Tecla '4'
        53: 'k5',  // Tecla '5'
        54: 'k6',  // Tecla '6'
        55: 'k7',  // Tecla '7'
        56: 'k8',  // Tecla '8'
        57: 'k9',  // Tecla '9'
        48: 'k0',  // Tecla '0'
    };

}
