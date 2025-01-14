"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Pau Muñoz Serra i Alba Matamoros Morales
///////////////////////////////////////////////////////////

function init() {
	//TouchEmulator();
	$(document).keydown(function (e) {
		const eventCodiTecla = e.which // Obtiene el código de la tecla presionada
		const eventTecla = $(`#k${eventCodiTecla}`); // Busca el elemento con ID correspondiente
		const idTeclaSeleccionada = eventTecla.attr('id');
		console.log(idTeclaSeleccionada);

		if (eventTecla.length) {
			soTecla(idTeclaSeleccionada); // Reproduce el sonido de la tecla
			eventTecla.addClass('activa');
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

function soTecla( teclaId ) {
    const llistatTeclaSo = {
        "k65": 'a1',  
        "k83": 'a1s',
        "k68": 'a2', 
        "k70": 'a2s',
        "k71": 'b1', 
        "k72": 'b2', 
        "k74": 'c1', 
        "k82": 'c1s',
        "k84": 'c2', 
        "k89": 'c2s',
        "k85": 'd1', 
        "k73": 'd1s', 
        "k79": 'd2',
        "k80": 'd2s', 
        "k49": 'e1', 
        "k50": 'e2', 
        "k51": 'f1', 
        "k52": 'f1s', 
        "k53": 'f2', 
        "k54": 'f2s', 
        "k55": 'g1', 
        "k56": 'g1s', 
        "k57": 'g2', 
        "k48": 'g2s', 
    }

	const nomArxiuSo = llistatTeclaSo[teclaId]; // Obtiene el sonido correspondiente a la tecla

	const rutaArxiuSo = `PianoMan/${nomArxiuSo}.mp3`;
	const soNota = new Audio(rutaArxiuSo);
	soNota.play();
	return;
}
