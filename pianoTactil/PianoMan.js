"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Pau Muñoz Serra i Alba Matamoros Morales
///////////////////////////////////////////////////////////

function init() {
	//TouchEmulator();

	const llistatTeclaCanvi = {
		//K, L, Ñ
		"75": 'k82',
		"76": 'k84',
		"192": 'k89',
		//Q, W, E:
		"81": 'k71',
		"87": 'k72',
		"69": 'k74',
	}

    let teclaSeleccionada = {};

	$(".white, .black").on("touchstart", function() {
        const id = $(this).attr("id");
        const eventTecla = $(`#${id}`);
        const eventCodiTecla = id.substring(1); // Obtiene el código de la tecla desde el ID
        
        seleccionarTecla(llistatTeclaCanvi, teclaSeleccionada, eventCodiTecla, eventTecla, id);
    });

    
    $(".white, .black").on("touchend", function() {
        const id = $(this).attr("id");
        const eventTecla = $(`#${id}`);
        const eventCodiTecla = id.substring(1); // Obtiene el código de la tecla desde el ID

        deseleccionarTecla(llistatTeclaCanvi, teclaSeleccionada, eventCodiTecla, eventTecla, id);
    });


	$(document).keydown(function (e) {
		let eventCodiTecla = e.which // Obtiene el código de la tecla presionada
        let eventTecla = $(`#k${eventCodiTecla}`); // Busca el elemento con ID correspondiente
		let idTeclaSeleccionada = eventTecla.attr('id');

        seleccionarTecla(llistatTeclaCanvi, teclaSeleccionada, eventCodiTecla, eventTecla, idTeclaSeleccionada);
	});


	$(document).keyup(function (e) {
        let eventCodiTecla = e.which; //r Obtiene el código de la tecla soltada
        let eventTecla = $(`#k${eventCodiTecla}`); // Selecciona el rectángulo correspondiente a la tecla
		let idTeclaSeleccionada = eventTecla.attr('id');

        deseleccionarTecla(llistatTeclaCanvi, teclaSeleccionada, eventCodiTecla, eventTecla, idTeclaSeleccionada);
    });
}

function seleccionarTecla(llistatTeclaCanvi, teclaSeleccionada, eventCodiTecla, eventTecla, idTeclaSeleccionada) {
    if (!idTeclaSeleccionada) {
        const canviTeclaSeleccionada = llistatTeclaCanvi[eventCodiTecla];
        idTeclaSeleccionada = canviTeclaSeleccionada;
        eventTecla = $(`#${canviTeclaSeleccionada}`);
    }

    if (!teclaSeleccionada[eventCodiTecla]) {
        teclaSeleccionada[eventCodiTecla] = true;

        if (idTeclaSeleccionada) {
            soTecla(idTeclaSeleccionada); // Reproduce el sonido de la tecla
            eventTecla.addClass('activa');
        }
    }
}

function deseleccionarTecla(llistatTeclaCanvi, teclaSeleccionada, eventCodiTecla, eventTecla, idTeclaSeleccionada) {
    if (!idTeclaSeleccionada) {
        const canviTeclaSeleccionada = llistatTeclaCanvi[eventCodiTecla];
        idTeclaSeleccionada = canviTeclaSeleccionada;
        eventTecla = $(`#${canviTeclaSeleccionada}`);
    }

    if (eventTecla.length) { // Si existe el rectángulo
        if (eventCodiTecla >= 48 && eventCodiTecla <= 57) {
            eventTecla.addClass('black'); // Vuelve a su color original (Numeros)
        } else {
            eventTecla.addClass('white'); // Vuelve a su color original (Letras)
        }
    }

    teclaSeleccionada[eventCodiTecla] = false;
    eventTecla.removeClass('activa');
}

function soTecla( teclaId ) {
    const llistatTeclaSo = {
		//Letras
        "k65": 'c1', //A 
        "k83": 'd1', //S
        "k68": 'e1', //D
        "k70": 'f1', //F
        "k71": 'g1', //G
        "k72": 'a1', //H
        "k74": 'b1', //J
        "k82": 'c2', //R
        "k84": 'd2', //T
        "k89": 'e2', //Y
        "k85": 'f2', //U
        "k73": 'g2', //I
        "k79": 'a2', //O
        "k80": 'b2', //P
		//Numeros
        "k49": 'c1s', //1
        "k50": 'd1s', //2
        "k51": 'f1s', //3
        "k52": 'g1s', //4
        "k53": 'a1s', //5
        "k54": 'c2s', //6
        "k55": 'd2s', //7
        "k56": 'f2s', //8
        "k57": 'g2s', //9
        "k48": 'a2s', //0
		//K, L, Ñ
		"75": 'c2', //K
        "76": 'd2', //L
        "192": 'e2', //Ñ
        //Q, W, E:
        "81": 'g1', //Q
        "87": 'a1', //W
        "69": 'b1', //E
    }

	const nomArxiuSo = llistatTeclaSo[teclaId]; // Obtiene el sonido correspondiente a la tecla

	const rutaArxiuSo = `PianoMan/${nomArxiuSo}.mp3`;
	const soNota = new Audio(rutaArxiuSo);
	soNota.play();
	return;
}

$(document).ready(function () {
    init(); // Inicializa cuando el DOM esté listo
});
