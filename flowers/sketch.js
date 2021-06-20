function preload() {
	// alle afbeeldingen laden vooraf al in.  p5 moet een image eerst laden, 
	// dus alle img's worden eerst in de preload functie geladen
	gieter = loadImage('/gieter.svg')
	img1 = loadImage('/bloemen/bloem1.svg');
	img2 = loadImage('/bloemen/bloem2.svg');
	img3 = loadImage('/bloemen/bloem3.svg');
	img4 = loadImage('/bloemen/bloem4.svg');
	img5 = loadImage('/bloemen/bloem5.svg');
	img6 = loadImage('/bloemen/bloem6.svg');
	img7 = loadImage('/bloemen/bloem7.svg');
	img8 = loadImage('/bloemen/bloem8.svg');
	img9 = loadImage('/bloemen/bloem9.svg');
	img10 = loadImage('/bloemen/bloem10.svg');
	img11 = loadImage('/bloemen/bloem11.svg');
	img12 = loadImage('/bloemen/bloem12.svg');
	img13 = loadImage('/bloemen/bloem13.svg');
	img14 = loadImage('/bloemen/bloem14.svg');
	img15 = loadImage('/bloemen/bloem15.svg');
	img16 = loadImage('/bloemen/bloem16.svg');
	img17 = loadImage('/bloemen/bloem17.svg');
	img18 = loadImage('/bloemen/bloem18.svg');
	img19 = loadImage('/bloemen/bloem19.svg');
	img20 = loadImage('/bloemen/bloem20.svg');
	img21 = loadImage('/bloemen/bloem21.svg');
	img21 = loadImage('/bloemen/bloem21.svg');
	img22 = loadImage('/bloemen/bloem22.svg');
	img23 = loadImage('/bloemen/bloem23.svg');
	img24 = loadImage('/bloemen/bloem24.svg');
	img25 = loadImage('/bloemen/bloem25.svg');
	img26 = loadImage('/bloemen/bloem26.svg');
	//array met alle images om er later eentje te kiezen
	images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26]
}

// de setup word een keer gerund
function setup() {
	//het canvas 
	createCanvas(800, 400);
	//lege array voor de bloemen 
	flowers = []

	//alvast een paar bloemen door een nieuwe bloem naar de array te pushen
	var aantalBloemen = 10;
	for (let i = 0; i < aantalBloemen; i++) {
		flowers.push(new Flower())
	}
	// Elke bloem word met de .show() aangeroepen.
	for (i = 0; i < flowers.length; i++) {
		flowers[i].show();
	}
	//snelheid van de frames 
	//https://p5js.org/reference/#/p5/frameRate
	frameRate(15);
}

//de draw wordt er steeds doorheen geloopt
function draw() {
	//de achtergrond
	background(217, 239, 243);

	// Voegt iedere 10 frames een nieuwe bloem toe
	//https://p5js.org/reference/#/p5/frameCount
	if (frameCount % 10 == 0) {
		flowers.push(new Flower());
	}

	//Elke bloem word met de .show() aangeroepen.  
	for (i = 0; i < flowers.length; i++) {
		flowers[i].show();
	}

	//laat de bloemen bewegen door een toets in te drukken
	//https://p5js.org/reference/#/p5/keyIsPressed
	if (keyIsPressed) {
		for (i = 0; i < flowers.length; i++) {
			//beweeg doormiddel van de bloem zijn .move() functie
			flowers[i].move();
		}
	}

	//laat gieter zien wanneer je de muis inklikt
	//https://p5js.org/reference/#/p5/mouseIsPressed
	if (mouseIsPressed) {
		image(gieter, 100, 0, 600, 600)

		//laat alle bloemen groeien
		for (i = 0; i < flowers.length; i++) {
			//groei doormiddel van de bloem zijn groei functie
			flowers[i].grow();
		}
	}

}


