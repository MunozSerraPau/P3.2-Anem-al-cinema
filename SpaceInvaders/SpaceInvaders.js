"use strict";

///////////////////////////////////////////////////////////
//   Alumnes: Pau Muñoz Serra i Alba Matamoros Morales   //
///////////////////////////////////////////////////////////

const FILES = 5;		// Nombre de files de l'exèrcit dels aliens
const COLUMNES = 8;		// Nombre de columnes de l'exèrcit dels aliens
const ALIENS = FILES * COLUMNES;	// Nombre total d'aliens
let aliensDeads = 0;	// Nombre d'aliens morts

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
		this.disparar();
	}

	disparar() {
		$(document).keydown((event) => {
			if ((event.key === " " || event.key === "Enter") && document.getElementById("bala") === null) {
				this.configurarBala();
			}
		});

		$(document).mousedown((event) => {
			if (event.button === 0 && document.getElementById("bala") === null) {
				this.configurarBala();
			} else if ((event.button === 2 && !event.shiftKey) && document.getElementById("bala") === null) {
				this.configurarBala();
			}
		});

		// Allow default context menu on right-click with Shift key
		$(document).contextmenu((event) => {
			if (!event.shiftKey) {
				event.preventDefault();
			}
		});

	}

	configurarBala() {
		let bala = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		bala.setAttribute("x", this.xPos + -2);
		bala.setAttribute("y", this.yPos - 10);
		bala.setAttribute("width", 5);
		bala.setAttribute("height", 10);
		bala.setAttribute("fill", "red");
		bala.setAttribute("id", "bala");
		document.getElementById("joc").appendChild(bala);

		let intervalId = setInterval(() => {
			let yPos = parseInt(bala.getAttribute("y"));
			if (yPos <= 0) {
				clearInterval(intervalId);
				bala.remove();
			} else {
				bala.setAttribute("y", yPos - 5);
				let aliens = document.querySelectorAll("#aliens use");
				aliens.forEach((alien) => {	
					let alienPos = alien.getBoundingClientRect();
					let balaPos = bala.getBoundingClientRect();
					if (
						balaPos.left < alienPos.right &&
						balaPos.right > alienPos.left &&
						balaPos.top < alienPos.bottom &&
						balaPos.bottom > alienPos.top
					) {
						clearInterval(intervalId);
						bala.remove();
						alien.remove();
						aliensDeads++;
						;
						this.comprovarVictoria();
					}
				});
			}
		}, 2);	
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

	comprovarVictoria() {
		if (aliensDeads == ALIENS) {
			setTimeout(() => {
				alert("Has Guanyat!");
			}, 500)
		}
	}
}

class Exercit {
	constructor() {
		// Inicialitzar valors
		this.xPos = 90;	// Posició horitzontal de l'exèrcit d'aliens
		this.yPos = 40; // Posició vertical de l'exèrcit d'aliens
		this.nAliens = ALIENS;

		this.direction = 1;
		this.speed = 2;

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

		this.moureExercitAliens();
	}

	moureExercitAliens() {
		//Velocitat dels aliens	depenent dels aliens morts.

		setInterval(() => {
			if (aliensDeads == 10) { this.speed = 3; }
			if (aliensDeads == 20) { this.speed = 4; } 
			else if (aliensDeads == 30) { this.speed = 5; } 

			this.xPos += this.speed * this.direction;
			
			if (this.xPos >= (WIDTH - document.getElementById("aliens").getBoundingClientRect().width - 20)) {
				this.direction = -1;
				this.yPos += 10;
			} else if (this.xPos <= 20) {
				this.direction = 1;
				this.yPos += 10;
			}
		
			this.exercit.setAttribute("transform", `translate(${this.xPos} ${this.yPos})`);
		}, 30);
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