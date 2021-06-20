//maak de flower class
class Flower {
	//waardes die de bloem meekrijgt wanneer deze gemaakt wordt
	constructor() {
		this.size = random(200, 400); //random grootte van 200 tot 400 px
		//zet de bloemen op de grond
		this.x = random(0, 700) - (this.size / 2); //willekeurige positie op de x as

		this.y = 400 - this.size; //volledige hoogte van het canvas min de hoogte van de bloem om hem opde grond te zetten
		//kies een willekeurige img uit de array, van 0 tot de lengte van de array
		this.img = images[Math.floor(random(0, images.length))]
	}

	//toon de bloem door hem een image te geven op de bovenstaande plekken
	show() {
		image(this.img, this.x, this.y, this.size, this.size)
	}

	//functie die de plek op de x as steeds iets aanpast
	move() {
		this.x = this.x + random(-1, 1);
	}

	grow() {
		//groei bloem
		this.size = this.size + 1
		//pas y positie aan door nieuwe grote
		this.y = 400 - this.size;
		this.x = this.x - 0.5 // zorgt er voor dat de bloemen niet enorm verplaatsen wanneer ze groeien
	}
}

