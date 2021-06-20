# Procesverslag

## Over
Naam: Lichelle de Lange
Klas: VID-2a
Minor: Visual Interface Design

## Concept
Een bloemenwijde 

## Features
Generatieve: Er verschijnen telkens meer bloemen in het bloemenveld. 

Input: drukt de gebruiker een willekeurige knop in dan zal het gaan 'waaien'
drukt de gebruiker met de muis in het veld dan zal er een gietertje in beeld komen en zullen de bloemen groeien. 

## Onderzoek & inspiratie
Ik ging opzoek naar inspiratie op de generative art website van Danny. Ik vond hier ontzettende mooie kunstwerken, evenals je generative art opzoekt op bijvoorbeeld pinterest. Je ziet vooral veel beelden die vloeiend in elkaar overlopen, prachtig vond ik het. 

Maar na een feedback gesprek kwam de vraag wat dat dan met mij te maken zou hebben. ja niet zo veel. Ik ben gaan nadenken en tijdens het wandelen (corona hobby), en ik besefte mij dat ik veel beter om mij heen kijk en zo veel mogelijk wil opnemen. Toen wij begonnen met het tweede deel van de minor begon de zon te schijnen, en de bloemen stonden volop in de bloei. Iets waar ik ontzettend gelukkig van word. En zo ben ik erop gekomen een generatief bloemenveld te maken. 

## Voortang
Dit blok (eigenlijk jaar), was niet mijn beste tijd. Het is een tijd waarin ik mijzelf ben tegengekomen en hard met mijzelf aan de slag ben gegaan. Dit gaat gepaard met ups en downs. Nu is programmeren niet mijn sterkte kant. Ik heb dit jaar ook pas internet standaarden en inleiding programmeren gehaald :) Dus toen ik hoorde dat we dit vak kregen en moesten programmeren stond ik niet te springen. 

En de combi van en al niet helemaal lekker in je vel zitten, en een vak waar ik spontaan paniek van krijg werkt niet even lekker. Dit is dan ook een reden dat ik pas laat ben begonnen. Ik kon mijzelf er niet toe zetten, en durfde niet te beginnen. Tijdens de lessen kon ik jou (danny ) uitleg helemaal begrijpen maar zodra je er dan zelf aan gaat zitten is het even andere koek. 

Na het behalen van interface en bewegen had ik iets meer rust en ben ik begonnen aan dit proces. Ik ben begonnen het tekenen van de afbeeldingen en het bekijken van tutorials. Ik heb nogal moeite gehad met deze opdracht en geen feedback kunnen krijgen omdat ik zo laat was begonnen. Gelukkig kon ik een oud klasgenootje om hulp vragen, hij heeft mij geholpen. 


Hierna ben ik begonnen met het programmeren. Ik heb 2 js bestanden aangemaakt; sketch en flower. Sketch is eigenlijk de 'logica' van de tekening, en flower is een 'flower class' waarin eigenlijk de bloem beschreven wordt. 

## Het kunstwerk 
Zoals ik al zei ik heb 2 js bestanden aangemaakt. 

* Sketch 

De set(up) wordt 1 keer gerund, wanneer de pagina geladen wordt. In setup() staan dus eigenlijk een paar dingen, het canvas, het tekenveld, een lege array voor de bloemen, ik heb er al een paar gepushed zodat het scherm niet leeg is. 

Elke bloem word met de .show() aangeroepen, hiermee worden ze getekend. Met de framerate bepaalde ik de snelheid van de frames. 

draw() 
De draw() wordt constant gerund, als een soort loop, en voegt elke 10 frames (wanneer het aantal frames precies deelbaar is door 10, dus 10, 20, 30, 40, 50, etc.) een nieuwe bloem toe aan de array. en roept vervolgens de .show() weer een aan op alle bloemen in de array. omdat er elke keer een nieuwe bloem aan de array wordt toegevoegd wordt die array steeds langer en voert de .show() functie steeds meer bloemen uit. 

Keyispressed - laat de bloemen bewegen door een toets in te drukken
mouseispressed - laat gieter zien wanneer je de muis inklikt


* flower 

4 eigenschappen voor de bloemen. 
size - random van 200 tot 400 px 
positie op de x-as - random van 0 tot 700 px, min de helft van de breedte. zo gaan ze niet volledig uit beeld. 
positie op de y-as - 400 is de hoogte van het canvas, min de grootte van de bloem zodat ze op de grond blijven staan. 
de img 

De functies:
show() tekent de image, met de variabelen die voor de bloem zij aangemaakt, dus:
teken een img met die afbeelding, op deze x en y positie, met deze groottes, lengte en breedte in dit geval hetzelfde
move() beweegt de bloem een heel klein beetje,
dus de x positie wordt aangepast naar dezelde positie +1 of -1
grow() groeit de, size is dezelfde grootte + 1, en schuift hem ook iets naar links en iets naar onder zodat de posities nog kloppen naar de nieuwe grootte

Doordat draw() steeds loopt, wordt de bloem dus eigenlijk de hele tijd opnieuw getekent. Wanneer de move() of grow() functies dus aangeroepen worden, zijn de variabelen van de bloem ietjes veranderd. Wanneer deze dus opnieuw getekend wordt zal hij de nieuwe grootte of positie dus laten zien


## conculsie 
Ik vond het niet gemakkelijk, maar met behulp van een oud klasgenoot en meerdere tuttorials heb ik de uitdaging doorstaan en er iets van weten te maken en was het minder erg als waar ik van te voren bang voor was. Danny bedankt voor je enthousiasmte tijdens de lessen. 

## Bronnen 
* Frame rate https://p5js.org/reference/#/p5/frameRate - framerate is de snelheid van de frames dus de snelheid van het programma
* Frame count https://p5js.org/reference/#/p5/frameCount - 
* Key Press https://p5js.org/reference/#/p5/keyIsPressed - Laat de bloemen bewegen wanneer je op een knop drukt 
* Mouse press https://p5js.org/reference/#/p5/mouseIsPressed - Toont de gieter wanneer je de muis indrukt 
* Hulp gehad van een oud geklasgenootje ! 


