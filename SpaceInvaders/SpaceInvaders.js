"use strict";

///////////////////////////////////////////////////////////
//   Alumnes: Pau Muñoz Serra i Alba Matamoros Morales   //
///////////////////////////////////////////////////////////

const FILES = 5;		// Nombre de files de l'exèrcit dels aliens
const COLUMNES = 8;		// Nombre de columnes de l'exèrcit dels aliens
const ALIENS = FILES * COLUMNES;	// Nombre total d'aliens

const WIDTH = 640;	// Amplada de l'àrea de joc
const HEIGHT = 480;	// Alçada de l'àrea de joc

class Destructor {
	constructor() {
		// Inicialitzar valors
		this.xPos = 320; // Posició horitzontal de la nau
		this.yPos = 460; // Posició vertical de la nau

		// Moure la nau a la posició inicial
		this.nau = document.getElementById("nau");
		this.nau.setAttribute("transform", `translate(${this.xPos} ${this.yPos})`);
		
		//Moviment nau
		this.moureNau();
	}

	moureNau() {
		let intervalId = null;
		let movimentEsquerra = false;
		let movimentDreta = false;

		const move = () => {
			if (movimentEsquerra) {
				this.moureEsquerra();
			}
			if (movimentDreta) {
				this.moureDreta();
			}
		};

		$(document).keydown((event) => {
			console.log(event.key);
			if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
				movimentEsquerra = true;
				if (!intervalId) {
					intervalId = setInterval(move, 20);
				}
			} 
			if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
				movimentDreta = true;
				if (!intervalId) {
					intervalId = setInterval(move, 20);
				}
			}
        });

        $(document).keyup((event) => {
			if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
				movimentEsquerra = false;
			} 
			if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
				movimentDreta = false;
			}
			if (!movimentEsquerra && !movimentDreta) {
				clearInterval(intervalId);
				intervalId = null;
			}
		});

		$(document).mousemove((event) => {
			let ratoliX = event.clientX;

			this.xPos = Math.max(20, Math.min(WIDTH - 20, ratoliX));

			this.actualitzarPosicio();
		});
	}

	disparar() {
		$(document).keydown((event) => {
		});
	}

	moureEsquerra() {
		if (this.xPos > 20) {
			this.xPos -= 5;
			this.actualitzarPosicio();
		}
	}

	moureDreta() {
		if (this.xPos < WIDTH - 20) {
			this.xPos += 5;
			this.actualitzarPosicio();
		}
	}

	actualitzarPosicio() {
		this.nau.setAttribute("transform", `translate(${this.xPos} ${this.yPos})`);
	}
}


class Exercit {
	constructor() {
		// Inicialitzar valors
		this.xPos = 90;	// Posició horitzontal de l'exèrcit d'aliens
		this.yPos = 40; // Posició vertical de l'exèrcit d'aliens
		this.nAliens = ALIENS;

		// Posicionar l'exèrcit dels aliens
		this.exercit = document.getElementById("aliens");
		this.exercit.setAttribute("transform", "translate(" + this.xPos + " " + this.yPos + ")");

		// Moure l'alien original fora de l'àrea de joc
		document.getElementById("alien").setAttribute("transform", "translate(-20 -15)");

		// Crear còpies de l'alien original
		for (let i = 0; i < FILES; i++) {
			for (let j = 0; j < COLUMNES; j++) {
				this.exercit.innerHTML += "<use id='a" + i + j + "' href='#alien' transform='translate(" + (j * 60 + 40) + " " + (i * 40 + 30) + ")'></use>";
			}
		}
	}
}

function init() {
	// Crear la nau i l'exèrcit dels aliens
	let destructor = new Destructor();
	let exercit = new Exercit();
}

$(document).ready(function () {
    init(); // Inicializa cuando el DOM esté listo
});