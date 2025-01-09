let $ : any;

function moureNauEsquerra() {
    // Lògica per moure la nau a l'esquerra
    let nau = $('#nau');
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
    $(document).keydown(function (event: any) {
        const eventCodiTecla = event.which; // Retorna l'id de la tecla que s'ha premut
        console.log(`Tecla premuda: ${eventCodiTecla} -- '${event.key}'`);
        switch (eventCodiTecla) {
            case 37:
                moureNauEsquerra();
                break;
            case 39:
                moureNauDreta();
                break;
            case 32:
                atacar();
                break;
        }

    });

    // Atacar amb tecles
}
init();