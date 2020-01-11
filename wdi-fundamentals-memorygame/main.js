const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	let cardThree = cards[1];
	let cardFour = cards[3];

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
}

flipCard(0);
flipCard(2);

