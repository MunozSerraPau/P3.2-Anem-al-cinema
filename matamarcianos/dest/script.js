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
    
    let intervalId;

    $(document).keydown(function (e) {
        
        switch (e.which) {
            case 37: // Flecha izquierda
                moureNauEsquerra();
                break;
            case 39: // Flecha derecha
                if (!intervalId) {
                    intervalId = setInterval(function () {
                        let nau = $('#nau');
                        let joc = $('#joc');
                        let posNau = nau.position();
                        let posJoc = joc.position();
                        let jocWidth = joc.width();
                        let nauWidth = nau.width();

                        if (posNau.left + nauWidth < posJoc.left + jocWidth) {
                            nau.css('left', posNau.left + 10 + 'px');
                        }
                    }, 50); // Ajusta la velocidad del movimiento
                }
                moureNauDreta();
                break;
            case 38 || 40: // Flecha arriba
                dispara();
                break;
        }

        if (e.which === 39) { // Flecha derecha
            
        }
    });

    $(document).keyup(function (e) {
        if (e.which === 39) { // Flecha derecha
            clearInterval(intervalId);
            intervalId = null;
        }
    });

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

/**
    $(document).ready(function() {
        $(".white").mouseenter(function() {
            // Obtener el id del div al pasar el cursor
            const id = $(this).attr("id");
            const eventTecla = $(`#k${id}`); // Busca el elemento con ID correspondiente
            console.log("El ID del div es: " + id);


            if (!teclaSeleccionada[id]) {
                console.log("La tecla no está seleccionada" + eventTecla);
                teclaSeleccionada[id] = true;
                
                if (eventTecla.length) {
                    console.log("La tecla existe");
                    soTecla(id); // Reproduce el sonido de la tecla
                    eventTecla.addClass('activa');
                }
            }

        });

        $(".black").mouseenter(function() {
            // Obtener el id del div al pasar el cursor
            var id = $(this).attr("id");
            console.log("El ID del div es: " + id);
        });
    });
 */