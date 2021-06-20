function preload() {
	//laad alle images vooraf in
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
	//maak de array met alle images om er later eentje te kiezen
	images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26]
}

function setup() {
	//maak het canvas
	createCanvas(800, 400);
	//maak lege array voor de bloemen
	flowers = []

	//maak alvast een paar bloemen door een nieuwe bloem naar de array te pushen
	var aantalBloemen = 10;
	for (let i = 0; i < aantalBloemen; i++) {
		flowers.push(new Flower())
	}
	//toom de bloemen met hun eigen .show() functie
	for (i = 0; i < flowers.length; i++) {
		flowers[i].show();
	}
	//framerate dus snelheid
	//https://p5js.org/reference/#/p5/frameRate
	frameRate(15);
}

//draw wordt steeds doorheen geloopt
function draw() {
	//teken de achtergrond
	background(217, 239, 243);

	// iedere 10 frames een nieuwe bloem
	//https://p5js.org/reference/#/p5/frameCount
	if (frameCount % 10 == 0) {
		flowers.push(new Flower());
	}

	//laat ze allemaal zien met hun eigen show functie
	for (i = 0; i < flowers.length; i++) {
		flowers[i].show();
	}

	//wanneer er een toets ingedrukt wordt, laat de bloemen bewegen
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


