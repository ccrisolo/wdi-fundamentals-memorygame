const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

const cardOne = cards[0];
const cardTwo = cards[2];
const cardThree = cards[1];
const cardFour = cards[3];

cardsInPlay.push(cardOne);
console.log("User flipped queen");

cardsInPlay.push(cardTwo);
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again.");
	}
}