class Flower {
	constructor() {
		this.size = random(200, 400); 
		//plaatst de bloemen op de grond
		this.x = random(0, 700) - (this.size / 2); 

		this.y = 400 - this.size; //volledige hoogte van het canvas min de hoogte van de bloem om hem op de grond te zetten
		//kiest een willekeurige img uit de array, van 0 tot de lengte van de array
		this.img = images[Math.floor(random(0, images.length))]
	}

	//toont de bloemen door hem een image te geven op de bovenstaande plekken
	show() {
		image(this.img, this.x, this.y, this.size, this.size)
	}

	//beweegt de bloem. Functie die de plek op de x as steeds iets aanpast, +1 of -1
	move() {
		this.x = this.x + random(-1, 1);
	}

	grow() {
		//laat de bloemen groeien
		this.size = this.size + 1
		//pas y positie aan door nieuwe grote
		this.y = 400 - this.size;
		this.x = this.x - 0.5 // zorgt er voor dat de bloemen niet veel verplaatsen wanneer ze groeien
	}
}

